# Walkthrough: Warteg Digital Management System (WDMS) Web App

Saya telah selesai merealisasikan desain UI/UX dari file PDF yang Anda berikan menjadi sebuah _web app_ fungsional berbasis React (menggunakan Vite). Aplikasi ini sudah siap di-_render_ ke dalam WebView Android.

## Fitur dan Perubahan yang Dilakukan

Sistem dibangun dengan arsitektur _offline-first_ dengan menyimpan seluruh data (menu, transaksi, _state_ login) secara lokal di memori browser (`localStorage`), sehingga dapat berjalan lancar tanpa _backend_ saat ini.

### 1. Sistem Autentikasi Berbasis Peran

- Anda dapat masuk (_login_) menggunakan pilihan peran **Pemilik** atau **Kasir**.
- Routing dipisahkan dengan aman sehingga kasir tidak dapat melihat laporan pemilik, dan pemilik memiliki wewenang penuh atas aplikasi.

### 2. Dashboard Pemilik (Owner)

- Menampilkan ringkasan pendapatan harian dan total transaksi.
- Dilengkapi dengan _shortcut_ fitur utama seperti Kelola Menu, Laporan Penjualan, dan Manajemen Stok.
- Statistik Menu Terlaris di-generate secara otomatis.

### 3. Alur Kasir (Pemesanan & Pembayaran)

- **Pesanan Baru:** Tampilan _grid_ menu yang mudah dipilih. Fitur filter kategori (Lauk, Sayur, Minuman). Jika stok habis, menu akan ditandai dengan label merah "HABIS" dan tidak dapat dipesan.
- **Proses Pembayaran:** Menghitung total harga dan kembalian secara otomatis. Kasir dapat menggunakan "Nominal Cepat" untuk input uang masuk.
- **Struk Pembayaran:** Menghasilkan halaman struk digital lengkap dengan rincian pesanan dan tombol Cetak/Share.

### 4. Manajemen Menu & Stok

- Halaman **Manajemen Stok** memungkinkan pemilik (dan kasir tertentu) mengubah stok secara cepat. Warna indikator akan berubah (Tersedia, Sedikit, Habis) berdasarkan jumlah porsi.
- Halaman **Kelola Menu** untuk mengatur daftar harga dan kategori.

### 5. Riwayat & Laporan

- **Riwayat Transaksi:** Menampilkan kartu transaksi yang bisa diklik untuk melihat detail/struk kembali.
- **Laporan Penjualan:** Merangkum statistik dalam periode waktu tertentu beserta grafik sederhana.

---

## Cara Menjalankan

Saat ini proyek berada di folder `wdms-app`. Saya telah menjalankan _development server_ Vite.
Anda bisa membuka _browser_ dan mengakses URL lokal (biasanya `http://localhost:5173`) untuk mencoba dan menguji aplikasi webnya secara langsung!

Jika Anda menggunakan WebView di Android, cukup arahkan URL utama WebView ke _host_ ini selama masa _development_, atau bangun file _build_ (menggunakan `npm run build`) lalu masukkan ke folder _assets_ Android Anda.

> [!TIP]
> Aplikasi dirancang responsif, jika dibuka di laptop/desktop, ia akan tampil menyerupai layar _mobile_ yang proporsional di tengah layar.
