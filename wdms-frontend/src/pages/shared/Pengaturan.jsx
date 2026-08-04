import React from 'react';
import { useNavigate } from 'react-router';
import { useAppContext } from '../../context/AppContext';
import {
  IconUser,
  IconUsers,
  IconInfoCircle,
  IconLogout,
  IconChevronRight,
} from '@tabler/icons-react';

export default function Pengaturan() {
  const { user, logout } = useAppContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const isPemilik = user?.role === 'Pemilik';
  const primaryColor = isPemilik ? '#C94040' : '#1D9E75';

  return (
    <div className="page-enter" style={styles.container}>
      <div className="header-enter" style={{ ...styles.header, background: primaryColor }}>
        <div style={styles.headerTitle}>Pengaturan</div>
      </div>

      <div style={styles.content}>
        <div className="fade-in-up stagger-1" style={styles.profileCard}>
          <div style={styles.avatar}>{isPemilik ? '👨‍🍳' : '👩‍🍳'}</div>
          <div>
            <div style={styles.profileName}>{user?.nama || user?.name || 'Pengguna'}</div>
            <div style={styles.profileRole}>{user?.role || 'User'} Warteg</div>
          </div>
        </div>

        <div className="fade-in-up stagger-2" style={styles.menuGroup}>
          <MenuItem
            icon={<IconUser size={20} />}
            label="Profil Saya"
            onClick={() => navigate('/profil')}
          />
          {isPemilik && (
            <MenuItem
              icon={<IconUsers size={20} />}
              label="Kelola Akun Kasir"
              onClick={() => navigate('/kelola-kasir')}
            />
          )}
          <MenuItem
            icon={<IconInfoCircle size={20} />}
            label="Tentang Aplikasi"
            onClick={() => navigate('/tentang')}
          />
        </div>

        <button
          className="btn-press hover-bright fade-in-up stagger-3"
          style={styles.logoutBtn}
          onClick={handleLogout}
        >
          <IconLogout size={20} /> Keluar
        </button>
      </div>
    </div>
  );
}

function MenuItem({ icon, label, onClick }) {
  return (
    <div className="hover-lift" style={styles.menuItem} onClick={onClick}>
      <div style={styles.menuItemLeft}>
        <div style={styles.menuIcon}>{icon}</div>
        <div style={styles.menuLabel}>{label}</div>
      </div>
      <IconChevronRight size={18} color="#B4B2A9" />
    </div>
  );
}

const styles = {
  container: { height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' },
  header: { padding: '24px 20px 40px', borderRadius: '0 0 24px 24px' },
  headerTitle: { fontSize: '18px', fontWeight: '800', color: '#fff', textAlign: 'center' },
  content: {
    padding: '20px 16px 80px',
    flex: 1,
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    marginTop: '-30px',
  },
  profileCard: {
    background: '#fff',
    borderRadius: '16px',
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    border: '1.5px solid #EAE5DA',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
  },
  avatar: {
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    background: '#F1EFE8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '28px',
  },
  profileName: { fontSize: '16px', fontWeight: '800', color: '#2C2C2A', marginBottom: '2px' },
  profileRole: { fontSize: '12px', color: '#888780', fontWeight: '600' },
  menuGroup: {
    background: '#fff',
    borderRadius: '16px',
    border: '1.5px solid #EAE5DA',
    overflow: 'hidden',
  },
  menuItem: {
    padding: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #F1EFE8',
    cursor: 'pointer',
    transition: 'background 0.2s ease',
  },
  menuItemLeft: { display: 'flex', alignItems: 'center', gap: '12px' },
  menuIcon: { color: '#5F5E5A', display: 'flex', alignItems: 'center' },
  menuLabel: { fontSize: '14px', fontWeight: '700', color: '#2C2C2A' },
  logoutBtn: {
    width: '100%',
    background: '#FFF0F0',
    border: '1.5px solid #F5C4B3',
    color: '#C94040',
    padding: '16px',
    borderRadius: '16px',
    fontSize: '15px',
    fontWeight: '800',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    cursor: 'pointer',
    fontFamily: 'inherit',
  },
};
