-- Database: wdms_db
-- Import file ini di MariaDB / phpMyAdmin

CREATE DATABASE IF NOT EXISTS wdms_db
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE wdms_db;

-- ============================================================
-- TABEL USERS
-- ============================================================
CREATE TABLE IF NOT EXISTS users (
    id_user  INT          NOT NULL AUTO_INCREMENT,
    nama     VARCHAR(100) NOT NULL,
    username VARCHAR(50)  NOT NULL,
    password VARCHAR(255) NOT NULL,
    role     ENUM('Pemilik','Kasir') NOT NULL,
    PRIMARY KEY (id_user),
    UNIQUE KEY uq_username (username)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ============================================================
-- TABEL MENU
-- ============================================================
CREATE TABLE IF NOT EXISTS menu (
    id_menu    INT            NOT NULL AUTO_INCREMENT,
    nama_menu  VARCHAR(100)   NOT NULL,
    kategori   VARCHAR(50)    NOT NULL,
    harga_jual DECIMAL(10,2)  NOT NULL,
    status     ENUM('Tersedia','Habis') NOT NULL DEFAULT 'Tersedia',
    PRIMARY KEY (id_menu)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ============================================================
-- TABEL STOK
-- ============================================================
CREATE TABLE IF NOT EXISTS stok (
    id_stok     INT      NOT NULL AUTO_INCREMENT,
    id_menu     INT      NOT NULL,
    jumlah_stok INT      NOT NULL DEFAULT 0,
    updated_at  DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
                         ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id_stok),
    CONSTRAINT fk_stok_menu FOREIGN KEY (id_menu)
        REFERENCES menu (id_menu) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ============================================================
-- TABEL PESANAN
-- ============================================================
CREATE TABLE IF NOT EXISTS pesanan (
    id_pesanan      INT NOT NULL AUTO_INCREMENT,
    id_user         INT NOT NULL,
    tanggal_pesanan DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    status_pesanan  ENUM('Pending','Dikonfirmasi','Dibatalkan','Selesai')
                    NOT NULL DEFAULT 'Pending',
    PRIMARY KEY (id_pesanan),
    CONSTRAINT fk_pesanan_user FOREIGN KEY (id_user)
        REFERENCES users (id_user)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ============================================================
-- TABEL PESANAN DETAIL
-- ============================================================
CREATE TABLE IF NOT EXISTS pesanan_detail (
    id_pesanan_detail INT           NOT NULL AUTO_INCREMENT,
    id_pesanan        INT           NOT NULL,
    id_menu           INT           NOT NULL,
    jumlah            INT           NOT NULL,
    harga_satuan      DECIMAL(10,2) NOT NULL,
    sub_total         DECIMAL(10,2) NOT NULL,
    PRIMARY KEY (id_pesanan_detail),
    CONSTRAINT fk_detail_pesanan FOREIGN KEY (id_pesanan)
        REFERENCES pesanan (id_pesanan) ON DELETE CASCADE,
    CONSTRAINT fk_detail_menu FOREIGN KEY (id_menu)
        REFERENCES menu (id_menu)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ============================================================
-- TABEL PEMBAYARAN
-- ============================================================
CREATE TABLE IF NOT EXISTS pembayaran (
    id_pembayaran INT           NOT NULL AUTO_INCREMENT,
    id_pesanan    INT           NOT NULL,
    total_bayar   DECIMAL(10,2) NOT NULL,
    jumlah_bayar  DECIMAL(10,2) NOT NULL,
    kembalian     DECIMAL(10,2) NOT NULL,
    metode_bayar  VARCHAR(50)   NOT NULL,
    tanggal_bayar DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id_pembayaran),
    CONSTRAINT fk_bayar_pesanan FOREIGN KEY (id_pesanan)
        REFERENCES pesanan (id_pesanan) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ============================================================
-- TABEL TRANSAKSI
-- ============================================================
CREATE TABLE IF NOT EXISTS transaksi (
    id_transaksi       INT           NOT NULL AUTO_INCREMENT,
    id_pesanan         INT           NOT NULL,
    id_pembayaran      INT           NOT NULL,
    tanggal_transaksi  DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
    total_transaksi    DECIMAL(10,2) NOT NULL,
    PRIMARY KEY (id_transaksi),
    CONSTRAINT fk_trx_pesanan    FOREIGN KEY (id_pesanan)
        REFERENCES pesanan (id_pesanan) ON DELETE CASCADE,
    CONSTRAINT fk_trx_pembayaran FOREIGN KEY (id_pembayaran)
        REFERENCES pembayaran (id_pembayaran) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ============================================================
-- TABEL LAPORAN (Ringkasan periodik)
-- ============================================================
CREATE TABLE IF NOT EXISTS laporan (
    id_laporan       INT           NOT NULL AUTO_INCREMENT,
    periode_awal     DATE          NOT NULL,
    periode_akhir    DATE          NOT NULL,
    total_penjualan  DECIMAL(15,2) NOT NULL,
    created_at       DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id_laporan)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ============================================================
-- DATA AWAL (Seed)
-- ============================================================
INSERT INTO users (nama, username, password, role) VALUES
  ('Budi Santoso', 'pemilik',  'password123', 'Pemilik'),
  ('Siti Rahayu',  'kasir',    'password123', 'Kasir');

INSERT INTO menu (nama_menu, kategori, harga_jual, status) VALUES
  ('Ayam Suwir',    'Lauk',    5000,  'Tersedia'),
  ('Tempe Orek',    'Lauk',    3000,  'Tersedia'),
  ('Nasi Putih',    'Lauk',    5000,  'Tersedia'),
  ('Ikan Tongkol',  'Lauk',    7000,  'Habis'),
  ('Tumis Kangkung','Sayur',   4000,  'Tersedia'),
  ('Teh Manis',     'Minuman', 4000,  'Tersedia');

INSERT INTO stok (id_menu, jumlah_stok) VALUES
  (1, 45),
  (2, 35),
  (3, 100),
  (4, 0),
  (5, 28),
  (6, 50);
