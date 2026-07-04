const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors({
  origin: true,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Routes
const authRoutes = require('./routes/auth');
const menuRoutes = require('./routes/menu');
const stokRoutes = require('./routes/stok');
const transaksiRoutes = require('./routes/transaksi');

app.use('/api/auth', authRoutes);
app.use('/api/menu', menuRoutes);
app.use('/api/stok', stokRoutes);
app.use('/api/transaksi', transaksiRoutes);

// Health check
app.get('/api/ping', (req, res) => {
  res.json({ success: true, message: 'WDMS Backend berjalan!', timestamp: new Date().toISOString() });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: `Endpoint ${req.method} ${req.path} tidak ditemukan.` });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('[SERVER] Error:', err);
  res.status(500).json({ success: false, message: 'Internal server error.' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`[SERVER] WDMS Backend berjalan di http://0.0.0.0:${PORT}`);
});
