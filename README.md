# WDMS — Warteg Digital Management System

Aplikasi ini terdiri dari backend Express + Node.js, frontend React + Vite, dan aplikasi mobile Flutter untuk mengelola menu, stok, transaksi, serta laporan penjualan warteg digital.

## Screenshots

| Light Mode                                                   | Dark Mode                                                  |
| ------------------------------------------------------------ | ---------------------------------------------------------- |
| ![light mode](./wdms-mobile/assets/mobile%20app%20light.png) | ![dark mode](./wdms-mobile/assets/mobile%20app%20dark.png) |

---


## Struktur Folder

```text
wdms-app/
├── README.md
├── wdms_db.sql
├── wdms-backend/
│   ├── .env
│   ├── db.js
│   ├── index.js
│   ├── package.json
│   ├── package-lock.json
│   ├── docs/
│   │   └── implementation_plan.md
│   └── routes/
│       ├── auth.js
│       ├── menu.js
│       ├── stok.js
│       └── transaksi.js
├── wdms-frontend/
│   ├── .env
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   ├── README.md
│   ├── public/
│   └── src/
│       ├── App.css
│       ├── App.jsx
│       ├── index.css
│       ├── main.jsx
│       ├── assets/
│       ├── components/
│       ├── context/
│       ├── data/
│       ├── pages/
│       └── services/
└── wdms-mobile/
    ├── analysis_options.yaml
    ├── pubspec.yaml
    ├── README.md
    ├── android/
    ├── ios/
    ├── lib/
    ├── linux/
    ├── macos/
    ├── web/
    └── windows/
```

## Persyaratan

- Node.js 18+
- npm
- MariaDB / MySQL (misalnya lewat XAMPP)

## Langkah 1: Setup Database

1. Jalankan XAMPP atau layanan MariaDB/MySQL.
2. Buka phpMyAdmin atau terminal MySQL.
3. Import file [wdms_db.sql](wdms_db.sql).
4. Pastikan database `wdms_db` berhasil dibuat beserta tabel dan data awal.

## Langkah 2: Konfigurasi Environment

### Backend

Edit file `wdms-backend/.env` jika diperlukan:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=wdms_db
PORT=5000
```

### Frontend

Edit file `wdms-frontend/.env` jika backend Anda berjalan di port lain:

```env
VITE_API_URL=/api
```

## Langkah 3: Install Dependency

Buka terminal dan jalankan:

```bash
cd wdms-backend
npm install

cd ../wdms-frontend
npm install
```

## Langkah 4: Jalankan Aplikasi

### Jalankan Backend

```bash
cd wdms-backend
npm run dev
```

Backend akan berjalan di:

```text
http://localhost:5000
```

### Jalankan Frontend

Buka terminal baru, lalu jalankan:

```bash
cd wdms-frontend
npm run dev
```

Frontend akan berjalan di:

```text
http://localhost:5173
```

## Akun Login Demo

| Peran   | Username | Password    |
| ------- | -------- | ----------- |
| Pemilik | pemilik  | password123 |
| Kasir   | kasir    | password123 |

## Fitur Utama

- Login berbasis role: Pemilik dan Kasir
- Manajemen menu
- Manajemen stok
- Proses transaksi dan pembayaran
- Riwayat transaksi
- Laporan penjualan

## Endpoint API Backend

| Method | Endpoint                                             | Keterangan                      |
| ------ | ---------------------------------------------------- | ------------------------------- |
| POST   | `/api/auth/login`                                    | Login pengguna                  |
| GET    | `/api/menu`                                          | Ambil data menu beserta stok    |
| POST   | `/api/menu`                                          | Tambah menu baru                |
| PUT    | `/api/menu/:id`                                      | Update menu                     |
| DELETE | `/api/menu/:id`                                      | Hapus menu                      |
| GET    | `/api/stok`                                          | Ambil semua data stok           |
| PUT    | `/api/stok/:id_menu`                                 | Update stok berdasarkan id menu |
| POST   | `/api/transaksi`                                     | Simpan transaksi baru           |
| GET    | `/api/transaksi`                                     | Ambil riwayat transaksi         |
| GET    | `/api/transaksi/laporan?periode=hari\|minggu\|bulan` | Ambil data laporan penjualan    |
| GET    | `/api/ping`                                          | Health check backend            |
