const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

// API URL
app.set('trust proxy', true);

const buildUrl = (req, pathname) => {
  const forwardedProto = req.headers['x-forwarded-proto'];
  const protocol = forwardedProto && forwardedProto.includes('https') ? 'https' : req.protocol;
  const host = req.get('host');

  return `${protocol}://${host}${pathname}`;
};

// Middleware
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);
app.use(express.json());

// Routes
const authRoutes = require('./routes/auth');
const menuRoutes = require('./routes/menu');
const stokRoutes = require('./routes/stok');
const transaksiRoutes = require('./routes/transaksi');
const userRoutes = require('./routes/users');

app.use('/api/auth', authRoutes);
app.use('/api/menu', menuRoutes);
app.use('/api/stok', stokRoutes);
app.use('/api/transaksi', transaksiRoutes);
app.use('/api/users', userRoutes);

// Root endpoint with API overview
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'WDMS API tersedia.',
    baseUrl: buildUrl(req, ''),
    endpoints: {
      health: buildUrl(req, '/api/ping'),
      auth: buildUrl(req, '/api/auth'),
      menu: buildUrl(req, '/api/menu'),
      stok: buildUrl(req, '/api/stok'),
      transaksi: buildUrl(req, '/api/transaksi'),
      users: buildUrl(req, '/api/users'),
    },
  });
});

// Health check
app.get('/api/ping', (req, res) => {
  res.json({
    success: true,
    message: 'WDMS Backend berjalan!',
    timestamp: new Date().toISOString(),
  });
});

// 404 handler
app.use((req, res) => {
  res
    .status(404)
    .json({ success: false, message: `Endpoint ${req.method} ${req.path} tidak ditemukan.` });
});

// Error handler
app.use((err, req, res, _next) => {
  console.error('[SERVER] Error:', err);
  res.status(500).json({ success: false, message: 'Internal server error.' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`[SERVER] WDMS Backend berjalan di http://0.0.0.0:${PORT}`);
});
