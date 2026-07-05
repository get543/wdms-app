import React, { useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import {
  IconSearch,
  IconDotsVertical,
  IconPlus,
  IconX,
  IconCheck,
  IconChevronDown,
  IconLoader2,
  IconPencil,
  IconTrash,
} from '@tabler/icons-react';

const KATEGORI_OPTIONS = ['Lauk', 'Sayuran', 'Minuman'];
const STATUS_OPTIONS = ['Tersedia', 'Habis'];

export default function KelolaMenu() {
  const { menus, addMenu, updateMenuItem, deleteMenuItem } = useAppContext();
  const [search, setSearch] = useState('');

  // Modal & Form States
  const [showFormModal, setShowFormModal] = useState(false);
  const [editingMenu, setEditingMenu] = useState(null); // null = mode tambah, object = mode edit
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  // Dropdown States
  const [showKategoriDropdown, setShowKategoriDropdown] = useState(false);
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [activeActionId, setActiveActionId] = useState(null); // ID menu yang action-nya terbuka

  const [formData, setFormData] = useState({
    nama_menu: '',
    kategori: 'Lauk',
    harga_jual: '',
    stok: '',
    status: 'Tersedia',
  });

  const filteredMenus = menus.filter((m) => m.nama.toLowerCase().includes(search.toLowerCase()));

  const formatIDR = (num) => `Rp ${num.toLocaleString('id-ID')}`;

  // ── Handlers ──────────────────────────────────────────
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: null }));
  };

  const handleHargaChange = (value) => {
    const numeric = value.replace(/\D/g, '');
    setFormData((prev) => ({ ...prev, harga_jual: numeric }));
    if (errors.harga_jual) setErrors((prev) => ({ ...prev, harga_jual: null }));
  };

  const handleStokChange = (value) => {
    const numeric = value.replace(/\D/g, '');
    setFormData((prev) => ({ ...prev, stok: numeric }));
    if (errors.stok) setErrors((prev) => ({ ...prev, stok: null }));
  };

  const formatNumberInput = (val) => {
    if (!val) return '';
    return parseInt(val, 10).toLocaleString('id-ID');
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.nama_menu.trim()) newErrors.nama_menu = 'Nama menu wajib diisi';
    if (!formData.harga_jual || parseInt(formData.harga_jual, 10) <= 0)
      newErrors.harga_jual = 'Harga wajib diisi dan lebih dari 0';
    if (!formData.stok && formData.stok !== '0') newErrors.stok = 'Stok wajib diisi';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ── CRUD Handlers ─────────────────────────────────────
  const openAddModal = () => {
    setEditingMenu(null);
    setFormData({
      nama_menu: '',
      kategori: 'Lauk',
      harga_jual: '',
      stok: '',
      status: 'Tersedia',
    });
    setErrors({});
    setShowFormModal(true);
    setActiveActionId(null);
  };

  const openEditModal = (menu) => {
    setEditingMenu(menu);
    setFormData({
      nama_menu: menu.nama_menu || menu.nama,
      kategori: menu.kategori,
      harga_jual: String(menu.harga_jual || menu.harga),
      stok: String(menu.stok),
      status: menu.status,
    });
    setErrors({});
    setShowFormModal(true);
    setActiveActionId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const payload = {
      nama_menu: formData.nama_menu.trim(),
      kategori: formData.kategori,
      harga_jual: parseInt(formData.harga_jual, 10),
      stok: parseInt(formData.stok, 10),
      status: formData.status,
    };

    let result;
    if (editingMenu) {
      result = await updateMenuItem(editingMenu.id_menu || editingMenu.id, payload);
    } else {
      result = await addMenu(payload);
    }

    setIsSubmitting(false);

    if (result.success) {
      resetAndCloseModal();
    } else {
      alert(result.message || 'Gagal menyimpan menu');
    }
  };

  const handleDelete = async (menu) => {
    if (window.confirm(`Hapus menu "${menu.nama}"?`)) {
      const result = await deleteMenuItem(menu.id_menu || menu.id);
      if (!result.success) {
        alert(result.message || 'Gagal menghapus menu');
      }
    }
    setActiveActionId(null);
  };

  const resetAndCloseModal = () => {
    setShowFormModal(false);
    setEditingMenu(null);
    setFormData({
      nama_menu: '',
      kategori: 'Lauk',
      harga_jual: '',
      stok: '',
      status: 'Tersedia',
    });
    setErrors({});
    setShowKategoriDropdown(false);
    setShowStatusDropdown(false);
  };

  // ── Render ────────────────────────────────────────────
  return (
    <div className="page-enter" style={styles.container}>
      {/* ── Header ── */}
      <div className="header-enter" style={styles.header}>
        <div style={styles.headerTitle}>Kelola Menu</div>
        <div style={styles.searchBox}>
          <IconSearch size={18} color="#888780" />
          <input
            style={styles.searchInput}
            placeholder="Cari menu..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* ── Menu List ── */}
      <div style={styles.content}>
        {filteredMenus.length === 0 && (
          <div style={styles.emptyState}>
            <div style={{ fontSize: '40px', marginBottom: '8px' }}>📋</div>
            <div style={{ fontSize: '14px', color: '#888780', fontWeight: '600' }}>
              {search ? 'Menu tidak ditemukan' : 'Belum ada menu'}
            </div>
          </div>
        )}
        {filteredMenus.map((menu, i) => (
          <div
            key={menu.id}
            className={`menu-card-enter stagger-${Math.min(i + 1, 8)}`}
            style={{
              ...styles.menuCard,
              ...(activeActionId === menu.id ? styles.menuCardActive : {}),
            }}
          >
            <div style={styles.menuImg}>🍲</div>
            <div style={styles.menuInfo}>
              <div style={styles.menuName}>{menu.nama}</div>
              <div style={styles.menuCategory}>{menu.kategori}</div>
              <div style={styles.menuPrice}>{formatIDR(menu.harga)}</div>
            </div>
            <div style={styles.menuActionWrapper}>
              <div style={menu.status === 'Habis' ? styles.badgeHabis : styles.badgeTersedia}>
                {menu.status}
              </div>

              {/* Action Button (3 dots) */}
              <div style={styles.actionContainer}>
                <IconDotsVertical
                  size={20}
                  color="#888780"
                  className="btn-press"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setActiveActionId(activeActionId === menu.id ? null : menu.id)}
                />

                {/* Action Dropdown */}
                {activeActionId === menu.id && (
                  <>
                    <div style={styles.actionOverlay} onClick={() => setActiveActionId(null)} />
                    <div style={styles.actionDropdown}>
                      <button style={styles.actionItem} onClick={() => openEditModal(menu)}>
                        <IconPencil size={14} /> Edit Menu
                      </button>
                      <button
                        style={{ ...styles.actionItem, color: '#C94040' }}
                        onClick={() => handleDelete(menu)}
                      >
                        <IconTrash size={14} /> Hapus Menu
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── FAB ── */}
      <button className="hover-lift btn-press pulse-anim" style={styles.fab} onClick={openAddModal}>
        <IconPlus size={24} />
      </button>

      {/* ── Modal Tambah/Edit Menu ── */}
      {showFormModal && (
        <div className="modal-overlay-enter" style={styles.modalOverlay} onClick={resetAndCloseModal}>
          <div className="modal-content-enter" style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <div style={styles.modalTitle}>{editingMenu ? 'Edit Menu' : 'Tambah Menu Baru'}</div>
              <button style={styles.closeBtn} onClick={resetAndCloseModal}>
                <IconX size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} style={styles.modalBody}>
              {/* Nama Menu */}
              <div style={styles.formGroup}>
                <label style={styles.label}>
                  Nama Menu <span style={{ color: '#C94040' }}>*</span>
                </label>
                <input
                  type="text"
                  style={{ ...styles.input, ...(errors.nama_menu ? styles.inputError : {}) }}
                  placeholder="Contoh: Lele Goreng"
                  value={formData.nama_menu}
                  onChange={(e) => handleInputChange('nama_menu', e.target.value)}
                  autoFocus
                />
                {errors.nama_menu && <div style={styles.errorText}>{errors.nama_menu}</div>}
              </div>

              {/* Kategori */}
              <div style={styles.formGroup}>
                <label style={styles.label}>
                  Kategori <span style={{ color: '#C94040' }}>*</span>
                </label>
                <div style={styles.selectWrapper}>
                  <button
                    type="button"
                    style={styles.selectBtn}
                    onClick={() => {
                      setShowStatusDropdown(false);
                      setShowKategoriDropdown(!showKategoriDropdown);
                    }}
                  >
                    {formData.kategori}
                    <IconChevronDown size={16} color="#888780" />
                  </button>
                  {showKategoriDropdown && (
                    <div style={styles.dropdown}>
                      {KATEGORI_OPTIONS.map((kat) => (
                        <button
                          key={kat}
                          type="button"
                          style={{
                            ...styles.dropdownItem,
                            ...(formData.kategori === kat ? styles.dropdownItemActive : {}),
                          }}
                          onClick={() => {
                            handleInputChange('kategori', kat);
                            setShowKategoriDropdown(false);
                          }}
                        >
                          {kat}
                          {formData.kategori === kat && <IconCheck size={14} color="#4361EE" />}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Harga Jual */}
              <div style={styles.formGroup}>
                <label style={styles.label}>
                  Harga Jual (Rp) <span style={{ color: '#C94040' }}>*</span>
                </label>
                <div style={styles.hargaWrapper}>
                  <span style={styles.hargaPrefix}>Rp</span>
                  <input
                    type="text"
                    style={{
                      ...styles.input,
                      ...styles.hargaInput,
                      ...(errors.harga_jual ? styles.inputError : {}),
                    }}
                    placeholder="0"
                    value={formatNumberInput(formData.harga_jual)}
                    onChange={(e) => handleHargaChange(e.target.value)}
                  />
                </div>
                {errors.harga_jual && <div style={styles.errorText}>{errors.harga_jual}</div>}
              </div>

              {/* Stok */}
              <div style={styles.formGroup}>
                <label style={styles.label}>
                  Stok <span style={{ color: '#C94040' }}>*</span>
                </label>
                <input
                  type="text"
                  style={{ ...styles.input, ...(errors.stok ? styles.inputError : {}) }}
                  placeholder="Contoh: 20"
                  value={formatNumberInput(formData.stok)}
                  onChange={(e) => handleStokChange(e.target.value)}
                />
                {errors.stok && <div style={styles.errorText}>{errors.stok}</div>}
              </div>

              {/* Status */}
              <div style={styles.formGroup}>
                <label style={styles.label}>Status</label>
                <div style={styles.selectWrapper}>
                  <button
                    type="button"
                    style={styles.selectBtn}
                    onClick={() => {
                      setShowKategoriDropdown(false);
                      setShowStatusDropdown(!showStatusDropdown);
                    }}
                  >
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      <span
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: formData.status === 'Tersedia' ? '#3B6D11' : '#993C1D',
                        }}
                      />
                      {formData.status}
                    </span>
                    <IconChevronDown size={16} color="#888780" />
                  </button>
                  {showStatusDropdown && (
                    <div style={styles.dropdown}>
                      {STATUS_OPTIONS.map((st) => (
                        <button
                          key={st}
                          type="button"
                          style={{
                            ...styles.dropdownItem,
                            ...(formData.status === st ? styles.dropdownItemActive : {}),
                          }}
                          onClick={() => {
                            handleInputChange('status', st);
                            setShowStatusDropdown(false);
                          }}
                        >
                          <span
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                          >
                            <span
                              style={{
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                background: st === 'Tersedia' ? '#3B6D11' : '#993C1D',
                              }}
                            />
                            {st}
                          </span>
                          {formData.status === st && <IconCheck size={14} color="#4361EE" />}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Buttons */}
              <div style={styles.btnRow}>
                <button
                  type="button"
                  style={styles.cancelBtn}
                  onClick={resetAndCloseModal}
                  disabled={isSubmitting}
                >
                  Batal
                </button>
                <button type="submit" style={styles.submitBtn} disabled={isSubmitting}>
                  {isSubmitting ? (
                    <IconLoader2 size={16} style={{ animation: 'spin 1s linear infinite' }} />
                  ) : editingMenu ? (
                    <IconCheck size={16} />
                  ) : (
                    <IconPlus size={16} />
                  )}
                  {isSubmitting ? 'Menyimpan...' : editingMenu ? 'Simpan Perubahan' : 'Tambah Menu'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Styles ──────────────────────────────────────────────
const styles = {
  container: { height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' },
  header: { background: '#C94040', padding: '24px 20px 40px', borderRadius: '0 0 24px 24px' },
  headerTitle: {
    fontSize: '18px',
    fontWeight: '800',
    color: '#fff',
    textAlign: 'center',
    marginBottom: '16px',
  },
  searchBox: {
    display: 'flex',
    alignItems: 'center',
    background: '#fff',
    padding: '10px 14px',
    borderRadius: '12px',
    gap: '8px',
  },
  searchInput: {
    border: 'none',
    outline: 'none',
    flex: 1,
    fontSize: '14px',
    fontFamily: 'inherit',
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
  emptyState: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 0',
  },
  menuCard: {
    background: '#fff',
    borderRadius: '16px',
    padding: '12px',
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    border: '1.5px solid #EAE5DA',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    position: 'relative',
    overflow: 'visible',
    zIndex: 1,
  },
  menuCardActive: {
    zIndex: 20,
    boxShadow: '0 10px 24px rgba(0, 0, 0, 0.12)',
  },
  menuImg: {
    width: '48px',
    height: '48px',
    borderRadius: '10px',
    background: '#F1EFE8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
  },
  menuInfo: { flex: 1 },
  menuName: { fontSize: '14px', fontWeight: '800', color: '#2C2C2A' },
  menuCategory: { fontSize: '11px', color: '#888780', fontWeight: '600', marginBottom: '4px' },
  menuPrice: { fontSize: '12px', fontWeight: '700', color: '#C94040' },

  // Action Wrapper & Badges
  menuActionWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: '10px',
    position: 'relative',
  },
  badgeTersedia: {
    fontSize: '10px',
    fontWeight: '700',
    background: '#EAF3DE',
    color: '#3B6D11',
    padding: '2px 8px',
    borderRadius: '4px',
  },
  badgeHabis: {
    fontSize: '10px',
    fontWeight: '700',
    background: '#F5C4B3',
    color: '#993C1D',
    padding: '2px 8px',
    borderRadius: '4px',
  },

  // Action Dropdown (3-dots)
  actionContainer: { position: 'relative' },
  actionOverlay: { position: 'fixed', inset: 0, zIndex: 9 }, // Untuk menutup dropdown saat klik luar
  actionDropdown: {
    position: 'absolute',
    top: 'calc(100% + 6px)',
    right: 0,
    background: '#fff',
    border: '1.5px solid #EAE5DA',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
    zIndex: 50,
    overflow: 'hidden',
    minWidth: '160px',
  },
  actionItem: {
    width: '100%',
    padding: '10px 14px',
    border: 'none',
    background: 'transparent',
    fontSize: '13px',
    fontFamily: 'inherit',
    color: '#2C2C2A',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    textAlign: 'left',
    fontWeight: '600',
  },

  fab: {
    position: 'absolute',
    bottom: '80px',
    right: '16px',
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    background: '#4361EE',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(67, 97, 238, 0.4)',
    zIndex: 30,
  },

  // ── Modal ──
  modalOverlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.45)',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    zIndex: 9999,
  },
  modalContent: {
    background: '#fff',
    width: '100%',
    maxWidth: '480px',
    maxHeight: '92vh',
    borderRadius: '24px 24px 0 0',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  modalHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 20px 12px',
    borderBottom: '1px solid #EAE5DA',
  },
  modalTitle: { fontSize: '17px', fontWeight: '800', color: '#2C2C2A' },
  closeBtn: {
    background: '#F1EFE8',
    border: 'none',
    borderRadius: '10px',
    width: '36px',
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: '#2C2C2A',
  },
  modalBody: {
    padding: '20px',
    overflowY: 'auto',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },

  // ── Form ──
  formGroup: { display: 'flex', flexDirection: 'column', gap: '6px' },
  label: { fontSize: '13px', fontWeight: '700', color: '#2C2C2A' },
  input: {
    border: '1.5px solid #EAE5DA',
    borderRadius: '12px',
    padding: '12px 14px',
    fontSize: '14px',
    fontFamily: 'inherit',
    outline: 'none',
    background: '#FAFAF8',
    color: '#2C2C2A',
    transition: 'border-color 0.2s',
  },
  inputError: { borderColor: '#C94040' },
  errorText: { fontSize: '11px', color: '#C94040', fontWeight: '600' },

  // ── Select / Dropdown ──
  selectWrapper: { position: 'relative' },
  selectBtn: {
    width: '100%',
    border: '1.5px solid #EAE5DA',
    borderRadius: '12px',
    padding: '12px 14px',
    fontSize: '14px',
    fontFamily: 'inherit',
    background: '#FAFAF8',
    color: '#2C2C2A',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
    outline: 'none',
  },
  dropdown: {
    position: 'absolute',
    top: 'calc(100% + 4px)',
    left: 0,
    right: 0,
    background: '#fff',
    border: '1.5px solid #EAE5DA',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
    zIndex: 10,
    overflow: 'hidden',
  },
  dropdownItem: {
    width: '100%',
    padding: '10px 14px',
    border: 'none',
    background: 'transparent',
    fontSize: '14px',
    fontFamily: 'inherit',
    color: '#2C2C2A',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlign: 'left',
  },
  dropdownItemActive: { background: '#EEF1FF', fontWeight: '700', color: '#4361EE' },

  // ── Harga ──
  hargaWrapper: {
    display: 'flex',
    alignItems: 'center',
    border: '1.5px solid #EAE5DA',
    borderRadius: '12px',
    background: '#FAFAF8',
    overflow: 'hidden',
  },
  hargaPrefix: {
    padding: '0 0 0 14px',
    fontSize: '14px',
    fontWeight: '700',
    color: '#888780',
    userSelect: 'none',
  },
  hargaInput: { border: 'none', borderRadius: 0 },

  // ── Buttons ──
  btnRow: { display: 'flex', gap: '10px', paddingTop: '4px', paddingBottom: '10px' },
  cancelBtn: {
    flex: 1,
    padding: '13px',
    borderRadius: '14px',
    border: '1.5px solid #EAE5DA',
    background: '#fff',
    color: '#2C2C2A',
    fontSize: '14px',
    fontWeight: '700',
    fontFamily: 'inherit',
    cursor: 'pointer',
  },
  submitBtn: {
    flex: 1,
    padding: '13px',
    borderRadius: '14px',
    border: 'none',
    background: '#4361EE',
    color: '#fff',
    fontSize: '14px',
    fontWeight: '700',
    fontFamily: 'inherit',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    boxShadow: '0 4px 12px rgba(67, 97, 238, 0.3)',
  },
};
