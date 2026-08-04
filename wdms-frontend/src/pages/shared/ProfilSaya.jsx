import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { IconChevronLeft, IconEdit, IconCheck, IconX } from '@tabler/icons-react';
import { useAppContext } from '../../context/AppContext';
import { updateUser } from '../../services/api';

export default function ProfilSaya() {
  const navigate = useNavigate();
  const { user, login } = useAppContext();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    nama: user?.nama || '',
    username: user?.username || '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const primaryColor = user?.role === 'Pemilik' ? '#C94040' : '#1D9E75';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    if (!formData.nama || !formData.username) {
      setError('Nama dan Username wajib diisi.');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const dataToSend = { nama: formData.nama, username: formData.username };
      if (formData.password) {
        dataToSend.password = formData.password;
      }
      const res = await updateUser(user.id_user, dataToSend);
      if (res.data.success) {
        // Update local context
        login(res.data.user);
        setIsEditing(false);
        setFormData({ ...formData, password: '' });
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Gagal menyimpan profil.');
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFormData({
      nama: user?.nama || '',
      username: user?.username || '',
      password: '',
    });
    setError('');
  };

  return (
    <div className="page-enter" style={styles.container}>
      <div className="header-enter" style={{ ...styles.header, background: primaryColor }}>
        <button style={styles.backBtn} onClick={() => navigate(-1)}>
          <IconChevronLeft size={24} />
        </button>
        <div style={styles.headerTitle}>Profil Saya</div>
        <div style={{ width: 24 }}>
          {!isEditing && (
            <button style={styles.editIconBtn} onClick={() => setIsEditing(true)}>
              <IconEdit size={20} />
            </button>
          )}
        </div>
      </div>

      <div style={styles.content}>
        <div className="fade-in-up stagger-1" style={styles.avatarContainer}>
          <div style={{ ...styles.avatar, background: primaryColor }}>
            {user?.role === 'Pemilik' ? '👨‍🍳' : '👩‍🍳'}
          </div>
          <div style={styles.profileName}>{user?.nama || 'Pengguna'}</div>
          <div style={styles.roleBadge}>{user?.role} Warteg</div>
        </div>

        {error && <div style={styles.errorMsg}>{error}</div>}

        <div className="fade-in-up stagger-2" style={styles.formCard}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Nama Lengkap</label>
            {isEditing ? (
              <input
                style={styles.input}
                name="nama"
                value={formData.nama}
                onChange={handleChange}
                placeholder="Masukkan nama"
              />
            ) : (
              <div style={styles.valueText}>{user?.nama}</div>
            )}
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Username</label>
            {isEditing ? (
              <input
                style={styles.input}
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Masukkan username"
              />
            ) : (
              <div style={styles.valueText}>{user?.username}</div>
            )}
          </div>

          {isEditing && (
            <div style={styles.formGroup}>
              <label style={styles.label}>Password Baru (Opsional)</label>
              <input
                style={styles.input}
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Kosongkan jika tidak ingin mengubah"
              />
            </div>
          )}
        </div>

        {isEditing && (
          <div className="fade-in-up stagger-3" style={styles.actions}>
            <button style={styles.cancelBtn} onClick={handleCancel} disabled={loading}>
              <IconX size={20} /> Batal
            </button>
            <button
              style={{ ...styles.saveBtn, background: primaryColor }}
              onClick={handleSave}
              disabled={loading}
            >
              <IconCheck size={20} /> {loading ? 'Menyimpan...' : 'Simpan'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: { height: '100%', display: 'flex', flexDirection: 'column', background: '#F8F7F3' },
  header: {
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
  editIconBtn: {
    background: 'transparent',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    padding: 0,
  },
  content: { padding: '20px 16px', flex: 1, overflowY: 'auto', marginTop: '-30px' },
  avatarContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '24px',
    gap: '8px',
  },
  avatar: {
    width: '80px',
    height: '80px',
    borderRadius: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '4px solid #fff',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    fontSize: '36px',
  },
  profileName: {
    fontSize: '18px',
    fontWeight: '800',
    color: '#2C2C2A',
  },
  roleBadge: {
    background: '#2C2C2A',
    color: '#fff',
    padding: '4px 12px',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: '700',
    border: '2px solid #fff',
  },
  formCard: {
    background: '#fff',
    borderRadius: '16px',
    padding: '20px',
    border: '1.5px solid #EAE5DA',
  },
  formGroup: {
    marginBottom: '16px',
  },
  label: {
    display: 'block',
    fontSize: '12px',
    color: '#888780',
    fontWeight: '600',
    marginBottom: '8px',
  },
  valueText: {
    fontSize: '16px',
    color: '#2C2C2A',
    fontWeight: '700',
    paddingBottom: '8px',
    borderBottom: '1px solid #EAE5DA',
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '12px',
    border: '1.5px solid #EAE5DA',
    background: '#F8F7F3',
    fontSize: '14px',
    color: '#2C2C2A',
    outline: 'none',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
  },
  actions: {
    display: 'flex',
    gap: '12px',
    marginTop: '24px',
  },
  cancelBtn: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: '14px',
    borderRadius: '12px',
    border: 'none',
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
