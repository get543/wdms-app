import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider, useAppContext } from './context/AppContext';
import BottomNav from './components/BottomNav';

// Pages
import Login from './pages/shared/Login';
import DashboardPemilik from './pages/pemilik/DashboardPemilik';
import DashboardKasir from './pages/kasir/DashboardKasir';
import PesananKasir from './pages/kasir/PesananKasir';
import ProsesPembayaran from './pages/kasir/ProsesPembayaran';
import StrukPembayaran from './pages/kasir/StrukPembayaran';
import KelolaMenu from './pages/pemilik/KelolaMenu';
import LaporanPenjualan from './pages/pemilik/LaporanPenjualan';
import ManajemenStok from './pages/pemilik/ManajemenStok';
import RiwayatTransaksi from './pages/kasir/RiwayatTransaksi';
import Pengaturan from './pages/shared/Pengaturan';

function ProtectedRoute({ children, role }) {
  const { user } = useAppContext();
  if (!user) return <Navigate to="/" />;
  if (role && user.role !== role) {
    return <Navigate to={user.role === 'Pemilik' ? '/dashboard-pemilik' : '/dashboard-kasir'} />;
  }
  return children;
}

function MainApp() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Login />} />

        {/* Pemilik Routes */}
        <Route
          path="/dashboard-pemilik"
          element={
            <ProtectedRoute role="Pemilik">
              <DashboardPemilik />
            </ProtectedRoute>
          }
        />
        <Route
          path="/menu"
          element={
            <ProtectedRoute role="Pemilik">
              <KelolaMenu />
            </ProtectedRoute>
          }
        />
        <Route
          path="/laporan"
          element={
            <ProtectedRoute role="Pemilik">
              <LaporanPenjualan />
            </ProtectedRoute>
          }
        />
        <Route
          path="/stok"
          element={
            <ProtectedRoute role="Pemilik">
              <ManajemenStok />
            </ProtectedRoute>
          }
        />

        {/* Kasir Routes */}
        <Route
          path="/dashboard-kasir"
          element={
            <ProtectedRoute role="Kasir">
              <DashboardKasir />
            </ProtectedRoute>
          }
        />
        <Route
          path="/pesan"
          element={
            <ProtectedRoute role="Kasir">
              <PesananKasir />
            </ProtectedRoute>
          }
        />
        <Route
          path="/bayar"
          element={
            <ProtectedRoute role="Kasir">
              <ProsesPembayaran />
            </ProtectedRoute>
          }
        />
        <Route
          path="/struk"
          element={
            <ProtectedRoute role="Kasir">
              <StrukPembayaran />
            </ProtectedRoute>
          }
        />
        <Route
          path="/riwayat"
          element={
            <ProtectedRoute role="Kasir">
              <RiwayatTransaksi />
            </ProtectedRoute>
          }
        />

        {/* Shared */}
        <Route
          path="/pengaturan"
          element={
            <ProtectedRoute>
              <Pengaturan />
            </ProtectedRoute>
          }
        />
      </Routes>
      <BottomNav />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <MainApp />
      </BrowserRouter>
    </AppProvider>
  );
}
