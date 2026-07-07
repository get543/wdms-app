import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import { IconChevronLeft, IconReceipt, IconCash, IconQrcode, IconCheck } from '@tabler/icons-react';

export default function ProsesPembayaran() {
  const { cart, addTransaction } = useAppContext();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.harga * item.qty, 0);

  const [paid, setPaid] = useState(total);
  const [paidInput, setPaidInput] = useState(total.toString());
  const [method, setMethod] = useState('Tunai');

  useEffect(() => {
    setPaid(total);
    setPaidInput(total.toString());
  }, [total]);

  const formatIDR = (num) => `Rp ${num.toLocaleString('id-ID')}`;
  const kembalian = Math.max(0, paid - total);

  const cleanNumber = (value) => {
    const digits = String(value).replace(/\D/g, '');
    return digits ? Number(digits) : 0;
  };

  const handlePaidChange = (event) => {
    const value = event.target.value;
    setPaidInput(value);
    setPaid(cleanNumber(value));
  };

  // If cart is empty (e.g. page refreshed), redirect
  if (cart.length === 0) {
    navigate('/pesan');
    return null;
  }

  const handleConfirm = async () => {
    if (paid < total) {
      alert('Jumlah bayar kurang dari total pesanan!');
      return;
    }
    const trxData = {
      items: cart,
      total: total,
      bayar: paid,
      kembalian: kembalian,
      metode: method,
    };
    const result = await addTransaction(trxData);
    if (result.success) {
      navigate('/struk', {
        state: {
          trx: {
            id: result.id_transaksi,
            id_transaksi: result.id_transaksi,
            date: new Date().toISOString(),
            items: cart,
            total,
            bayar: paid,
            kembalian,
            metode: method,
            kasir: undefined, // Will use user context
          },
        },
      });
    } else {
      alert(result.message || 'Gagal menyimpan transaksi!');
    }
  };

  return (
    <div className="page-enter" style={styles.container}>
      <div className="header-enter" style={styles.topBar}>
        <button style={styles.backBtn} onClick={() => navigate(-1)}>
          <IconChevronLeft size={24} />
        </button>
        <div style={styles.topTitle}>Proses Pembayaran</div>
        <div style={{ width: 36 }} />
      </div>

      <div style={styles.body}>
        <div className="fade-in-up stagger-1" style={styles.summaryCard}>
          <div style={styles.summaryTitle}>
            <IconReceipt size={18} color="#1D9E75" /> Ringkasan Pesanan
          </div>
          {cart.map((item, idx) => (
            <div key={idx} style={styles.sRow}>
              <span>
                {item.nama} x{item.qty}
              </span>
              <span>{formatIDR(item.harga * item.qty)}</span>
            </div>
          ))}
          <hr style={styles.sDivider} />
          <div style={styles.sTotal}>
            <span>Total</span>
            <span style={styles.sTotalVal}>{formatIDR(total)}</span>
          </div>
        </div>

        <div className="fade-in-up stagger-2" style={styles.sectionLabel}>
          Jumlah Bayar
        </div>
        <div className="fade-in-scale stagger-2" style={styles.amountCard}>
          <div style={styles.amountHint}>Uang diterima</div>
          <div style={styles.amountVal}>{formatIDR(paid)}</div>
          <input
            type="text"
            value={paidInput}
            onChange={handlePaidChange}
            placeholder="Masukkan nominal pembayaran"
            style={styles.paidInput}
          />
        </div>

        <div className="fade-in-up stagger-3" style={styles.quickLabel}>
          Nominal Cepat:
        </div>
        <div className="fade-in-up stagger-3" style={styles.quickRow}>
          {[total, 20000, 50000].map((val) => (
            <div
              key={val}
              className="btn-press hover-scale"
              style={paid === val ? styles.quickPillActive : styles.quickPill}
              onClick={() => {
                setPaid(val);
                setPaidInput(val.toString());
              }}
            >
              {val === total ? 'PAS' : `${val / 1000}K`}
            </div>
          ))}
        </div>

        <div className="fade-in-up stagger-4" style={styles.kembalianCard}>
          <div style={styles.kembalianHint}>Kembalian</div>
          <div style={styles.kembalianVal}>{formatIDR(kembalian)}</div>
        </div>

        <div className="fade-in-up stagger-5" style={styles.metodeLabel}>
          Metode Bayar:
        </div>
        <div className="fade-in-up stagger-5" style={styles.metodeRow}>
          <button
            className="btn-press"
            style={method === 'Tunai' ? styles.metodeBtnActive : styles.metodeBtnInactive}
            onClick={() => setMethod('Tunai')}
          >
            <IconCash size={18} /> Tunai
          </button>
          <button
            className="btn-press"
            style={method === 'QRIS' ? styles.metodeBtnActive : styles.metodeBtnInactive}
            onClick={() => setMethod('QRIS')}
          >
            <IconQrcode size={18} /> QRIS
          </button>
        </div>

        <button
          className="btn-press hover-bright fade-in-up stagger-6"
          style={styles.confirmBtn}
          onClick={handleConfirm}
        >
          <IconCheck size={20} /> Konfirmasi Bayar
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: { height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' },
  topBar: {
    background: '#1D9E75',
    padding: '24px 20px 40px',
    borderRadius: '0 0 24px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: '#fff',
  },
  topTitle: { fontSize: '18px', fontWeight: '800' },
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
  body: { padding: '32px 16px 24px', flex: 1, overflowY: 'auto' },
  sectionLabel: { fontSize: '13px', fontWeight: '800', color: '#085041', marginBottom: '10px' },
  summaryCard: {
    background: '#fff',
    borderRadius: '18px',
    padding: '14px 16px',
    marginBottom: '18px',
    border: '1.5px solid #EAE5DA',
  },
  summaryTitle: {
    fontSize: '13px',
    fontWeight: '800',
    color: '#2C2C2A',
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  sRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '12px',
    color: '#5F5E5A',
    fontWeight: '600',
    marginBottom: '6px',
  },
  sDivider: { border: 'none', borderTop: '1px dashed #D3D1C7', margin: '8px 0' },
  sTotal: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '14px',
    fontWeight: '800',
    color: '#2C2C2A',
  },
  sTotalVal: { color: '#1D9E75' },
  amountCard: {
    background: '#fff',
    borderRadius: '18px',
    padding: '14px 16px',
    border: '2px solid #1D9E75',
    marginBottom: '14px',
    textAlign: 'center',
  },
  paidInput: {
    width: '100%',
    marginTop: '10px',
    padding: '12px 14px',
    borderRadius: '14px',
    border: '1.5px solid #D3D1C7',
    fontSize: '14px',
    fontFamily: 'inherit',
    textAlign: 'center',
    outline: 'none',
  },
  amountHint: { fontSize: '11px', fontWeight: '700', color: '#0F6E56', marginBottom: '4px' },
  amountVal: { fontSize: '28px', fontWeight: '800', color: '#1D9E75' },
  quickLabel: { fontSize: '11px', fontWeight: '700', color: '#888780', marginBottom: '8px' },
  quickRow: { display: 'flex', gap: '8px', marginBottom: '16px' },
  quickPill: {
    flex: 1,
    padding: '9px 0',
    borderRadius: '50px',
    background: '#fff',
    border: '1.5px solid #1D9E75',
    fontSize: '12px',
    fontWeight: '800',
    color: '#0F6E56',
    cursor: 'pointer',
    textAlign: 'center',
  },
  quickPillActive: {
    flex: 1,
    padding: '9px 0',
    borderRadius: '50px',
    background: '#1D9E75',
    border: '1.5px solid #1D9E75',
    fontSize: '12px',
    fontWeight: '800',
    color: '#fff',
    cursor: 'pointer',
    textAlign: 'center',
  },
  kembalianCard: {
    background: '#E1F5EE',
    borderRadius: '18px',
    padding: '14px 16px',
    border: '1.5px solid #9FE1CB',
    marginBottom: '18px',
    textAlign: 'center',
  },
  kembalianHint: { fontSize: '11px', fontWeight: '700', color: '#0F6E56', marginBottom: '4px' },
  kembalianVal: { fontSize: '26px', fontWeight: '800', color: '#085041' },
  metodeLabel: { fontSize: '12px', fontWeight: '800', color: '#5F5E5A', marginBottom: '8px' },
  metodeRow: { display: 'flex', gap: '10px', marginBottom: '18px' },
  metodeBtnInactive: {
    flex: 1,
    padding: '11px 0',
    borderRadius: '14px',
    fontFamily: 'inherit',
    fontSize: '13px',
    fontWeight: '800',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    background: '#fff',
    border: '1.5px solid #D3D1C7',
    color: '#888780',
  },
  metodeBtnActive: {
    flex: 1,
    padding: '11px 0',
    borderRadius: '14px',
    fontFamily: 'inherit',
    fontSize: '13px',
    fontWeight: '800',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    background: '#1D9E75',
    border: '2px solid #1D9E75',
    color: '#fff',
  },
  confirmBtn: {
    background: '#E07B3A',
    border: 'none',
    borderRadius: '18px',
    width: '100%',
    padding: '16px',
    fontFamily: 'inherit',
    fontSize: '15px',
    fontWeight: '800',
    color: '#fff',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
  },
};
