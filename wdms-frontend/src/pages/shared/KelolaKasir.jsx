import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { IconChevronLeft, IconPlus, IconEdit, IconTrash } from '@tabler/icons-react';
import { getUsers, createUser, updateUser, deleteUser } from '../../services/api';

export default function KelolaKasir() {
  const navigate = useNavigate();
  const [kasirList, setKasirList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const [formData, setFormData] = useState({
    nama: '',
    username: '',
    password: '',
  });

  const fetchKasir = async () => {
    setLoading(true);
    try {
      const res = await getUsers();
      if (res.data.success) {
        setKasirList(res.data.data);
      }
    } catch (err) {
      setError('Gagal mengambil daftar kasir.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchKasir();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openAddModal = () => {
    setIsEditing(false);
    setFormData({ nama: '', username: '', password: '' });
    setError('');
    setIsModalOpen(true);
  };

  const openEditModal = (kasir) => {
    setIsEditing(true);
    setSelectedId(kasir.id_user);
    setFormData({ nama: kasir.nama, username: kasir.username, password: '' });
    setError('');
    setIsModalOpen(true);
  };

  const handleSave = async () => {
    if (!formData.nama || !formData.username) {
      setError('Nama dan Username wajib diisi.');
      return;
    }
    if (!isEditing && !formData.password) {
      setError('Password wajib diisi untuk akun baru.');
      return;
    }

    try {
      if (isEditing) {
        const dataToSend = { nama: formData.nama, username: formData.username };
        if (formData.password) dataToSend.password = formData.password;
        await updateUser(selectedId, dataToSend);
      } else {
        await createUser(formData);
      }
      setIsModalOpen(false);
      fetchKasir();
    } catch (err) {
      setError(err.response?.data?.message || 'Gagal menyimpan data kasir.');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Yakin ingin menghapus akun kasir ini?')) {
      try {
        await deleteUser(id);
        fetchKasir();
      } catch (err) {
        alert('Gagal menghapus kasir.');
        console.error(err);
      }
    }
  };

  return (
    <div className="page-enter" style={styles.container}>
      <div className="header-enter" style={styles.header}>
        <button style={styles.backBtn} onClick={() => navigate(-1)}>
          <IconChevronLeft size={24} />
        </button>
        <div style={styles.headerTitle}>Kelola Akun Kasir</div>
        <button style={styles.addBtn} onClick={openAddModal}>
          <IconPlus size={20} />
        </button>
      </div>

      <div style={styles.content}>
        {loading ? (
          <div style={styles.emptyState}>Memuat data...</div>
        ) : kasirList.length === 0 ? (
          <div style={styles.emptyState}>Belum ada akun kasir terdaftar.</div>
        ) : (
          <div className="fade-in-up stagger-1" style={styles.list}>
            {kasirList.map((kasir) => (
              <div key={kasir.id_user} style={styles.card}>
                <div>
                  <div style={styles.kasirName}>{kasir.nama}</div>
                  <div style={styles.kasirUsername}>@{kasir.username}</div>
                </div>
                <div style={styles.actions}>
                  <button style={styles.iconBtn} onClick={() => openEditModal(kasir)}>
                    <IconEdit size={18} color="#4092C9" />
                  </button>
                  <button style={styles.iconBtn} onClick={() => handleDelete(kasir.id_user)}>
                    <IconTrash size={18} color="#C94040" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {isModalOpen && (
        <div className="modal-overlay-enter" style={styles.modalOverlay}>
          <div className="modal-content-enter" style={styles.modalContent}>
            <h3 style={styles.modalTitle}>{isEditing ? 'Edit Akun Kasir' : 'Tambah Akun Kasir'}</h3>

            {error && <div style={styles.errorMsg}>{error}</div>}

            <div style={styles.formGroup}>
              <label style={styles.label}>Nama Lengkap</label>
              <input
                style={styles.input}
                name="nama"
                value={formData.nama}
                onChange={handleChange}
                placeholder="Misal: Budi Santoso"
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Username</label>
              <input
                style={styles.input}
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Misal: budi_kasir"
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>
                {isEditing ? 'Password Baru (Opsional)' : 'Password'}
              </label>
              <input
                style={styles.input}
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder={isEditing ? 'Kosongkan jika tidak diubah' : 'Buat password'}
              />
            </div>

            <div style={styles.modalActions}>
              <button style={styles.cancelBtn} onClick={() => setIsModalOpen(false)}>
                Batal
              </button>
              <button style={styles.saveBtn} onClick={handleSave}>
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: { height: '100%', display: 'flex', flexDirection: 'column', background: '#F8F7F3' },
  header: {
    background: '#C94040',
    padding: '24px 20px 40px',
    borderRadius: '0 0 24px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: '#fff',
  },
  headerTitle: { fontSize: '18px', fontWeight: '800' },
  backBtn: {
    background: 'rgba(255,255,255,0.2)',
    border: 'none',
    color: '#fff',
    borderRadius: '8px',
    width: '36px',
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  addBtn: {
    background: '#fff',
    border: 'none',
    color: '#C94040',
    borderRadius: '8px',
    width: '36px',
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(201,64,64,0.3)',
  },
  content: { padding: '20px 16px', flex: 1, overflowY: 'auto', marginTop: '-20px' },
  emptyState: {
    textAlign: 'center',
    marginTop: '40px',
    color: '#888780',
    fontSize: '14px',
    fontWeight: '600',
  },
  list: { display: 'flex', flexDirection: 'column', gap: '12px' },
  card: {
    background: '#fff',
    borderRadius: '16px',
    padding: '16px',
    border: '1.5px solid #EAE5DA',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  kasirName: { fontSize: '15px', fontWeight: '700', color: '#2C2C2A', marginBottom: '4px' },
  kasirUsername: { fontSize: '13px', color: '#888780', fontWeight: '500' },
  actions: { display: 'flex', gap: '8px' },
  iconBtn: {
    background: '#F8F7F3',
    border: 'none',
    width: '36px',
    height: '36px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    zIndex: 1000,
  },
  modalContent: {
    background: '#fff',
    width: '100%',
    maxWidth: '480px',
    borderRadius: '24px 24px 0 0',
    padding: '24px',
    boxSizing: 'border-box',
  },
  modalTitle: { fontSize: '18px', fontWeight: '800', color: '#2C2C2A', marginBottom: '20px' },
  formGroup: { marginBottom: '16px' },
  label: {
    display: 'block',
    fontSize: '12px',
    color: '#888780',
    fontWeight: '600',
    marginBottom: '8px',
  },
  input: {
    width: '100%',
    padding: '14px',
    borderRadius: '12px',
    border: '1.5px solid #EAE5DA',
    background: '#F8F7F3',
    fontSize: '14px',
    color: '#2C2C2A',
    outline: 'none',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
  },
  modalActions: { display: 'flex', gap: '12px', marginTop: '24px' },
  cancelBtn: {
    flex: 1,
    padding: '14px',
    borderRadius: '12px',
    border: '1.5px solid #EAE5DA',
    background: '#fff',
    color: '#5F5E5A',
    fontWeight: '700',
    fontSize: '14px',
    cursor: 'pointer',
  },
  saveBtn: {
    flex: 1,
    padding: '14px',
    borderRadius: '12px',
    border: 'none',
    background: '#C94040',
    color: '#fff',
    fontWeight: '700',
    fontSize: '14px',
    cursor: 'pointer',
  },
  errorMsg: {
    background: '#FCE8E8',
    color: '#C94040',
    padding: '12px',
    borderRadius: '8px',
    fontSize: '14px',
    marginBottom: '16px',
    textAlign: 'center',
    fontWeight: '600',
  },
};
