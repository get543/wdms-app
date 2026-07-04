import React, { useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import { IconSearch, IconDotsVertical, IconPlus } from '@tabler/icons-react';

export default function KelolaMenu() {
  const { menus } = useAppContext();
  const [search, setSearch] = useState('');

  const filteredMenus = menus.filter(m => m.nama.toLowerCase().includes(search.toLowerCase()));

  const formatIDR = (num) => `Rp ${num.toLocaleString('id-ID')}`;

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.headerTitle}>Kelola Menu</div>
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
        {filteredMenus.map(menu => (
          <div key={menu.id} style={styles.menuCard}>
            <div style={styles.menuImg}>🍲</div>
            <div style={styles.menuInfo}>
              <div style={styles.menuName}>{menu.nama}</div>
              <div style={styles.menuCategory}>{menu.kategori}</div>
              <div style={styles.menuPrice}>{formatIDR(menu.harga)}</div>
            </div>
            <div style={styles.menuAction}>
              <div style={menu.status === 'Habis' ? styles.badgeHabis : styles.badgeTersedia}>
                {menu.status}
              </div>
              <IconDotsVertical size={20} color="#888780" style={{cursor: 'pointer'}} />
            </div>
          </div>
        ))}
      </div>

      <button style={styles.fab}>
        <IconPlus size={24} />
      </button>
    </div>
  );
}

const styles = {
  container: { height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' },
  header: { background: '#C94040', padding: '24px 20px 40px', borderRadius: '0 0 24px 24px' },
  headerTitle: { fontSize: '18px', fontWeight: '800', color: '#fff', textAlign: 'center', marginBottom: '16px' },
  searchBox: { display: 'flex', alignItems: 'center', background: '#fff', padding: '10px 14px', borderRadius: '12px', gap: '8px' },
  searchInput: { border: 'none', outline: 'none', flex: 1, fontSize: '14px', fontFamily: 'inherit' },
  content: { padding: '20px 16px 80px', flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '-20px' },
  menuCard: { background: '#fff', borderRadius: '16px', padding: '12px', display: 'flex', gap: '12px', alignItems: 'center', border: '1.5px solid #EAE5DA' },
  menuImg: { width: '48px', height: '48px', borderRadius: '10px', background: '#F1EFE8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' },
  menuInfo: { flex: 1 },
  menuName: { fontSize: '14px', fontWeight: '800', color: '#2C2C2A' },
  menuCategory: { fontSize: '11px', color: '#888780', fontWeight: '600', marginBottom: '4px' },
  menuPrice: { fontSize: '12px', fontWeight: '700', color: '#C94040' },
  menuAction: { display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'space-between', height: '100%', gap: '10px' },
  badgeTersedia: { fontSize: '10px', fontWeight: '700', background: '#EAF3DE', color: '#3B6D11', padding: '2px 8px', borderRadius: '4px' },
  badgeHabis: { fontSize: '10px', fontWeight: '700', background: '#F5C4B3', color: '#993C1D', padding: '2px 8px', borderRadius: '4px' },
  fab: { position: 'absolute', bottom: '80px', right: '16px', width: '56px', height: '56px', borderRadius: '50%', background: '#4361EE', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', cursor: 'pointer', boxShadow: '0 4px 12px rgba(67, 97, 238, 0.4)' }
};
