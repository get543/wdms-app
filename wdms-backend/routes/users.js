const express = require('express');
const router = express.Router();
const db = require('../db');

// GET /api/users - Get all kasir users
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT id_user, nama, username, role FROM users WHERE role = ?', ['Kasir']);
    res.json({ success: true, data: rows });
  } catch (err) {
    console.error('[USERS] GET error:', err);
    res.status(500).json({ success: false, message: 'Gagal mengambil data pengguna.' });
  }
});

// POST /api/users - Create new kasir
router.post('/', async (req, res) => {
  const { nama, username, password } = req.body;
  if (!nama || !username || !password) {
    return res.status(400).json({ success: false, message: 'Nama, Username, dan Password wajib diisi.' });
  }

  try {
    // Check if username exists
    const [existing] = await db.query('SELECT id_user FROM users WHERE username = ?', [username]);
    if (existing.length > 0) {
      return res.status(400).json({ success: false, message: 'Username sudah digunakan.' });
    }

    const [result] = await db.query(
      'INSERT INTO users (nama, username, password, role) VALUES (?, ?, ?, ?)',
      [nama, username, password, 'Kasir']
    );
    res.status(201).json({ success: true, message: 'Akun kasir berhasil ditambahkan.', id_user: result.insertId });
  } catch (err) {
    console.error('[USERS] POST error:', err);
    res.status(500).json({ success: false, message: 'Gagal menambah akun kasir.' });
  }
});

// PUT /api/users/:id - Update user (profile or kasir)
router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const { nama, username, password } = req.body;
  
  if (!nama || !username) {
    return res.status(400).json({ success: false, message: 'Nama dan Username wajib diisi.' });
  }

  try {
    // Check if new username is already used by someone else
    const [existing] = await db.query('SELECT id_user FROM users WHERE username = ? AND id_user != ?', [username, id]);
    if (existing.length > 0) {
      return res.status(400).json({ success: false, message: 'Username sudah digunakan oleh pengguna lain.' });
    }

    if (password) {
      await db.query(
        'UPDATE users SET nama = ?, username = ?, password = ? WHERE id_user = ?',
        [nama, username, password, id]
      );
    } else {
      await db.query(
        'UPDATE users SET nama = ?, username = ? WHERE id_user = ?',
        [nama, username, id]
      );
    }
    
    // Fetch updated user to return
    const [rows] = await db.query('SELECT id_user, nama, username, role FROM users WHERE id_user = ?', [id]);
    res.json({ success: true, message: 'Profil berhasil diperbarui.', user: rows[0] });
  } catch (err) {
    console.error('[USERS] PUT error:', err);
    res.status(500).json({ success: false, message: 'Gagal memperbarui pengguna.' });
  }
});

// DELETE /api/users/:id - Delete user
router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await db.query('DELETE FROM users WHERE id_user = ?', [id]);
    res.json({ success: true, message: 'Akun kasir berhasil dihapus.' });
  } catch (err) {
    console.error('[USERS] DELETE error:', err);
    res.status(500).json({ success: false, message: 'Gagal menghapus pengguna.' });
  }
});

module.exports = router;
