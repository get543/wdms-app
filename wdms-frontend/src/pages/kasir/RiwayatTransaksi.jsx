import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import { IconSearch, IconFilter, IconReceipt } from '@tabler/icons-react';

export default function RiwayatTransaksi() {
  const { transactions } = useAppContext();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const formatIDR = (num) => `Rp ${num.toLocaleString('id-ID')}`;

  const openStruk = (trx) => {
    const normalized = {
      ...trx,
      id: trx.id_transaksi || trx.id,
      id_transaksi: trx.id_transaksi || trx.id,
      date: trx.tanggal_transaksi || trx.date || trx.created_at,
      kasir: trx.kasir || 'Kasir',
      items: (trx.items || []).map((item) => ({
        ...item,
        nama: item.nama || item.nama_menu || item.name || 'Item',
        qty: Number(item.qty ?? item.jumlah ?? 1),
        harga: Number(item.harga ?? item.harga_satuan ?? item.harga_jual ?? 0),
      })),
      total: Number(trx.total_transaksi || trx.total || 0),
      bayar: Number(trx.jumlah_bayar || trx.bayar || 0),
      kembalian: Number(trx.kembalian || 0),
      metode: trx.metode_bayar || trx.metode || 'Tunai',
    };

    try {
      sessionStorage.setItem('wdms_last_trx', JSON.stringify(normalized));
    } catch {}

    navigate('/struk', { state: { trx: normalized } });
  };

  const normalizedTransactions = (transactions || []).map((trx) => ({
    ...trx,
    id: trx.id_transaksi || trx.id,
    id_transaksi: trx.id_transaksi || trx.id,
    date: trx.tanggal_transaksi || trx.date || trx.created_at,
    kasir: trx.kasir || 'Kasir',
    items: trx.items || [],
    total: trx.total_transaksi || trx.total || 0,
    bayar: trx.jumlah_bayar || trx.bayar || 0,
    kembalian: trx.kembalian || 0,
    metode: trx.metode_bayar || trx.metode || 'Tunai',
  }));

  const filtered = normalizedTransactions.filter((t) => {
    const idText = String(t.id_transaksi ?? t.id ?? '');
    const kasirText = String(t.kasir ?? '');
    return idText.includes(search) || kasirText.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="page-enter" style={styles.container}>
      <div className="header-enter" style={styles.header}>
        <div style={styles.headerTitle}>Riwayat Transaksi</div>
        <div style={styles.searchRow}>
          <div style={styles.searchBox}>
            <IconSearch size={18} color="#888780" />
            <input
              style={styles.searchInput}
              placeholder="Cari ID transaksi..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button style={styles.filterBtn}>
            <IconFilter size={20} color="#fff" />
          </button>
        </div>
      </div>

      <div style={styles.content}>
        {filtered.map((trx) => {
          const d = trx.date ? new Date(trx.date) : new Date();
          const timeStr = `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`;

          return (
            <div
              key={trx.id_transaksi || trx.id}
              className="list-item-enter hover-lift"
              style={styles.trxCard}
              onClick={() => openStruk(trx)}
            >
              <div style={styles.trxHeader}>
                <div style={styles.trxId}>#{String(trx.id_transaksi || trx.id).slice(-4)}</div>
                <div style={styles.trxStatus}>Berhasil</div>
              </div>
              <div style={styles.trxBody}>
                <div style={styles.trxSummary}>
                  {(trx.items || []).length} Item • Kasir: {trx.kasir}
                </div>
                <div style={styles.trxTime}>{timeStr}</div>
              </div>
              <div style={styles.trxFooter}>
                <div style={styles.trxTotal}>{formatIDR(trx.total)}</div>
                <div style={styles.viewStruk}>
                  Lihat Struk <IconReceipt size={14} />
                </div>
              </div>
            </div>
          );
        })}
        {filtered.length === 0 && (
          <div className="fade-in" style={styles.empty}>
            Belum ada transaksi.
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: { height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' },
  header: { background: '#1D9E75', padding: '24px 20px 40px', borderRadius: '0 0 24px 24px' },
  headerTitle: {
    fontSize: '18px',
    fontWeight: '800',
    color: '#fff',
    textAlign: 'center',
    marginBottom: '16px',
  },
  searchRow: { display: 'flex', gap: '10px' },
  searchBox: {
    display: 'flex',
    alignItems: 'center',
    background: '#fff',
    padding: '10px 14px',
    borderRadius: '12px',
    gap: '8px',
    flex: 1,
  },
  searchInput: {
    border: 'none',
    outline: 'none',
    flex: 1,
    fontSize: '14px',
    fontFamily: 'inherit',
  },
  filterBtn: {
    background: '#0F6E56',
    border: 'none',
    borderRadius: '12px',
    padding: '0 14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  content: {
    padding: '20px 16px 80px',
    flex: 1,
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginTop: '-20px',
  },
  trxCard: {
    background: '#fff',
    borderRadius: '16px',
    padding: '16px',
    border: '1.5px solid #EAE5DA',
    cursor: 'pointer',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  },
  trxHeader: { display: 'flex', justifyContent: 'space-between', marginBottom: '8px' },
  trxId: { fontSize: '14px', fontWeight: '800', color: '#2C2C2A' },
  trxStatus: {
    fontSize: '10px',
    fontWeight: '800',
    background: '#EAF3DE',
    color: '#3B6D11',
    padding: '2px 8px',
    borderRadius: '4px',
  },
  trxBody: { display: 'flex', justifyContent: 'space-between', marginBottom: '12px' },
  trxSummary: { fontSize: '12px', color: '#5F5E5A', fontWeight: '600' },
  trxTime: { fontSize: '12px', color: '#888780', fontWeight: '600' },
  trxFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '12px',
    borderTop: '1px dashed #D3D1C7',
  },
  trxTotal: { fontSize: '15px', fontWeight: '800', color: '#1D9E75' },
  viewStruk: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: '11px',
    fontWeight: '700',
    color: '#1D9E75',
  },
  empty: { textAlign: 'center', color: '#888780', fontSize: '13px', marginTop: '40px' },
};
