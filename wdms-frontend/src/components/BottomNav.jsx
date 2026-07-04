import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { IconHome, IconToolsKitchen2, IconChartLine, IconClipboardList, IconHistory, IconSettings } from '@tabler/icons-react';
import { useAppContext } from '../context/AppContext';

export default function BottomNav() {
  const { user } = useAppContext();
  const location = useLocation();

  // Don't show on login page, payment, or receipt
  if (!user || ['/', '/bayar', '/struk'].includes(location.pathname)) return null;

  return (
    <div style={styles.navContainer}>
      {user.role === 'Pemilik' ? (
        <>
          <NavItem to="/dashboard-pemilik" icon={<IconHome />} label="Beranda" />
          <NavItem to="/menu" icon={<IconToolsKitchen2 />} label="Menu" />
          <NavItem to="/laporan" icon={<IconChartLine />} label="Laporan" />
          <NavItem to="/pengaturan" icon={<IconSettings />} label="Pengaturan" />
        </>
      ) : (
        <>
          <NavItem to="/dashboard-kasir" icon={<IconHome />} label="Beranda" />
          <NavItem to="/pesan" icon={<IconClipboardList />} label="Pesan" />
          <NavItem to="/riwayat" icon={<IconHistory />} label="Riwayat" />
          <NavItem to="/pengaturan" icon={<IconSettings />} label="Pengaturan" />
        </>
      )}
    </div>
  );
}

function NavItem({ to, icon, label }) {
  return (
    <NavLink 
      to={to} 
      style={({ isActive }) => ({
        ...styles.navItem,
        color: isActive ? '#C94040' : '#B4B2A9'
      })}
    >
      {({ isActive }) => (
        <>
          {React.cloneElement(icon, { size: 22, color: isActive ? '#C94040' : '#B4B2A9' })}
          {isActive && <div style={styles.activeDot} />}
          <span style={styles.label}>{label}</span>
        </>
      )}
    </NavLink>
  );
}

const styles = {
  navContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    background: '#fff',
    borderRadius: '0 0 32px 32px',
    padding: '12px 0 16px',
    display: 'flex',
    justifyContent: 'space-around',
    borderTop: '0.5px solid #e0dbd0',
    zIndex: 10
  },
  navItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
    cursor: 'pointer',
    textDecoration: 'none'
  },
  label: {
    fontSize: '10px',
    fontWeight: '700'
  },
  activeDot: {
    width: '4px',
    height: '4px',
    borderRadius: '50%',
    background: '#C94040',
    marginTop: '-2px'
  }
};
