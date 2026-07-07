import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import { IconChevronLeft, IconInfoCircle } from '@tabler/icons-react';

export default function TentangAplikasi() {
  const navigate = useNavigate();
  const { user } = useAppContext();
  const primaryColor = user?.role === 'Pemilik' ? '#C94040' : '#1D9E75';

  return (
    <div className="page-enter" style={styles.container}>
      <div className="header-enter" style={{ ...styles.header, background: primaryColor }}>
        <button style={styles.backBtn} onClick={() => navigate(-1)}>
          <IconChevronLeft size={24} />
        </button>
        <div style={styles.headerTitle}>Tentang Aplikasi</div>
        <div style={{ width: 24 }} />
      </div>

      <div style={styles.content}>
        <div className="fade-in-up stagger-1" style={styles.card}>
          <div style={styles.logoContainer}>
            <IconInfoCircle size={64} color={primaryColor} />
          </div>
          <h2 style={styles.title}>Warteg Data Management System (WDMS)</h2>
          <p style={styles.version}>Versi 1.0.0</p>

          <div style={styles.description}>
            <p>
              Aplikasi ini dikembangkan untuk mempermudah pengelolaan operasional warteg, mulai dari
              pencatatan pesanan oleh kasir, hingga pemantauan pendapatan dan manajemen stok oleh
              pemilik.
            </p>
            <p>
              Dengan sistem yang terintegrasi, diharapkan pelayanan kepada pelanggan menjadi lebih
              cepat dan pembukuan menjadi lebih transparan.
            </p>
          </div>
        </div>

        <div className="fade-in-up stagger-2" style={styles.footer}>
          &copy; {new Date().getFullYear()} WDMS. All rights reserved.
        </div>
      </div>
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
  content: { padding: '20px 16px', flex: 1, overflowY: 'auto', marginTop: '-20px' },
  card: {
    background: '#fff',
    borderRadius: '16px',
    padding: '24px',
    border: '1.5px solid #EAE5DA',
    textAlign: 'center',
  },
  logoContainer: {
    marginBottom: '16px',
  },
  title: {
    fontSize: '18px',
    fontWeight: '800',
    color: '#2C2C2A',
    marginBottom: '8px',
  },
  version: {
    fontSize: '12px',
    color: '#888780',
    fontWeight: '600',
    marginBottom: '24px',
  },
  description: {
    fontSize: '14px',
    color: '#5F5E5A',
    lineHeight: '1.6',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  footer: {
    marginTop: '32px',
    textAlign: 'center',
    fontSize: '12px',
    color: '#B4B2A9',
    fontWeight: '600',
  },
};
