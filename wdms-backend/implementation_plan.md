# Rencana Implementasi: Koneksi Aplikasi ke Database MariaDB

Anda meminta untuk membuatkan file `.sql` berdasarkan ERD dan mengoneksikan aplikasi `wdms-app` (yang dibuat dengan React/Vite) ke dalam database MariaDB tersebut.

Saya telah membuat file `wdms_db.sql` sesuai dengan struktur ERD (Anda bisa melihatnya di bagian *Artifacts*). File ini siap Anda *import* ke MariaDB/phpMyAdmin.

## User Review Required

> [!WARNING]  
> **Perubahan Arsitektur Sistem (Frontend to Full-Stack):**
> Aplikasi React (Frontend) **tidak dapat dan tidak aman** jika dikoneksikan secara langsung ke database MariaDB. Jika koneksi langsung dilakukan, *username* dan *password* database akan terekspos di browser pengguna.
> 
> Untuk mengoneksikan aplikasi `wdms-app` ke database MariaDB dengan aman, kita membutuhkan lapisan penengah berupa **Backend / REST API** (misalnya menggunakan Node.js dan Express).

## Proposed Changes

Jika Anda setuju untuk melanjutkan koneksi ke database, berikut adalah tahapan arsitektur baru yang akan saya kerjakan:

### 1. Pembuatan Backend (REST API)
- Saya akan membuat folder baru `wdms-backend` menggunakan Node.js.
- Menginstal *library* `express` (untuk server), `mysql2` (untuk koneksi ke MariaDB), dan `cors` (agar React bisa mengakses backend).
- Membuat *endpoint API* (contoh: `GET /api/menu`, `POST /api/login`, `POST /api/transaksi`) yang akan mengeksekusi *query* ke database MariaDB.

### 2. Modifikasi Frontend (wdms-app)
- Mengubah fungsi di dalam `AppContext.jsx` yang sebelumnya menyimpan dan mengambil data dari `localStorage` (Offline-first).
- Menggantinya dengan fungsi `fetch()` atau `axios` untuk memanggil API dari *backend*.
- Contoh: Saat Kasir menekan tombol "Konfirmasi Bayar", React akan mengirimkan data *HTTP POST* ke Backend, lalu Backend yang akan mengeksekusi `INSERT INTO transaksi ...` ke dalam MariaDB.

## Open Questions

> [!IMPORTANT]
> 1. **Apakah Anda setuju** dengan pembuatan Backend Node.js/Express ini untuk menghubungkan aplikasi ke database? 
> 2. Di laptop/PC Anda, apakah MariaDB sudah berjalan (misalnya melalui XAMPP) dan menggunakan *port* *default* `3306` tanpa *password* untuk *user* `root`? (Ini penting agar backend bisa terkoneksi dengan database Anda saat dijalankan nanti).

Silakan baca dan konfirmasi rencana ini agar saya dapat langsung mulai membangun backend-nya!
