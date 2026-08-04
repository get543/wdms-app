import React from 'react';
import { useNavigate } from 'react-router';
import { useAppContext } from '../../context/AppContext';
import { IconClipboardList, IconHistory } from '@tabler/icons-react';

export default function DashboardKasir() {
  const { user, transactions } = useAppContext();
  const navigate = useNavigate();

  const today = new Date().toISOString().split('T')[0];
  const displayName = user?.nama || user?.name || 'Kasir';

  const myTrx = (transactions || []).filter((t) => {
    const trxDate = t?.tanggal_transaksi || t?.date || t?.created_at || '';
    const normalizedDate = typeof trxDate === 'string' ? trxDate.split('T')[0] : '';
    const kasirName = t?.kasir || '';
    const currentUserName = user?.nama || user?.name || '';

    return normalizedDate === today && kasirName === currentUserName;
  });

  return (
    <div className="page-enter" style={styles.container}>
      <div className="header-enter" style={styles.header}>
        <div style={styles.headerTitle}>WDMS Kasir</div>
        <div style={styles.headerGreeting}>Halo, {displayName.split(' ')[0]}!</div>
        <div style={styles.headerDate}>
          {new Date().toLocaleDateString('id-ID', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </div>
        <div style={styles.avatar}>👩‍🍳</div>
      </div>

      <div style={styles.content}>
        <div className="fade-in-scale stagger-1" style={styles.statsCard}>
          <div style={styles.statLabel}>Total Transaksi Saya Hari Ini</div>
          <div style={styles.statValue}>
            {myTrx.length} <span style={styles.statSub}>pesanan</span>
          </div>
        </div>

        <div style={styles.quickGrid}>
          <button
            className="hover-lift btn-press quick-btn-enter stagger-2"
            style={{ ...styles.quickBtn, background: '#1D9E75' }}
            onClick={() => navigate('/pesan')}
          >
            <div style={{ color: '#fff' }}>
              <IconClipboardList size={32} />
            </div>
            <div style={styles.quickLabel}>Buat Pesanan Baru</div>
          </button>

          <button
            className="hover-lift btn-press quick-btn-enter stagger-3"
            style={{ ...styles.quickBtn, background: '#E07B3A' }}
            onClick={() => navigate('/riwayat')}
          >
            <div style={{ color: '#fff' }}>
              <IconHistory size={32} />
            </div>
            <div style={styles.quickLabel}>Riwayat Transaksi</div>
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: { height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' },
  header: {
    background: '#1D9E75',
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
    background: '#a0eed3',
    border: '2.5px solid #fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    transition: 'transform 0.3s ease',
  },
  content: { padding: '24px 16px 80px', flex: 1, overflowY: 'auto' },
  statsCard: {
    background: '#fff',
    borderRadius: '18px',
    padding: '16px',
    marginBottom: '24px',
    border: '1.5px solid #EAE5DA',
    textAlign: 'center',
  },
  statLabel: { fontSize: '12px', fontWeight: '700', color: '#888780', marginBottom: '4px' },
  statValue: { fontSize: '28px', fontWeight: '800', color: '#1D9E75' },
  statSub: { fontSize: '12px', color: '#5F5E5A', fontWeight: '600' },
  quickGrid: { display: 'flex', flexDirection: 'column', gap: '14px' },
  quickBtn: {
    borderRadius: '18px',
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'left',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
  quickLabel: { fontSize: '16px', fontWeight: '800', color: '#fff' },
};
