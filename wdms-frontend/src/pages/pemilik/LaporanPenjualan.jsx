import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import { IconDownload, IconPrinter, IconX } from '@tabler/icons-react';

const PERIODES = [
  { label: 'Hari Ini', value: 'hari' },
  { label: '7 Hari', value: 'minggu' },
  { label: 'Bulan Ini', value: 'bulan' },
];

export default function LaporanPenjualan() {
  const { fetchLaporan } = useAppContext();
  const [periode, setPeriode] = useState('hari');
  const [stats, setStats] = useState({ total_transaksi: 0, total_pendapatan: 0 });
  const [menuTerlaris, setMenuTerlaris] = useState([]);
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    fetchLaporan(periode).then((data) => {
      if (data) {
        setStats(data.stats);
        setMenuTerlaris(data.menuTerlaris || []);
      }
    });
  }, [fetchLaporan, periode]);

  const formatIDR = (num) => `Rp ${parseFloat(num || 0).toLocaleString('id-ID')}`;
  const maxTerjual = menuTerlaris.length > 0 ? menuTerlaris[0].total_terjual : 1;

  const handleExport = () => {
    setShowPreview(true);
  };

  const handlePrint = () => {
    window.print();
  };

  const periodeLabel = PERIODES.find((p) => p.value === periode)?.label || 'Hari Ini';

  return (
    <div className="page-enter" style={styles.container}>
      <style>{`
        @media print {
          body { background: #fff; }
          body * { visibility: hidden; }
          .print-report-preview, .print-report-preview * { visibility: visible; }
          .print-report-preview { position: absolute; left: 0; top: 0; width: 100%; box-shadow: none; }
          .print-report-preview .previewActions { display: none !important; }
        }
      `}</style>

      <div className="header-enter" style={styles.header}>
        <div style={styles.headerTitle}>Laporan Penjualan</div>
        <div className="fade-in-up stagger-1" style={styles.periodeTabs}>
          {PERIODES.map((p) => (
            <button
              key={p.value}
              className="btn-press hover-glow"
              style={periode === p.value ? styles.tabActive : styles.tabInactive}
              onClick={() => setPeriode(p.value)}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      <div style={styles.content}>
        <div className="fade-in-up stagger-2" style={styles.statsRow}>
          <div className="fade-in-scale stagger-2" style={styles.statCard}>
            <div style={styles.statLabel}>Total Pendapatan</div>
            <div className="stat-enter" style={{ ...styles.statValue, color: '#C94040' }}>
              {formatIDR(stats.total_pendapatan)}
            </div>
          </div>
          <div className="fade-in-scale stagger-3" style={styles.statCard}>
            <div style={styles.statLabel}>Total Transaksi</div>
            <div className="stat-enter" style={{ ...styles.statValue, color: '#2C2C2A' }}>{stats.total_transaksi}</div>
          </div>
        </div>

        <div className="fade-in-up stagger-4" style={styles.sectionTitle}>Menu Terlaris</div>
        <div className="fade-in-up stagger-4" style={styles.menuPopular}>
          {menuTerlaris.length === 0 ? (
            <div
              style={{ color: '#888780', fontSize: '12px', textAlign: 'center', padding: '8px' }}
            >
              Belum ada data penjualan untuk periode ini.
            </div>
          ) : (
            menuTerlaris.map((menu, i) => (
              <div key={i} style={styles.menuItem}>
                <div style={styles.menuName}>{menu.nama_menu}</div>
                <div style={styles.menuBarBg}>
                  <div
                    style={{
                      ...styles.menuBarFill,
                      width: `${(menu.total_terjual / maxTerjual) * 100}%`,
                    }}
                  />
                </div>
                <div style={styles.menuQty}>{menu.total_terjual} porsi</div>
              </div>
            ))
          )}
        </div>

        <div className="fade-in-up stagger-5" style={styles.sectionTitle}>Grafik Penjualan</div>
        <div className="fade-in-up stagger-5" style={styles.chartCard}>
          <div style={styles.chartPlaceholder}>
            {[40, 70, 50, 90, 60, 80, 100].map((h, i) => (
              <div key={i} className={`chart-bar stagger-${i + 1}`} style={{ ...styles.bar, height: `${h}%` }}></div>
            ))}
          </div>
          <div style={styles.chartLabels}>
            <span>Sen</span>
            <span>Sel</span>
            <span>Rab</span>
            <span>Kam</span>
            <span>Jum</span>
            <span>Sab</span>
            <span>Min</span>
          </div>
        </div>

        <button className="btn-press hover-glow fade-in-up stagger-6" style={styles.exportBtn} onClick={handleExport}>
          <IconDownload size={18} /> Export Laporan
        </button>
      </div>

      {showPreview && (
        <div className="print-report-preview modal-overlay-enter" style={styles.previewOverlay}>
          <div className="modal-content-enter" style={styles.previewSheet}>
            <div style={styles.previewHeader}>
              <div>
                <div style={styles.previewTitle}>Preview Laporan</div>
                <div style={styles.previewSubtitle}>WARTEG PAK BUDI • {periodeLabel}</div>
              </div>
              <button style={styles.previewClose} onClick={() => setShowPreview(false)}>
                <IconX size={18} />
              </button>
            </div>

            <div style={styles.previewBody}>
              <div style={styles.previewBrand}>LAPORAN PENJUALAN</div>
              <div style={styles.previewMeta}>Periode: {periodeLabel}</div>
              <div style={styles.previewDivider} />

              <div style={styles.previewStatsGrid}>
                <div style={styles.previewStatBox}>
                  <div style={styles.previewStatLabel}>Total Pendapatan</div>
                  <div style={styles.previewStatValue}>{formatIDR(stats.total_pendapatan)}</div>
                </div>
                <div style={styles.previewStatBox}>
                  <div style={styles.previewStatLabel}>Total Transaksi</div>
                  <div style={styles.previewStatValue}>{stats.total_transaksi}</div>
                </div>
              </div>

              <div style={styles.previewSectionTitle}>Menu Terlaris</div>
              <div style={styles.previewList}>
                {menuTerlaris.length === 0 ? (
                  <div style={styles.previewEmpty}>Belum ada data untuk periode ini.</div>
                ) : (
                  menuTerlaris.map((menu, i) => (
                    <div key={i} style={styles.previewItemRow}>
                      <div style={styles.previewItemName}>{menu.nama_menu}</div>
                      <div style={styles.previewItemQty}>{menu.total_terjual} porsi</div>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div style={styles.previewActions}>
              <button style={styles.previewBtnSecondary} onClick={() => setShowPreview(false)}>
                Tutup
              </button>
              <button style={styles.previewBtnPrimary} onClick={handlePrint}>
                <IconPrinter size={16} /> Cetak
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: { height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' },
  header: { background: '#C94040', padding: '24px 20px 40px', borderRadius: '0 0 24px 24px' },
  headerTitle: {
    fontSize: '18px',
    fontWeight: '800',
    color: '#fff',
    textAlign: 'center',
    marginBottom: '14px',
  },
  periodeTabs: {
    display: 'flex',
    background: 'rgba(255,255,255,0.2)',
    borderRadius: '10px',
    padding: '3px',
    gap: '3px',
  },
  tabActive: {
    flex: 1,
    background: '#fff',
    color: '#C94040',
    border: 'none',
    borderRadius: '8px',
    padding: '9px 0',
    fontWeight: '800',
    fontSize: '12px',
    cursor: 'pointer',
    fontFamily: 'inherit',
    transition: 'all 0.25s ease',
    transform: 'translateY(0)',
  },
  tabInactive: {
    flex: 1,
    background: 'transparent',
    color: 'rgba(255,255,255,0.85)',
    border: 'none',
    borderRadius: '8px',
    padding: '9px 0',
    fontWeight: '700',
    fontSize: '12px',
    cursor: 'pointer',
    fontFamily: 'inherit',
    transition: 'all 0.25s ease',
    transform: 'translateY(0)',
  },
  content: { padding: '20px 16px 80px', flex: 1, overflowY: 'auto', marginTop: '-20px' },
  statsRow: { display: 'flex', gap: '10px', marginBottom: '20px' },
  statCard: {
    flex: 1,
    background: '#fff',
    borderRadius: '16px',
    padding: '16px',
    border: '1.5px solid #EAE5DA',
    textAlign: 'center',
  },
  statLabel: { fontSize: '11px', fontWeight: '700', color: '#888780', marginBottom: '8px' },
  statValue: { fontSize: '18px', fontWeight: '800' },
  sectionTitle: { fontSize: '14px', fontWeight: '800', color: '#5F5E5A', marginBottom: '12px' },
  menuPopular: {
    background: '#fff',
    borderRadius: '16px',
    padding: '14px 16px',
    marginBottom: '20px',
    border: '1.5px solid #EAE5DA',
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
  menuBarFill: { height: '100%', borderRadius: '8px', background: '#C94040' },
  menuName: { fontSize: '12px', fontWeight: '700', color: '#2C2C2A', minWidth: '90px' },
  menuQty: {
    fontSize: '11px',
    color: '#888780',
    fontWeight: '600',
    minWidth: '40px',
    textAlign: 'right',
  },
  chartCard: {
    background: '#fff',
    borderRadius: '16px',
    padding: '16px',
    marginBottom: '20px',
    border: '1.5px solid #EAE5DA',
  },
  chartPlaceholder: {
    height: '120px',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    padding: '0 10px',
    marginBottom: '10px',
  },
  bar: { width: '24px', background: '#C94040', borderRadius: '4px 4px 0 0', opacity: 0.8, transition: 'opacity 0.3s' },
  chartLabels: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 10px',
    fontSize: '10px',
    color: '#888780',
    fontWeight: '700',
  },
  exportBtn: {
    width: '100%',
    background: '#fff',
    border: '1.5px solid #C94040',
    color: '#C94040',
    padding: '14px',
    borderRadius: '14px',
    fontSize: '14px',
    fontWeight: '800',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    cursor: 'pointer',
    fontFamily: 'inherit',
  },
  previewOverlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(12, 18, 20, 0.62)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '18px',
    zIndex: 1000,
  },
  previewSheet: {
    width: '100%',
    maxWidth: '430px',
    background: '#fff',
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: '0 20px 50px rgba(0,0,0,0.25)',
  },
  previewHeader: {
    background: '#C94040',
    padding: '16px 18px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  previewTitle: { fontSize: '16px', fontWeight: '800', color: '#fff' },
  previewSubtitle: { fontSize: '12px', color: 'rgba(255,255,255,0.85)', marginTop: '2px' },
  previewClose: {
    background: 'rgba(255,255,255,0.2)',
    border: 'none',
    borderRadius: '999px',
    color: '#fff',
    width: '34px',
    height: '34px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  previewBody: { padding: '18px' },
  previewBrand: {
    fontSize: '18px',
    fontWeight: '800',
    color: '#2C2C2A',
    textAlign: 'center',
    marginBottom: '4px',
  },
  previewMeta: { fontSize: '12px', color: '#888780', textAlign: 'center', marginBottom: '10px' },
  previewDivider: { borderTop: '1.5px dashed #D3D1C7', margin: '10px 0 14px' },
  previewStatsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',
    marginBottom: '14px',
  },
  previewStatBox: {
    background: '#FFF6F6',
    border: '1px solid #F2D1D1',
    borderRadius: '14px',
    padding: '12px',
  },
  previewStatLabel: { fontSize: '10px', fontWeight: '700', color: '#888780', marginBottom: '6px' },
  previewStatValue: { fontSize: '15px', fontWeight: '800', color: '#C94040' },
  previewSectionTitle: {
    fontSize: '13px',
    fontWeight: '800',
    color: '#5F5E5A',
    marginBottom: '10px',
  },
  previewList: { display: 'flex', flexDirection: 'column', gap: '8px' },
  previewItemRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 12px',
    background: '#FAFAFA',
    borderRadius: '12px',
  },
  previewItemName: { fontSize: '12px', fontWeight: '700', color: '#2C2C2A' },
  previewItemQty: { fontSize: '11px', fontWeight: '700', color: '#C94040' },
  previewEmpty: { textAlign: 'center', color: '#888780', fontSize: '12px', padding: '6px 0' },
  previewActions: { display: 'flex', gap: '10px', padding: '0 18px 18px' },
  previewBtnSecondary: {
    flex: 1,
    border: '1.5px solid #D3D1C7',
    background: '#fff',
    color: '#5F5E5A',
    borderRadius: '14px',
    padding: '12px',
    fontFamily: 'inherit',
    fontWeight: '800',
    cursor: 'pointer',
  },
  previewBtnPrimary: {
    flex: 1,
    border: 'none',
    background: '#C94040',
    color: '#fff',
    borderRadius: '14px',
    padding: '12px',
    fontFamily: 'inherit',
    fontWeight: '800',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
  },
};

if (typeof window !== 'undefined') {
  window.addEventListener('beforeprint', () => {
    const root = document.body;
    if (root) {
      root.style.background = '#fff';
      root.style.padding = '0';
    }
  });

  window.addEventListener('afterprint', () => {
    const root = document.body;
    if (root) {
      root.style.background = '';
      root.style.padding = '';
    }
  });
}
