import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import * as apiService from '../services/api';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // ────── Auth state ──────
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('wdms_user'));
    } catch {
      return null;
    }
  });

  // ────── Data state ──────
  const [menus, setMenus] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [laporanData, setLaporanData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

  // ────── Cart ──────
  const [cart, setCart] = useState([]);

  // ─────────────────────────────────────────────────
  // Helpers
  // ─────────────────────────────────────────────────
  const handleErr = (err, fallback) => {
    const msg = err?.response?.data?.message || err?.message || fallback;
    setApiError(msg);
    console.error(msg, err);
    return null;
  };

  // ─────────────────────────────────────────────────
  // AUTH
  // ─────────────────────────────────────────────────
  const login = async (username, password) => {
    try {
      setLoading(true);
      setApiError(null);
      const res = await apiService.login(username, password);
      const userData = res.data.user;
      setUser(userData);
      localStorage.setItem('wdms_user', JSON.stringify(userData));
      return { success: true, user: userData };
    } catch (err) {
      const msg =
        err?.response?.data?.message || 'Login gagal. Periksa kembali username dan password.';
      setApiError(msg);
      return { success: false, message: msg };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setMenus([]);
    setTransactions([]);
    setCart([]);
    localStorage.removeItem('wdms_user');
  };

  // ─────────────────────────────────────────────────
  // MENU
  // ─────────────────────────────────────────────────
  const fetchMenus = useCallback(async () => {
    try {
      setApiError(null);
      const res = await apiService.getMenus();
      // Normalize field names to match frontend expectations
      const normalized = res.data.data.map((m) => ({
        id: m.id_menu,
        id_menu: m.id_menu,
        nama: m.nama_menu,
        nama_menu: m.nama_menu,
        kategori: m.kategori,
        harga: parseFloat(m.harga_jual),
        harga_jual: parseFloat(m.harga_jual),
        status: m.status,
        stok: m.stok,
      }));
      setMenus(normalized);
    } catch (err) {
      handleErr(err, 'Gagal mengambil data menu.');
    }
  }, []);

  const addMenu = async (data) => {
    try {
      await apiService.addMenu(data);
      await fetchMenus();
      return { success: true };
    } catch (err) {
      return { success: false, message: handleErr(err, 'Gagal menambah menu.') };
    }
  };

  const updateMenuItem = async (id, data) => {
    try {
      await apiService.updateMenu(id, data);
      await fetchMenus();
      return { success: true };
    } catch (err) {
      return { success: false, message: handleErr(err, 'Gagal update menu.') };
    }
  };

  const deleteMenuItem = async (id) => {
    try {
      await apiService.deleteMenu(id);
      await fetchMenus();
      return { success: true };
    } catch (err) {
      return { success: false, message: handleErr(err, 'Gagal hapus menu.') };
    }
  };

  // ─────────────────────────────────────────────────
  // STOK
  // ─────────────────────────────────────────────────
  const updateStok = async (id_menu, jumlah_stok) => {
    try {
      await apiService.updateStok(id_menu, jumlah_stok);
      await fetchMenus(); // Refresh menu to show updated status
      return { success: true };
    } catch (err) {
      return { success: false, message: handleErr(err, 'Gagal update stok.') };
    }
  };

  // ─────────────────────────────────────────────────
  // TRANSAKSI
  // ─────────────────────────────────────────────────
  const fetchTransaksi = useCallback(async () => {
    try {
      setApiError(null);
      const res = await apiService.getTransaksi();
      setTransactions(res.data.data);
    } catch (err) {
      handleErr(err, 'Gagal mengambil riwayat transaksi.');
    }
  }, []);

  const addTransaction = async (trxData) => {
    try {
      setLoading(true);
      setApiError(null);
      const res = await apiService.createTransaksi({
        id_user: user?.id_user,
        items: trxData.items,
        total: trxData.total,
        bayar: trxData.bayar,
        kembalian: trxData.kembalian,
        metode: trxData.metode,
      });
      clearCart();
      await fetchMenus(); // Refresh menu stok
      return { success: true, ...res.data };
    } catch (err) {
      const msg = handleErr(err, 'Gagal menyimpan transaksi.');
      return { success: false, message: msg };
    } finally {
      setLoading(false);
    }
  };

  // ─────────────────────────────────────────────────
  // LAPORAN
  // ─────────────────────────────────────────────────
  const fetchLaporan = useCallback(async (periode = 'hari') => {
    try {
      setApiError(null);
      const res = await apiService.getLaporan(periode);
      setLaporanData(res.data.data);
      return res.data.data;
    } catch (err) {
      handleErr(err, 'Gagal mengambil laporan.');
      return null;
    }
  }, []);

  // ─────────────────────────────────────────────────
  // CART
  // ─────────────────────────────────────────────────
  const addToCart = (menu) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === menu.id);
      if (existing) {
        return prev.map((item) => (item.id === menu.id ? { ...item, qty: item.qty + 1 } : item));
      }
      return [...prev, { ...menu, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateCartQty = (id, qty) => {
    if (qty <= 0) return removeFromCart(id);
    setCart((prev) => prev.map((item) => (item.id === id ? { ...item, qty } : item)));
  };

  const clearCart = () => setCart([]);

  // ─────────────────────────────────────────────────
  // Load initial data when user logs in
  // ─────────────────────────────────────────────────
  useEffect(() => {
    if (user) {
      fetchMenus();
      fetchTransaksi();
    }
  }, [user, fetchMenus, fetchTransaksi]);

  const value = {
    // Auth
    user,
    login,
    logout,
    // Menu
    menus,
    fetchMenus,
    addMenu,
    updateMenuItem,
    deleteMenuItem,
    // Stok
    updateStok,
    // Transaksi
    transactions,
    addTransaction,
    fetchTransaksi,
    // Laporan
    laporanData,
    fetchLaporan,
    // Cart
    cart,
    addToCart,
    removeFromCart,
    updateCartQty,
    clearCart,
    // UI state
    loading,
    apiError,
    setApiError,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
