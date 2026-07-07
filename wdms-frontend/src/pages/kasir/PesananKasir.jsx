import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';
import {
  IconArrowLeft,
  IconPlus,
  IconClipboardList,
  IconCreditCard,
  IconArrowRight,
} from '@tabler/icons-react';

export default function PesananKasir() {
  const { menus, cart, addToCart, removeFromCart } = useAppContext();
  const navigate = useNavigate();
  const [filter, setFilter] = useState('Semua');

  const filteredMenus = filter === 'Semua' ? menus : menus.filter((m) => m.kategori === filter);

  const cartTotal = cart.reduce((sum, item) => sum + item.harga * item.qty, 0);

  const formatIDR = (num) => `Rp ${num.toLocaleString('id-ID')}`;

  const getEmoji = (name) => {
    if (name.includes('Ayam')) return '🍗';
    if (name.includes('Tempe') || name.includes('Tahu')) return '🍱';
    if (name.includes('Nasi')) return '🍚';
    if (name.includes('Ikan')) return '🐟';
    if (name.includes('Kangkung') || name.includes('Sayur')) return '🥗';
    if (name.includes('Teh') || name.includes('Es')) return '🍹';
    return '🍲';
  };

  return (
    <div className="page-enter" style={styles.container}>
      <div className="header-enter" style={styles.topBar}>
        <div style={styles.topBack} onClick={() => navigate(-1)}>
          <IconArrowLeft size={16} /> Beranda
        </div>
        <div style={styles.topTitle}>Pesanan Baru</div>
      </div>

      <div style={styles.body}>
        <div className="fade-in-up stagger-1" style={styles.filterRow}>
          {['Semua', 'Lauk', 'Sayur', 'Minuman'].map((f) => (
            <button
              key={f}
              style={filter === f ? styles.pillActive : styles.pillInactive}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div style={styles.menuGrid}>
          {filteredMenus.map((menu) => (
            <div
              key={menu.id}
              className="menu-card-enter hover-lift"
              style={menu.status === 'Habis' ? styles.menuCardHabis : styles.menuCard}
            >
              {menu.status !== 'Habis' && (
                <button style={styles.addBtn} onClick={() => addToCart(menu)}>
                  <IconPlus size={14} color="#fff" />
                </button>
              )}
              <div style={menu.status === 'Habis' ? styles.menuImgHabis : styles.menuImg}>
                {getEmoji(menu.nama)}
              </div>
              <div style={menu.status === 'Habis' ? styles.menuNameHabis : styles.menuName}>
                {menu.nama}
              </div>

              {menu.status === 'Habis' ? (
                <div style={styles.habisBadge}>HABIS</div>
              ) : (
                <div style={styles.menuPrice}>{formatIDR(menu.harga)}</div>
              )}
            </div>
          ))}
        </div>

        {cart.length > 0 && (
          <div className="fade-in-up" style={styles.orderCard}>
            <div style={styles.orderTitle}>
              <IconClipboardList size={16} /> Pesanan Saat Ini
            </div>
            {cart.map((item, idx) => (
              <div key={idx} style={styles.orderRow}>
                <div style={styles.orderItemLabel}>
                  <span>
                    {item.nama} x{item.qty}
                  </span>
                  <button
                    type="button"
                    style={styles.removeItemBtn}
                    onClick={() => removeFromCart(item.id)}
                  >
                    Hapus
                  </button>
                </div>
                <span>{formatIDR(item.harga * item.qty)}</span>
              </div>
            ))}
            <hr style={styles.orderDivider} />
            <div style={styles.orderTotal}>
              <span>Total</span>
              <span>{formatIDR(cartTotal)}</span>
            </div>
          </div>
        )}

        <button
          className="btn-press hover-bright fade-in-up"
          style={{ ...styles.payBtn, opacity: cart.length > 0 ? 1 : 0.5 }}
          disabled={cart.length === 0}
          onClick={() => navigate('/bayar')}
        >
          <IconCreditCard size={18} /> Lanjut Bayar <IconArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: { height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' },
  topBar: {
    background: '#1D9E75',
    padding: '14px 18px 40px',
    position: 'relative',
    borderRadius: '0 0 28px 28px',
  },
  topTitle: { fontSize: '18px', fontWeight: '800', color: '#fff', textAlign: 'center' },
  topBack: {
    position: 'absolute',
    left: '16px',
    top: '14px',
    color: 'rgba(255,255,255,0.85)',
    fontSize: '13px',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    cursor: 'pointer',
  },
  body: { padding: '30px 14px 90px', flex: 1, overflowY: 'auto' },
  filterRow: {
    display: 'flex',
    gap: '8px',
    marginBottom: '16px',
    overflowX: 'auto',
    paddingBottom: '2px',
  },
  pillActive: {
    padding: '7px 16px',
    borderRadius: '50px',
    fontSize: '12px',
    fontWeight: '800',
    border: 'none',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    background: '#1D9E75',
    color: '#fff',
    transition: 'all 0.2s ease',
  },
  pillInactive: {
    padding: '7px 16px',
    borderRadius: '50px',
    fontSize: '12px',
    fontWeight: '800',
    border: '1.5px solid #D3D1C7',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    background: '#fff',
    color: '#5F5E5A',
    transition: 'all 0.2s ease',
  },
  menuGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '18px' },
  menuCard: {
    background: '#fff',
    borderRadius: '18px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '6px',
    border: '1.5px solid #EAE5DA',
    position: 'relative',
  },
  menuCardHabis: {
    background: '#FAECE7',
    borderRadius: '18px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '6px',
    border: '1.5px solid #F5C4B3',
    position: 'relative',
  },
  menuImg: {
    width: '56px',
    height: '56px',
    borderRadius: '12px',
    background: '#EAF3DE',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '26px',
  },
  menuImgHabis: {
    width: '56px',
    height: '56px',
    borderRadius: '12px',
    background: '#F5C4B3',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '26px',
  },
  menuName: { fontSize: '12px', fontWeight: '800', color: '#2C2C2A', textAlign: 'center' },
  menuNameHabis: { fontSize: '12px', fontWeight: '800', color: '#993C1D', textAlign: 'center' },
  menuPrice: { fontSize: '11px', fontWeight: '700', color: '#1D9E75' },
  habisBadge: {
    fontSize: '10px',
    fontWeight: '800',
    color: '#993C1D',
    background: '#F5C4B3',
    padding: '2px 10px',
    borderRadius: '50px',
  },
  addBtn: {
    position: 'absolute',
    top: '8px',
    right: '8px',
    width: '22px',
    height: '22px',
    background: '#1D9E75',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    cursor: 'pointer',
    transition: 'transform 0.2s, background 0.2s',
  },
  orderCard: {
    background: '#E1F5EE',
    borderRadius: '18px',
    padding: '14px 16px',
    marginBottom: '14px',
    border: '1.5px solid #9FE1CB',
  },
  orderTitle: {
    fontSize: '13px',
    fontWeight: '800',
    color: '#085041',
    marginBottom: '8px',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  orderRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '12px',
    color: '#0F6E56',
    fontWeight: '600',
    marginBottom: '4px',
    gap: '10px',
    alignItems: 'center',
  },
  orderItemLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  removeItemBtn: {
    background: '#F5C4B3',
    color: '#993C1D',
    border: 'none',
    borderRadius: '12px',
    padding: '4px 10px',
    fontSize: '11px',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'background 0.2s ease',
  },
  orderDivider: { border: 'none', borderTop: '1px dashed #5DCAA5', margin: '8px 0' },
  orderTotal: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '13px',
    color: '#085041',
    fontWeight: '800',
  },
  payBtn: {
    background: '#1D9E75',
    border: 'none',
    borderRadius: '18px',
    width: '100%',
    padding: '16px',
    fontSize: '15px',
    fontWeight: '800',
    color: '#fff',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'inherit',
  },
};
