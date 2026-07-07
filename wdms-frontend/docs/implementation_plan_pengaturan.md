# Implementasi Menu Pengaturan

Pembaruan pada halaman Pengaturan dengan menghapus menu yang tidak diperlukan, serta membuat fungsionalitas dan *endpoint* baru untuk Profil, Kelola Kasir, dan Tentang Aplikasi.

## Proposed Changes

### Frontend (wdms-frontend)
- **[MODIFY] `src/pages/shared/Pengaturan.jsx`**
  - Menghapus opsi menu "Notifikasi" dan "Backup Data".
  - Menambahkan *event handler* `onClick` pada "Profil Saya", "Kelola Akun Kasir", dan "Tentang Aplikasi" yang akan menavigasi pengguna ke *route* baru.
- **[MODIFY] `src/App.jsx`**
  - Menambahkan *routing* untuk path `/profil`, `/kelola-kasir`, dan `/tentang`.
- **[NEW] `src/pages/shared/ProfilSaya.jsx`**
  - Membuat halaman antarmuka baru untuk melihat detail profil (Nama, Username, Role) serta *form* untuk mengubah *password* atau nama pengguna.
- **[NEW] `src/pages/shared/KelolaKasir.jsx`**
  - Membuat halaman khusus pemilik warteg untuk melihat daftar kasir, serta kemampuan untuk Menambah, Mengedit, dan Menghapus akun kasir.
- **[NEW] `src/pages/shared/TentangAplikasi.jsx`**
  - Membuat halaman statis yang berisi informasi singkat mengenai versi aplikasi "WDMS" (Warteg Data Management System).

### Backend (wdms-backend)
- **[MODIFY] `index.js`**
  - Mendaftarkan *route* baru `/api/users`.
- **[NEW] `routes/users.js`**
  - Membuat *endpoint* REST API baru untuk mengelola pengguna:
    - `GET /api/users`: Mengambil daftar pengguna (fokus pada *role* Kasir).
    - `POST /api/users`: Menambahkan akun kasir baru.
    - `PUT /api/users/:id`: Mengubah informasi pengguna/profil.
    - `DELETE /api/users/:id`: Menghapus akun kasir.

## Verification Plan
### Manual Verification
1. Masuk sebagai Pemilik, buka halaman Pengaturan, dan pastikan menu Notifikasi/Backup telah hilang.
2. Klik "Kelola Akun Kasir", buat akun kasir baru, lalu masuk (*login*) menggunakan akun tersebut.
3. Buka "Profil Saya", ubah *password*, lalu coba *login* ulang.
4. Klik "Tentang Aplikasi" untuk memastikan tampilannya rapi.
