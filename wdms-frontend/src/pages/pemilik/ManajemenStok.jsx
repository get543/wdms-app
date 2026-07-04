import React, { useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import { IconSearch, IconRefresh } from '@tabler/icons-react';

export default function ManajemenStok() {
  const { menus, updateStok, fetchMenus } = useAppContext();
  const [search, setSearch] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editQty, setEditQty] = useState('');

  const filteredMenus = menus.filter(m =>
    m.nama.toLowerCase().includes(search.toLowerCase())
  );

  const getStatusStyle = (status, stok) => {
    if (status === 'Habis' || stok <= 0) return { bg: '#F5C4B3', text: '#993C1D', label: 'HABIS' };
    if (stok < 10) return { bg: '#FFE4C4', text: '#D85A30', label: 'SEDIKIT' };
    return { bg: '#EAF3DE', text: '#3B6D11', label: 'TERSEDIA' };
  };

  const handleUpdateStok = async (id_menu) => {
    const qty = parseInt(editQty);
    if (isNaN(qty) || qty < 0) { alert('Masukkan jumlah stok yang valid!'); return; }
    const result = await updateStok(id_menu, qty);
    if (result.success) {
      setEditingId(null);
      setEditQty('');
    } else {
      alert(result.message);
    }
  };

  const handleResetAll = async () => {
    if (!confirm('Reset semua stok ke 50 porsi? Ini akan mengubah status semua menu menjadi Tersedia.')) return;
    for (const menu of menus) {
      await updateStok(menu.id_menu, 50);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.headerTitle}>Manajemen Stok</div>
        <div style={styles.searchBox}>
          <IconSearch size={18} color="#888780" />
          <input
            style={styles.searchInput}
            placeholder="Cari menu..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div style={styles.content}>
        {filteredMenus.map(menu => {
          const statusStyle = getStatusStyle(menu.status, menu.stok);
          const isEditing = editingId === menu.id_menu;

          return (
            <div key={menu.id_menu} style={styles.menuCard}>
              <div style={styles.menuInfo}>
                <div style={styles.menuName}>{menu.nama}</div>
                <div style={styles.menuStok}>{menu.stok} porsi tersisa</div>
              </div>

              <div style={styles.actionSide}>
                <div style={{...styles.badge, background: statusStyle.bg, color: statusStyle.text}}>
                  {statusStyle.label}
                </div>

                {isEditing ? (
                  <div style={styles.editRow}>
                    <input
                      type="number"
                      min="0"
                      style={styles.qtyInput}
                      value={editQty}
                      onChange={e => setEditQty(e.target.value)}
                      placeholder="Qty"
                    />
                    <button style={styles.saveBtn} onClick={() => handleUpdateStok(menu.id_menu)}>✓</button>
                    <button style={styles.cancelBtn} onClick={() => setEditingId(null)}>✕</button>
                  </div>
                ) : (
                  <button style={styles.updateBtn} onClick={() => { setEditingId(menu.id_menu); setEditQty(String(menu.stok)); }}>
                    Edit
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div style={styles.footer}>
        <button style={styles.resetBtn} onClick={handleResetAll}>
          <IconRefresh size={18} /> Reset Semua Stok (Awal Hari)
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: { height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' },
  header: { background: '#E07B3A', padding: '24px 20px 40px', borderRadius: '0 0 24px 24px' },
  headerTitle: { fontSize: '18px', fontWeight: '800', color: '#fff', textAlign: 'center', marginBottom: '16px' },
  searchBox: { display: 'flex', alignItems: 'center', background: '#fff', padding: '10px 14px', borderRadius: '12px', gap: '8px' },
  searchInput: { border: 'none', outline: 'none', flex: 1, fontSize: '14px', fontFamily: 'inherit' },
  content: { padding: '20px 16px 100px', flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '-20px' },
  menuCard: { background: '#fff', borderRadius: '16px', padding: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1.5px solid #EAE5DA' },
  menuInfo: { flex: 1 },
  menuName: { fontSize: '14px', fontWeight: '800', color: '#2C2C2A', marginBottom: '4px' },
  menuStok: { fontSize: '12px', color: '#888780', fontWeight: '600' },
  actionSide: { display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' },
  badge: { fontSize: '10px', fontWeight: '800', padding: '4px 8px', borderRadius: '6px' },
  updateBtn: { background: '#F1EFE8', border: 'none', borderRadius: '8px', padding: '6px 12px', fontSize: '11px', fontWeight: '800', color: '#5F5E5A', cursor: 'pointer', fontFamily: 'inherit' },
  editRow: { display: 'flex', gap: '4px', alignItems: 'center' },
  qtyInput: { width: '52px', padding: '6px 8px', borderRadius: '8px', border: '1.5px solid #D3D1C7', fontSize: '13px', fontFamily: 'inherit', textAlign: 'center' },
  saveBtn: { background: '#1D9E75', color: '#fff', border: 'none', borderRadius: '8px', padding: '6px 8px', cursor: 'pointer', fontWeight: '800' },
  cancelBtn: { background: '#F5C4B3', color: '#993C1D', border: 'none', borderRadius: '8px', padding: '6px 8px', cursor: 'pointer', fontWeight: '800' },
  footer: { position: 'absolute', bottom: '80px', left: '16px', right: '16px' },
  resetBtn: { width: '100%', background: '#fff', border: '1.5px solid #E07B3A', color: '#E07B3A', padding: '14px', borderRadius: '14px', fontSize: '14px', fontWeight: '800', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer', fontFamily: 'inherit' }
};
