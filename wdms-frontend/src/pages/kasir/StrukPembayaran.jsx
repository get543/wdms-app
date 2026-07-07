import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { IconPrinter, IconShare, IconPlus } from '@tabler/icons-react';

export default function StrukPembayaran() {
  const navigate = useNavigate();
  const location = useLocation();
  const [trx, setTrx] = useState(() => {
    try {
      const saved = sessionStorage.getItem('wdms_last_trx');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const normalizeTrx = (raw) => {
    if (!raw) return null;

    return {
      ...raw,
      id: raw.id_transaksi || raw.id || raw.id_pesanan,
      id_transaksi: raw.id_transaksi || raw.id || raw.id_pesanan,
      date: raw.tanggal_transaksi || raw.date || raw.created_at || new Date().toISOString(),
      kasir: raw.kasir || raw.nama_kasir || 'Kasir',
      items: (raw.items || []).map((item) => ({
        ...item,
        nama: item.nama || item.nama_menu || item.name || 'Item',
        qty: Number(item.qty ?? item.jumlah ?? 1),
        harga: Number(item.harga ?? item.harga_satuan ?? item.harga_jual ?? 0),
      })),
      total: Number(raw.total_transaksi || raw.total || raw.total_bayar || 0),
      bayar: Number(raw.jumlah_bayar || raw.bayar || 0),
      kembalian: Number(raw.kembalian || raw.kembali || 0),
      metode: raw.metode_bayar || raw.metode || 'Tunai',
    };
  };

  useEffect(() => {
    const incoming = location.state?.trx || location.state?.transaction || null;
    if (incoming) {
      const normalized = normalizeTrx(incoming);
      setTrx(normalized);
      try {
        sessionStorage.setItem('wdms_last_trx', JSON.stringify(normalized));
      } catch {}
    }
  }, [location.state]);

  const formatIDR = (num) => `Rp ${num.toLocaleString('id-ID')}`;
  const currentTrx = normalizeTrx(trx);

  if (!currentTrx) {
    return (
      <div style={styles.container}>
        <div className="fade-in" style={styles.body}>
          Data transaksi tidak ditemukan.
        </div>
        <button
          className="btn-press hover-bright fade-in-up stagger-1"
          style={styles.newTrxBtn}
          onClick={() => navigate('/pesan')}
        >
          <IconPlus size={18} /> Transaksi Baru
        </button>
      </div>
    );
  }

  const d = trx.date ? new Date(trx.date) : new Date();
  const dateStr = `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1).toString().padStart(2, '0')}/${d.getFullYear()} ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`;
  const trxId = String(trx.id_transaksi || trx.id || '').slice(-4); // Last 4 digits

  return (
    <div className="page-enter" style={styles.container}>
      <div className="header-enter" style={styles.topBar}>
        <div style={styles.topTitle}>Struk Pembayaran</div>
      </div>

      <div style={styles.body}>
        <div className="fade-in-scale stagger-1" style={styles.receipt}>
          <div style={styles.restoName}>WARTEG PAK BUDI</div>
          <div style={styles.restoSub}>
            Jl. Margonda Raya, Depok
            <br />
            Telp: 0812-xxxx-xxxx
          </div>

          <div style={styles.rDivider} />

          <div style={styles.metaRow}>
            <span>No: #{trxId}</span>
            <span>{dateStr}</span>
          </div>
          <div style={styles.metaRow}>
            <span>Kasir: {trx.kasir}</span>
          </div>

          <div style={styles.rDivider} />

          <div style={{ marginTop: '2px' }}>
            {(trx.items || []).map((item, idx) => (
              <div key={idx} style={styles.itemRow}>
                <div>
                  <div style={styles.itemName}>{item.nama}</div>
                  <div style={styles.itemQty}>
                    {item.qty} x {formatIDR(item.harga)}
                  </div>
                </div>
                <div style={styles.itemPrice}>{formatIDR(item.harga * item.qty)}</div>
              </div>
            ))}
          </div>

          <div style={styles.rDivider} />

          <div style={styles.totalRow}>
            <span>TOTAL</span>
            <span style={{ color: '#1D9E75' }}>{formatIDR(trx.total)}</span>
          </div>
          <div style={styles.subRow}>
            <span>Bayar</span>
            <span>{formatIDR(trx.bayar)}</span>
          </div>
          <div style={styles.kembalianRow}>
            <span>Kembalian</span>
            <span>{formatIDR(trx.kembalian)}</span>
          </div>

          <div style={styles.rDivider} />

          <div style={styles.thankyou}>
            <p style={styles.thankyouText}>
              Terima kasih atas kunjungan Anda!
              <br />
              Selamat makan!
            </p>
          </div>
        </div>

        <div className="fade-in-up stagger-2" style={styles.actionRow}>
          <button style={styles.btnCetak} onClick={() => window.print()}>
            <IconPrinter size={16} /> Cetak
          </button>
          <button style={styles.btnShare}>
            <IconShare size={16} /> Share
          </button>
        </div>

        <button style={styles.newTrxBtn} onClick={() => navigate('/pesan')}>
          <IconPlus size={18} /> Transaksi Baru
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: { height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' },
  topBar: {
    background: '#1D9E75',
    padding: '14px 18px 42px',
    position: 'relative',
    borderRadius: '0 0 28px 28px',
  },
  topTitle: { fontSize: '15px', fontWeight: '800', color: '#fff', textAlign: 'center' },
  body: {
    padding: '28px 16px 24px',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    overflowY: 'auto',
  },
  receipt: {
    background: '#fff',
    borderRadius: '20px',
    padding: '18px 16px',
    border: '1.5px solid #EAE5DA',
  },
  restoName: {
    fontSize: '17px',
    fontWeight: '800',
    color: '#2C2C2A',
    textAlign: 'center',
    marginBottom: '2px',
  },
  restoSub: {
    fontSize: '11px',
    color: '#888780',
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 1.6,
  },
  rDivider: { border: 'none', borderTop: '1.5px dashed #D3D1C7', margin: '12px 0' },
  metaRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '11px',
    color: '#5F5E5A',
    fontWeight: '600',
    marginBottom: '4px',
  },
  itemRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '8px',
  },
  itemName: { fontSize: '12px', fontWeight: '800', color: '#2C2C2A' },
  itemQty: { fontSize: '11px', fontWeight: '600', color: '#888780' },
  itemPrice: {
    fontSize: '12px',
    fontWeight: '700',
    color: '#2C2C2A',
    textAlign: 'right',
    minWidth: '64px',
  },
  totalRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '14px',
    fontWeight: '800',
    color: '#2C2C2A',
    marginBottom: '6px',
  },
  subRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '12px',
    fontWeight: '600',
    color: '#5F5E5A',
    marginBottom: '4px',
  },
  kembalianRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '12px',
    fontWeight: '800',
    color: '#E07B3A',
  },
  thankyou: {
    background: '#E1F5EE',
    borderRadius: '14px',
    padding: '10px 14px',
    textAlign: 'center',
  },
  thankyouText: {
    fontSize: '12px',
    fontWeight: '700',
    color: '#085041',
    lineHeight: 1.6,
    margin: 0,
  },
  actionRow: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' },
  btnCetak: {
    borderRadius: '14px',
    padding: '13px 0',
    fontFamily: 'inherit',
    fontSize: '13px',
    fontWeight: '800',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    border: 'none',
    background: '#1D9E75',
    color: '#fff',
  },
  btnShare: {
    borderRadius: '14px',
    padding: '13px 0',
    fontFamily: 'inherit',
    fontSize: '13px',
    fontWeight: '800',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    background: '#fff',
    color: '#1D9E75',
    border: '2px solid #1D9E75',
  },
  newTrxBtn: {
    background: '#E07B3A',
    border: 'none',
    borderRadius: '18px',
    width: '100%',
    padding: '15px',
    fontFamily: 'inherit',
    fontSize: '14px',
    fontWeight: '800',
    color: '#fff',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
  },
};

if (typeof window !== 'undefined') {
  window.addEventListener('beforeprint', () => {
    document.body.style.background = '#fff';
    document.body.style.padding = '0';
  });

  window.addEventListener('afterprint', () => {
    document.body.style.background = '';
    document.body.style.padding = '';
  });
}
