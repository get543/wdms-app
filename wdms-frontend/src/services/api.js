import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000,
});

// AUTH
export const login = (username, password) => api.post('/auth/login', { username, password });

// MENU
export const getMenus = () => api.get('/menu');
export const addMenu = (data) => api.post('/menu', data);
export const updateMenu = (id, data) => api.put(`/menu/${id}`, data);
export const deleteMenu = (id) => api.delete(`/menu/${id}`);

// STOK
export const getStok = () => api.get('/stok');
export const updateStok = (id_menu, jumlah_stok) => api.put(`/stok/${id_menu}`, { jumlah_stok });

// TRANSAKSI
export const createTransaksi = (data) => api.post('/transaksi', data);
export const getTransaksi = () => api.get('/transaksi');
export const getLaporan = (periode = 'hari') => api.get(`/transaksi/laporan?periode=${periode}`);

// USERS
export const getUsers = () => api.get('/users');
export const createUser = (data) => api.post('/users', data);
export const updateUser = (id, data) => api.put(`/users/${id}`, data);
export const deleteUser = (id) => api.delete(`/users/${id}`);

export default api;
