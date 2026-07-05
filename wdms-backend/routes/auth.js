const express = require('express');
const router = express.Router();
const db = require('../db');

// POST /api/auth/login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ success: false, message: 'Username dan password wajib diisi.' });
  }

  try {
    const [rows] = await db.query('SELECT * FROM users WHERE username = ?', [username]);

    if (rows.length === 0) {
      return res.status(401).json({ success: false, message: 'Username tidak ditemukan.' });
    }

    const user = rows[0];

    // Cek password langsung (plaintext) atau hash
    let isMatch = password === user.password;
    // Jika password disimpan dalam hash, gunakan:
    // let isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Password salah.' });
    }

    return res.json({
      success: true,
      user: {
        id_user: user.id_user,
        nama: user.nama,
        username: user.username,
        role: user.role,
      },
    });
  } catch (err) {
    console.error('[AUTH] Login error:', err);
    return res.status(500).json({ success: false, message: 'Terjadi kesalahan server.' });
  }
});

module.exports = router;
