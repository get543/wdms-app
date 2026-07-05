import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import {
  IconToolsKitchen2,
  IconChartBar,
  IconPackage,
  IconCashBanknote,
} from '@tabler/icons-react';

export default function DashboardPemilik() {
  const { user, fetchLaporan } = useAppContext();
  const navigate = useNavigate();
  const [stats, setStats] = useState({ total_transaksi: 0, total_pendapatan: 0 });
  const [menuTerlaris, setMenuTerlaris] = useState([]);

  useEffect(() => {
    fetchLaporan('hari').then((data) => {
      if (data) {
        setStats(data.stats);
        setMenuTerlaris(data.menuTerlaris || []);
      }
    });
  }, [fetchLaporan]);

  const formatIDR = (num) => {
    const n = parseFloat(num) || 0;
    return n >= 1000 ? (n / 1000).toFixed(0) + 'K' : `Rp ${n}`;
  };

  const maxTerjual = menuTerlaris.length > 0 ? menuTerlaris[0].total_terjual : 1;
  const barColors = ['#C94040', '#E07B3A', '#D4B96A', '#3B7A57', '#5F5E5A'];

  return (
    <div className="page-enter" style={styles.container}>
      <div className="header-enter" style={styles.header}>
        <div style={styles.headerTitle}>🍽 Dashboard Pemilik</div>
        <div style={styles.headerGreeting}>Selamat pagi, {user?.nama?.split(' ')[0]}!</div>
        <div style={styles.headerDate}>
          {new Date().toLocaleDateString('id-ID', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </div>
        <div style={styles.avatar}>👨‍🍳</div>
      </div>

      <div style={styles.content}>
        <div className="fade-in-up stagger-1" style={styles.adviceCard}>
          <div style={styles.adviceIcon}>💡</div>
          <div>
            <div style={styles.adviceHead}>Tips Hari Ini</div>
            <div style={styles.adviceBody}>
              Pantau stok bahan baku dan pastikan menu selalu tersedia untuk pelanggan!
            </div>
          </div>
        </div>

        <div className="fade-in-up stagger-2" style={styles.statsRow}>
          <div className="fade-in-scale stagger-2" style={{ ...styles.statCard, ...styles.incomeCard }}>
            <div style={{ ...styles.statLabel, color: '#3B6D11' }}>PENDAPATAN</div>
            <div className="stat-enter" style={{ ...styles.statValue, color: '#27500A' }}>
              {formatIDR(stats.total_pendapatan)}
            </div>
            <div style={{ ...styles.statSub, color: '#3B6D11' }}>Hari ini</div>
          </div>
          <div className="fade-in-scale stagger-3" style={{ ...styles.statCard, ...styles.trxCard }}>
            <div style={{ ...styles.statLabel, color: '#993C1D' }}>TRANSAKSI</div>
            <div className="stat-enter" style={{ ...styles.statValue, color: '#D85A30' }}>{stats.total_transaksi}</div>
            <div style={{ ...styles.statSub, color: '#993C1D' }}>Hari ini</div>
          </div>
        </div>

        <div className="fade-in-up stagger-4" style={styles.sectionTitle}>Menu Terlaris Hari Ini</div>
        <div className="fade-in-up stagger-4" style={styles.menuPopular}>
          {menuTerlaris.length === 0 ? (
            <div style={{ color: '#888780', fontSize: '12px', textAlign: 'center' }}>
              Belum ada data penjualan hari ini.
            </div>
          ) : (
            menuTerlaris.slice(0, 3).map((menu, i) => (
              <div key={i} style={styles.menuItem}>
                <div style={styles.menuName}>{menu.nama_menu}</div>
                <div style={styles.menuBarBg}>
                  <div
                    className="bar-fill"
                    style={{
                      ...styles.menuBarFill,
                      width: `${(menu.total_terjual / maxTerjual) * 100}%`,
                      background: barColors[i],
                    }}
                  />
                </div>
                <div style={styles.menuQty}>{menu.total_terjual} porsi</div>
              </div>
            ))
          )}
        </div>

        <div className="fade-in-up stagger-5" style={styles.sectionTitle}>Menu Cepat</div>
        <div className="fade-in-up stagger-5" style={styles.quickGrid}>
          <QuickBtn
            icon={<IconToolsKitchen2 />}
            label="Kelola Menu"
            bg="#C94040"
            onClick={() => navigate('/menu')}
          />
          <QuickBtn
            icon={<IconChartBar />}
            label="Lihat Laporan"
            bg="#3B7A57"
            onClick={() => navigate('/laporan')}
          />
          <QuickBtn
            icon={<IconPackage />}
            label="Kelola Stok"
            bg="#E07B3A"
            onClick={() => navigate('/stok')}
          />
          <QuickBtn
            icon={<IconCashBanknote />}
            label="Pengaturan"
            bg="#5F5E5A"
            onClick={() => navigate('/pengaturan')}
          />
        </div>
      </div>
    </div>
  );
}

function QuickBtn({ icon, label, bg, onClick }) {
  return (
    <button className="hover-lift btn-press" style={{ ...styles.quickBtn, background: bg }} onClick={onClick}>
      <div style={{ color: '#fff' }}>{icon}</div>
      <div style={styles.quickLabel}>{label}</div>
    </button>
  );
}

const styles = {
  container: { height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' },
  header: {
    background: '#C94040',
    padding: '18px 20px 36px',
    position: 'relative',
    borderRadius: '0 0 24px 24px',
  },
  headerTitle: {
    fontSize: '13px',
    fontWeight: '700',
    color: '#fff',
    opacity: 0.85,
    textAlign: 'center',
    marginBottom: '4px',
  },
  headerGreeting: { fontSize: '20px', fontWeight: '800', color: '#fff', marginBottom: '2px' },
  headerDate: { fontSize: '12px', color: 'rgba(255,255,255,0.75)' },
  avatar: {
    position: 'absolute',
    top: '16px',
    right: '18px',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: '#f5c4c4',
    border: '2.5px solid #fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    transition: 'transform 0.3s ease',
  },
  content: { padding: '24px 16px 80px', flex: 1, overflowY: 'auto' },
  adviceCard: {
    background: '#FFF8EC',
    borderRadius: '18px',
    padding: '13px 16px',
    marginBottom: '18px',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
  },
  adviceIcon: { fontSize: '22px', marginTop: '2px' },
  adviceHead: { fontSize: '12px', fontWeight: '800', color: '#854F0B', marginBottom: '2px' },
  adviceBody: { fontSize: '11px', color: '#BA7517', lineHeight: 1.5 },
  statsRow: { display: 'flex', gap: '10px', marginBottom: '18px' },
  statCard: { flex: 1, borderRadius: '18px', padding: '14px 16px' },
  incomeCard: { background: '#EAF3DE' },
  trxCard: { background: '#FAECE7' },
  statLabel: { fontSize: '11px', fontWeight: '700', opacity: 0.7, marginBottom: '4px' },
  statValue: { fontSize: '26px', fontWeight: '800' },
  statSub: { fontSize: '10px', fontWeight: '600', opacity: 0.65, marginTop: '2px' },
  sectionTitle: { fontSize: '13px', fontWeight: '800', color: '#5F5E5A', margin: '0 0 10px' },
  menuPopular: {
    background: '#fff',
    borderRadius: '18px',
    padding: '14px 16px',
    marginBottom: '18px',
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '8px',
  },
  menuBarBg: {
    flex: 1,
    height: '8px',
    background: '#F1EFE8',
    borderRadius: '8px',
    margin: '0 10px',
    overflow: 'hidden',
  },
  menuBarFill: { height: '100%', borderRadius: '8px' },
  menuName: { fontSize: '12px', fontWeight: '700', color: '#2C2C2A', minWidth: '90px' },
  menuQty: {
    fontSize: '11px',
    color: '#888780',
    fontWeight: '600',
    minWidth: '40px',
    textAlign: 'right',
  },
  quickGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' },
  quickBtn: {
    borderRadius: '18px',
    padding: '16px 14px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '6px',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'left',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  },
  quickLabel: { fontSize: '12px', fontWeight: '800', color: '#fff' },
};
