const express = require('express');
const router = express.Router();
const db = require('../db');

// POST /api/transaksi — buat pesanan baru + detail + pembayaran + transaksi
router.post('/', async (req, res) => {
  const { id_user, items, total, bayar, kembalian, metode } = req.body;

  if (!id_user || !items || items.length === 0 || !total || !bayar) {
    return res.status(400).json({ success: false, message: 'Data transaksi tidak lengkap.' });
  }

  const conn = await db.getConnection();
  try {
    await conn.beginTransaction();

    // 1. Buat pesanan
    const [pesananResult] = await conn.query(
      'INSERT INTO pesanan (id_user, status_pesanan) VALUES (?, ?)',
      [id_user, 'Selesai']
    );
    const id_pesanan = pesananResult.insertId;

    // 2. Buat detail pesanan & kurangi stok
    for (const item of items) {
      const subTotal = item.harga_jual * item.qty;
      await conn.query(
        'INSERT INTO pesanan_detail (id_pesanan, id_menu, jumlah, harga_satuan, sub_total) VALUES (?, ?, ?, ?, ?)',
        [id_pesanan, item.id_menu, item.qty, item.harga_jual, subTotal]
      );

      // Kurangi stok
      await conn.query(
        'UPDATE stok SET jumlah_stok = GREATEST(0, jumlah_stok - ?) WHERE id_menu = ?',
        [item.qty, item.id_menu]
      );

      // Perbarui status menu jika stok jadi 0
      await conn.query(
        `
        UPDATE menu SET status = 'Habis'
        WHERE id_menu = ? AND (SELECT jumlah_stok FROM stok WHERE id_menu = ?) <= 0
      `,
        [item.id_menu, item.id_menu]
      );
    }

    // 3. Buat pembayaran
    const [bayarResult] = await conn.query(
      'INSERT INTO pembayaran (id_pesanan, total_bayar, jumlah_bayar, kembalian, metode_bayar) VALUES (?, ?, ?, ?, ?)',
      [id_pesanan, total, bayar, kembalian, metode]
    );
    const id_pembayaran = bayarResult.insertId;

    // 4. Buat transaksi
    const [trxResult] = await conn.query(
      'INSERT INTO transaksi (id_pesanan, id_pembayaran, total_transaksi) VALUES (?, ?, ?)',
      [id_pesanan, id_pembayaran, total]
    );
    const id_transaksi = trxResult.insertId;

    await conn.commit();

    res.status(201).json({
      success: true,
      id_transaksi,
      id_pesanan,
      id_pembayaran,
      message: 'Transaksi berhasil disimpan.',
    });
  } catch (err) {
    await conn.rollback();
    console.error('[TRANSAKSI] POST error:', err);
    res.status(500).json({ success: false, message: 'Gagal menyimpan transaksi.' });
  } finally {
    conn.release();
  }
});

// GET /api/transaksi — ambil semua riwayat transaksi
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT t.id_transaksi, t.tanggal_transaksi, t.total_transaksi,
             p.metode_bayar, p.jumlah_bayar, p.kembalian,
             u.nama AS kasir,
             ps.id_pesanan
      FROM transaksi t
      JOIN pembayaran p ON t.id_pembayaran = p.id_pembayaran
      JOIN pesanan ps ON t.id_pesanan = ps.id_pesanan
      JOIN users u ON ps.id_user = u.id_user
      ORDER BY t.tanggal_transaksi DESC
    `);

    // Ambil juga detail item untuk setiap transaksi
    const enriched = await Promise.all(
      rows.map(async (trx) => {
        const [items] = await db.query(
          `
        SELECT pd.jumlah AS qty, pd.harga_satuan, pd.sub_total, m.nama_menu, m.id_menu
        FROM pesanan_detail pd
        JOIN menu m ON pd.id_menu = m.id_menu
        WHERE pd.id_pesanan = ?
      `,
          [trx.id_pesanan]
        );
        return { ...trx, items };
      })
    );

    res.json({ success: true, data: enriched });
  } catch (err) {
    console.error('[TRANSAKSI] GET error:', err);
    res.status(500).json({ success: false, message: 'Gagal mengambil riwayat transaksi.' });
  }
});

// GET /api/transaksi/laporan — agregasi untuk laporan penjualan
router.get('/laporan', async (req, res) => {
  const { periode } = req.query; // 'hari', 'minggu', 'bulan'
  let dateFilter = 'DATE(t.tanggal_transaksi) = CURDATE()';
  if (periode === 'minggu') dateFilter = 't.tanggal_transaksi >= DATE_SUB(NOW(), INTERVAL 7 DAY)';
  if (periode === 'bulan')
    dateFilter =
      'MONTH(t.tanggal_transaksi) = MONTH(NOW()) AND YEAR(t.tanggal_transaksi) = YEAR(NOW())';

  try {
    const [[stats]] = await db.query(`
      SELECT COUNT(*) AS total_transaksi, COALESCE(SUM(t.total_transaksi), 0) AS total_pendapatan
      FROM transaksi t WHERE ${dateFilter}
    `);

    const [menuTerlaris] = await db.query(`
      SELECT m.nama_menu, SUM(pd.jumlah) AS total_terjual
      FROM pesanan_detail pd
      JOIN menu m ON pd.id_menu = m.id_menu
      JOIN pesanan ps ON pd.id_pesanan = ps.id_pesanan
      JOIN transaksi t ON t.id_pesanan = ps.id_pesanan
      WHERE ${dateFilter}
      GROUP BY m.id_menu, m.nama_menu
      ORDER BY total_terjual DESC
      LIMIT 5
    `);

    let chartLabels = [];
    let chartData = [];

    if (periode === 'minggu') {
      const [rows] = await db.query(`
        SELECT DATE(t.tanggal_transaksi) AS day, COUNT(*) AS count
        FROM transaksi t
        WHERE DATE(t.tanggal_transaksi) >= DATE_SUB(CURDATE(), INTERVAL 6 DAY)
        GROUP BY DATE(t.tanggal_transaksi)
      `);

      const dayLabels = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
      const values = [0, 0, 0, 0, 0, 0, 0];

      rows.forEach((r) => {
        const d = new Date(r.day);
        const dayIndex = d.getDay();
        values[dayIndex] += Number(r.count);
      });

      chartLabels = dayLabels;
      chartData = values;
    } else if (periode === 'bulan') {
      const [rows] = await db.query(`
        SELECT CEIL(DAY(t.tanggal_transaksi) / 7) AS week_block, COUNT(*) AS count
        FROM transaksi t
        WHERE MONTH(t.tanggal_transaksi) = MONTH(NOW()) AND YEAR(t.tanggal_transaksi) = YEAR(NOW())
        GROUP BY week_block
        ORDER BY week_block
      `);

      const labels = ['Minggu 1', 'Minggu 2', 'Minggu 3', 'Minggu 4', 'Minggu 5'];
      const values = labels.map((_, index) => {
        const row = rows.find((r) => Number(r.week_block) === index + 1);
        return row ? Number(row.count) : 0;
      });

      // Trim trailing empty weeks beyond the current month duration.
      const today = new Date();
      const totalDays = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
      const maxWeeks = Math.ceil(totalDays / 7);
      chartLabels = labels.slice(0, maxWeeks);
      chartData = values.slice(0, maxWeeks);
    } else {
      // Ambil semua jam yang ada hari ini
      const [rows] = await db.query(`
        SELECT HOUR(t.tanggal_transaksi) AS hour, COUNT(*) AS count
        FROM transaksi t
        WHERE DATE(t.tanggal_transaksi) = CURDATE()
        GROUP BY HOUR(t.tanggal_transaksi)
      `);

      const labels = [];
      const values = [];

      // Loop dari jam 00 sampai 24 dengan langkah 2 jam
      for (let hour = 0; hour < 24; hour += 2) {
        labels.push(`${String(hour).padStart(2, '0')}:00`);

        // Cari data yang masuk ke blok jam ini
        const countInBlock = rows
          .filter((r) => Number(r.hour) === hour || Number(r.hour) === hour + 1)
          .reduce((sum, r) => sum + Number(r.count), 0);

        values.push(countInBlock);
      }
      chartLabels = labels;
      chartData = values;
    }

    res.json({ success: true, data: { stats, menuTerlaris, chartLabels, chartData } });
  } catch (err) {
    console.error('[LAPORAN] GET error:', err);
    res.status(500).json({ success: false, message: 'Gagal mengambil data laporan.' });
  }
});

module.exports = router;
