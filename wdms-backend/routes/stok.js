const express = require('express');
const router = express.Router();
const db = require('../db');

// GET /api/stok — ambil semua stok
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT s.id_stok, s.id_menu, m.nama_menu, m.kategori, m.status,
             s.jumlah_stok, s.updated_at
      FROM stok s
      JOIN menu m ON s.id_menu = m.id_menu
      ORDER BY m.kategori, m.nama_menu
    `);
    res.json({ success: true, data: rows });
  } catch (err) {
    console.error('[STOK] GET error:', err);
    res.status(500).json({ success: false, message: 'Gagal mengambil data stok.' });
  }
});

// PUT /api/stok/:id_menu — update stok berdasarkan id menu
router.put('/:id_menu', async (req, res) => {
  const { id_menu } = req.params;
  const { jumlah_stok } = req.body;
  if (jumlah_stok === undefined) {
    return res.status(400).json({ success: false, message: 'Jumlah stok wajib diisi.' });
  }

  const conn = await db.getConnection();
  try {
    await conn.beginTransaction();
    const [existing] = await conn.query('SELECT id_stok FROM stok WHERE id_menu = ?', [id_menu]);
    if (existing.length > 0) {
      await conn.query('UPDATE stok SET jumlah_stok = ? WHERE id_menu = ?', [jumlah_stok, id_menu]);
    } else {
      await conn.query('INSERT INTO stok (id_menu, jumlah_stok) VALUES (?, ?)', [id_menu, jumlah_stok]);
    }

    // Perbarui status menu secara otomatis
    const newStatus = (parseInt(jumlah_stok) === 0) ? 'Habis' : 'Tersedia';
    await conn.query('UPDATE menu SET status = ? WHERE id_menu = ?', [newStatus, id_menu]);

    await conn.commit();
    res.json({ success: true, message: 'Stok berhasil diperbarui.' });
  } catch (err) {
    await conn.rollback();
    console.error('[STOK] PUT error:', err);
    res.status(500).json({ success: false, message: 'Gagal memperbarui stok.' });
  } finally {
    conn.release();
  }
});

module.exports = router;
