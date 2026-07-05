const express = require('express');
const router = express.Router();
const db = require('../db');

// GET /api/menu — ambil semua menu beserta stok
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT m.id_menu, m.nama_menu, m.kategori, m.harga_jual, m.status,
             COALESCE(s.jumlah_stok, 0) AS stok
      FROM menu m
      LEFT JOIN stok s ON m.id_menu = s.id_menu
      ORDER BY m.kategori, m.nama_menu
    `);
    res.json({ success: true, data: rows });
  } catch (err) {
    console.error('[MENU] GET error:', err);
    res.status(500).json({ success: false, message: 'Gagal mengambil data menu.' });
  }
});

// POST /api/menu — tambah menu baru
router.post('/', async (req, res) => {
  const { nama_menu, kategori, harga_jual, status, stok } = req.body;
  if (!nama_menu || !kategori || !harga_jual) {
    return res.status(400).json({ success: false, message: 'Data menu tidak lengkap.' });
  }
  const conn = await db.getConnection();
  try {
    await conn.beginTransaction();
    const [result] = await conn.query(
      'INSERT INTO menu (nama_menu, kategori, harga_jual, status) VALUES (?, ?, ?, ?)',
      [nama_menu, kategori, harga_jual, status || 'Tersedia']
    );
    const newMenuId = result.insertId;
    await conn.query('INSERT INTO stok (id_menu, jumlah_stok) VALUES (?, ?)', [
      newMenuId,
      stok || 0,
    ]);
    await conn.commit();
    res
      .status(201)
      .json({ success: true, id_menu: newMenuId, message: 'Menu berhasil ditambahkan.' });
  } catch (err) {
    await conn.rollback();
    console.error('[MENU] POST error:', err);
    res.status(500).json({ success: false, message: 'Gagal menambahkan menu.' });
  } finally {
    conn.release();
  }
});

// PUT /api/menu/:id — update menu
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nama_menu, kategori, harga_jual, status, stok } = req.body;
  const conn = await db.getConnection();
  try {
    await conn.beginTransaction();
    await conn.query(
      'UPDATE menu SET nama_menu=?, kategori=?, harga_jual=?, status=? WHERE id_menu=?',
      [nama_menu, kategori, harga_jual, status, id]
    );
    if (stok !== undefined) {
      const [existing] = await conn.query('SELECT id_stok FROM stok WHERE id_menu = ?', [id]);
      if (existing.length > 0) {
        await conn.query('UPDATE stok SET jumlah_stok=? WHERE id_menu=?', [stok, id]);
      } else {
        await conn.query('INSERT INTO stok (id_menu, jumlah_stok) VALUES (?, ?)', [id, stok]);
      }
      // Perbarui status menu otomatis jika stok habis
      const newStatus = parseInt(stok) === 0 ? 'Habis' : 'Tersedia';
      await conn.query('UPDATE menu SET status=? WHERE id_menu=?', [newStatus, id]);
    }
    await conn.commit();
    res.json({ success: true, message: 'Menu berhasil diperbarui.' });
  } catch (err) {
    await conn.rollback();
    console.error('[MENU] PUT error:', err);
    res.status(500).json({ success: false, message: 'Gagal memperbarui menu.' });
  } finally {
    conn.release();
  }
});

// DELETE /api/menu/:id — hapus menu
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM menu WHERE id_menu = ?', [id]);
    res.json({ success: true, message: 'Menu berhasil dihapus.' });
  } catch (err) {
    console.error('[MENU] DELETE error:', err);
    res.status(500).json({ success: false, message: 'Gagal menghapus menu.' });
  }
});

module.exports = router;
