const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

pool
  .getConnection()
  .then((conn) => {
    console.log('[DB] Terhubung ke MariaDB!');
    conn.release();
  })
  .catch((err) => {
    console.error('[DB] Gagal terhubung ke MariaDB:', err.message);
  });

module.exports = pool;
