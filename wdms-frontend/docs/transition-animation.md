# Animasi transisi semua komponen dan halaman

**Session ID:** ses_0ccf1e931ffeak7OBzrnJ0FMHz
**Created:** 7/5/2026, 11:13:09 PM
**Updated:** 7/5/2026, 11:16:13 PM

---

## User

buat implementasi animasi pada seluruh bagian dari website, animasi transisi pada semua komponen. jika css terlalu banyak, bisa dibuat dalam file terpisah untuk css global. contoh css yang sudah berjalan sekarang untuk animasi ada di file src/index.css halaman web ada pada src/pages komponen ada pada src/components

---

## Assistant (Build · Big Pickle · 5.8s)

_Thinking:_

The user wants me to implement animations across the entire website - transitions and animations on all components. They want me to look at the existing CSS animation in `src/index.css` and the pages/components are in `src/pages` and `src/components`.

Let me first explore the codebase to understand the structure, then implement animations.

**Tool: read**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src"
}
```

**Output:**
```
<path>E:\UDIN\Kuliah\Mata Kuliah\Rekayasa Perangkat Lunak\Tugas 6\wdms-app\wdms-frontend\src</path>
<type>directory</type>
<entries>
App.css
App.jsx
assets/
components/
context/
data/
index.css
main.jsx
pages/
services/

(10 entries)
</entries>
```

**Tool: read**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\index.css"
}
```

**Output:**
```
<path>E:\UDIN\Kuliah\Mata Kuliah\Rekayasa Perangkat Lunak\Tugas 6\wdms-app\wdms-frontend\src\index.css</path>
<type>file</type>
<content>
1: @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');
2: 
3: * {
4:   box-sizing: border-box;
5:   margin: 0;
6:   padding: 0;
7: }
8: 
9: body {
10:   font-family: 'Nunito', sans-serif;
11:   background-color: #313130; /* Background color outside the app container */
12:   display: flex;
13:   align-items: center;
14:   justify-content: center;
15:   min-height: 100vh;
16:   width: 100%;
17:   height: 100%;
18:   margin: 0;
19: }
20: 
21: #root {
22:   width: 100%;
23:   height: 100%;
24:   margin: 0;
25:   display: flex;
26:   align-items: center;
27:   justify-content: center;
28: }
29: 
30: /* App Container wrapper */
31: .app-container {
32:   background: #f5f0e8;
33:   width: 100%;
34:   /* max-width: 360px; Slight tweak from 320px for better modern phone size but still mobile */
35:   height: 100dvh;
36:   /* max-height: 800px; For desktop viewing */
37:   margin: 0 auto;
38:   /* border-radius: 0; Default 0 for mobile, add border radius on desktop if needed via media query */
39:   overflow: hidden;
40:   display: flex;
41:   flex-direction: column;
42:   position: relative;
43:   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
44: }
45: 
46: @media (min-width: 400px) {
47:   .app-container {
48:     height: 100vh;
49:     /* border-radius: 32px; */
50:   }
51: }
52: 
53: /* Scrollbar hiding for cleaner UI */
54: ::-webkit-scrollbar {
55:   display: none;
56: }
57: 
58: /* ANIMASI */
59: @keyframes fadeIn {
60:   from {
61:     opacity: 0;
62:   }
63:   to {
64:     opacity: 1;
65:   }
66: }
67: 
68: @keyframes slideUp {
69:   from {
70:     transform: translateY(100%);
71:   }
72:   to {
73:     transform: translateY(0);
74:   }
75: }
76: 
77: @keyframes spin {
78:   from {
79:     transform: rotate(0deg);
80:   }
81:   to {
82:     transform: rotate(360deg);
83:   }
84: }

(End of file - total 84 lines)
</content>
```

---

## Assistant (Build · Big Pickle · 2.9s)

_Thinking:_

Let me explore the components and pages directories to understand the structure.

**Tool: read**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\components"
}
```

**Output:**
```
<path>E:\UDIN\Kuliah\Mata Kuliah\Rekayasa Perangkat Lunak\Tugas 6\wdms-app\wdms-frontend\src\components</path>
<type>directory</type>
<entries>
BottomNav.jsx

(1 entries)
</entries>
```

**Tool: read**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages"
}
```

**Output:**
```
<path>E:\UDIN\Kuliah\Mata Kuliah\Rekayasa Perangkat Lunak\Tugas 6\wdms-app\wdms-frontend\src\pages</path>
<type>directory</type>
<entries>
kasir/
pemilik/
shared/

(3 entries)
</entries>
```

---

## Assistant (Build · Big Pickle · 3.6s)

_Thinking:_

Let me explore deeper into the pages directory.

**Tool: read**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\kasir"
}
```

**Output:**
```
<path>E:\UDIN\Kuliah\Mata Kuliah\Rekayasa Perangkat Lunak\Tugas 6\wdms-app\wdms-frontend\src\pages\kasir</path>
<type>directory</type>
<entries>
DashboardKasir.jsx
PesananKasir.jsx
ProsesPembayaran.jsx
RiwayatTransaksi.jsx
StrukPembayaran.jsx

(5 entries)
</entries>
```

**Tool: read**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\pemilik"
}
```

**Output:**
```
<path>E:\UDIN\Kuliah\Mata Kuliah\Rekayasa Perangkat Lunak\Tugas 6\wdms-app\wdms-frontend\src\pages\pemilik</path>
<type>directory</type>
<entries>
DashboardPemilik.jsx
KelolaMenu.jsx
LaporanPenjualan.jsx
ManajemenStok.jsx

(4 entries)
</entries>
```

**Tool: read**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\shared"
}
```

**Output:**
```
<path>E:\UDIN\Kuliah\Mata Kuliah\Rekayasa Perangkat Lunak\Tugas 6\wdms-app\wdms-frontend\src\pages\shared</path>
<type>directory</type>
<entries>
Login.jsx
Pengaturan.jsx

(2 entries)
</entries>
```

**Tool: read**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\components\\BottomNav.jsx"
}
```

**Output:**
```
<path>E:\UDIN\Kuliah\Mata Kuliah\Rekayasa Perangkat Lunak\Tugas 6\wdms-app\wdms-frontend\src\components\BottomNav.jsx</path>
<type>file</type>
<content>
1: import React from 'react';
2: import { NavLink, useLocation } from 'react-router-dom';
3: import {
4:   IconHome,
5:   IconToolsKitchen2,
6:   IconChartLine,
7:   IconClipboardList,
8:   IconHistory,
9:   IconSettings,
10:   IconBuildingWarehouse,
11: } from '@tabler/icons-react';
12: import { useAppContext } from '../context/AppContext';
13: 
14: export default function BottomNav() {
15:   const { user } = useAppContext();
16:   const location = useLocation();
17: 
18:   // Don't show on login page, payment, or receipt
19:   if (!user || ['/', '/bayar', '/struk'].includes(location.pathname)) return null;
20: 
21:   return (
22:     <div style={styles.navContainer}>
23:       {user.role === 'Pemilik' ? (
24:         <>
25:           <NavItem to="/dashboard-pemilik" icon={<IconHome />} label="Beranda" />
26:           <NavItem to="/stok" icon={<IconBuildingWarehouse />} label="Kelola Stok" />
27:           <NavItem to="/menu" icon={<IconToolsKitchen2 />} label="Menu" />
28:           <NavItem to="/laporan" icon={<IconChartLine />} label="Laporan" />
29:           <NavItem to="/pengaturan" icon={<IconSettings />} label="Pengaturan" />
30:         </>
31:       ) : (
32:         <>
33:           <NavItem to="/dashboard-kasir" icon={<IconHome />} label="Beranda" />
34:           <NavItem to="/pesan" icon={<IconClipboardList />} label="Pesan" />
35:           <NavItem to="/riwayat" icon={<IconHistory />} label="Riwayat" />
36:           <NavItem to="/pengaturan" icon={<IconSettings />} label="Pengaturan" />
37:         </>
38:       )}
39:     </div>
40:   );
41: }
42: 
43: function NavItem({ to, icon, label }) {
44:   return (
45:     <NavLink
46:       to={to}
47:       style={({ isActive }) => ({
48:         ...styles.navItem,
49:         color: isActive ? '#C94040' : '#B4B2A9',
50:       })}
51:     >
52:       {({ isActive }) => (
53:         <>
54:           {React.cloneElement(icon, { size: 22, color: isActive ? '#C94040' : '#B4B2A9' })}
55:           {isActive && <div style={styles.activeDot} />}
56:           <span style={styles.label}>{label}</span>
57:         </>
58:       )}
59:     </NavLink>
60:   );
61: }
62: 
63: const styles = {
64:   navContainer: {
65:     position: 'absolute',
66:     bottom: 0,
67:     left: 0,
68:     right: 0,
69:     background: '#fff',
70:     borderRadius: '0',
71:     padding: '12px 0 16px',
72:     display: 'flex',
73:     justifyContent: 'space-around',
74:     borderTop: '0.5px solid #e0dbd0',
75:     zIndex: 10,
76:   },
77:   navItem: {
78:     display: 'flex',
79:     flexDirection: 'column',
80:     alignItems: 'center',
81:     gap: '4px',
82:     cursor: 'pointer',
83:     textDecoration: 'none',
84:   },
85:   label: {
86:     fontSize: '10px',
87:     fontWeight: '700',
88:   },
89:   activeDot: {
90:     width: '4px',
91:     height: '4px',
92:     borderRadius: '50%',
93:     background: '#C94040',
94:     marginTop: '-2px',
95:   },
96: };

(End of file - total 96 lines)
</content>
```

---

## Assistant (Build · Big Pickle · 6.7s)

_Thinking:_

Let me read all the page files to understand the structure and then implement animations.

Let me read all the page files to understand the full structure.

**Tool: read**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\kasir\\DashboardKasir.jsx"
}
```

**Output:**
```
<path>E:\UDIN\Kuliah\Mata Kuliah\Rekayasa Perangkat Lunak\Tugas 6\wdms-app\wdms-frontend\src\pages\kasir\DashboardKasir.jsx</path>
<type>file</type>
<content>
1: import React from 'react';
2: import { useNavigate } from 'react-router-dom';
3: import { useAppContext } from '../../context/AppContext';
4: import { IconClipboardList, IconHistory } from '@tabler/icons-react';
5: 
6: export default function DashboardKasir() {
7:   const { user, transactions } = useAppContext();
8:   const navigate = useNavigate();
9: 
10:   const today = new Date().toISOString().split('T')[0];
11:   const displayName = user?.nama || user?.name || 'Kasir';
12: 
13:   const myTrx = (transactions || []).filter((t) => {
14:     const trxDate = t?.tanggal_transaksi || t?.date || t?.created_at || '';
15:     const normalizedDate = typeof trxDate === 'string' ? trxDate.split('T')[0] : '';
16:     const kasirName = t?.kasir || '';
17:     const currentUserName = user?.nama || user?.name || '';
18: 
19:     return normalizedDate === today && kasirName === currentUserName;
20:   });
21: 
22:   return (
23:     <div style={styles.container}>
24:       <div style={styles.header}>
25:         <div style={styles.headerTitle}>WDMS Kasir</div>
26:         <div style={styles.headerGreeting}>Halo, {displayName.split(' ')[0]}!</div>
27:         <div style={styles.headerDate}>
28:           {new Date().toLocaleDateString('id-ID', {
29:             weekday: 'long',
30:             year: 'numeric',
31:             month: 'long',
32:             day: 'numeric',
33:           })}
34:         </div>
35:         <div style={styles.avatar}>👩‍🍳</div>
36:       </div>
37: 
38:       <div style={styles.content}>
39:         <div style={styles.statsCard}>
40:           <div style={styles.statLabel}>Total Transaksi Saya Hari Ini</div>
41:           <div style={styles.statValue}>
42:             {myTrx.length} <span style={styles.statSub}>pesanan</span>
43:           </div>
44:         </div>
45: 
46:         <div style={styles.quickGrid}>
47:           <button
48:             style={{ ...styles.quickBtn, background: '#1D9E75' }}
49:             onClick={() => navigate('/pesan')}
50:           >
51:             <div style={{ color: '#fff' }}>
52:               <IconClipboardList size={32} />
53:             </div>
54:             <div style={styles.quickLabel}>Buat Pesanan Baru</div>
55:           </button>
56: 
57:           <button
58:             style={{ ...styles.quickBtn, background: '#E07B3A' }}
59:             onClick={() => navigate('/riwayat')}
60:           >
61:             <div style={{ color: '#fff' }}>
62:               <IconHistory size={32} />
63:             </div>
64:             <div style={styles.quickLabel}>Riwayat Transaksi</div>
65:           </button>
66:         </div>
67:       </div>
68:     </div>
69:   );
70: }
71: 
72: const styles = {
73:   container: { height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' },
74:   header: {
75:     background: '#1D9E75',
76:     padding: '18px 20px 36px',
77:     position: 'relative',
78:     borderRadius: '0 0 24px 24px',
79:   },
80:   headerTitle: {
81:     fontSize: '13px',
82:     fontWeight: '700',
83:     color: '#fff',
84:     opacity: 0.85,
85:     textAlign: 'center',
86:     marginBottom: '4px',
87:   },
88:   headerGreeting: { fontSize: '20px', fontWeight: '800', color: '#fff', marginBottom: '2px' },
89:   headerDate: { fontSize: '12px', color: 'rgba(255,255,255,0.75)' },
90:   avatar: {
91:     position: 'absolute',
92:     top: '16px',
93:     right: '18px',
94:     width: '40px',
95:     height: '40px',
96:     borderRadius: '50%',
97:     background: '#a0eed3',
98:     border: '2.5px solid #fff',
99:     display: 'flex',
100:     alignItems: 'center',
101:     justifyContent: 'center',
102:     fontSize: '18px',
103:   },
104:   content: { padding: '24px 16px 80px', flex: 1, overflowY: 'auto' },
105:   statsCard: {
106:     background: '#fff',
107:     borderRadius: '18px',
108:     padding: '16px',
109:     marginBottom: '24px',
110:     border: '1.5px solid #EAE5DA',
111:     textAlign: 'center',
112:   },
113:   statLabel: { fontSize: '12px', fontWeight: '700', color: '#888780', marginBottom: '4px' },
114:   statValue: { fontSize: '28px', fontWeight: '800', color: '#1D9E75' },
115:   statSub: { fontSize: '12px', color: '#5F5E5A', fontWeight: '600' },
116:   quickGrid: { display: 'flex', flexDirection: 'column', gap: '14px' },
117:   quickBtn: {
118:     borderRadius: '18px',
119:     padding: '20px',
120:     display: 'flex',
121:     alignItems: 'center',
122:     gap: '16px',
123:     border: 'none',
124:     cursor: 'pointer',
125:     textAlign: 'left',
126:   },
127:   quickLabel: { fontSize: '16px', fontWeight: '800', color: '#fff' },
128: };

(End of file - total 128 lines)
</content>
```

**Tool: read**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\kasir\\PesananKasir.jsx"
}
```

**Output:**
```
<path>E:\UDIN\Kuliah\Mata Kuliah\Rekayasa Perangkat Lunak\Tugas 6\wdms-app\wdms-frontend\src\pages\kasir\PesananKasir.jsx</path>
<type>file</type>
<content>
1: import React, { useState } from 'react';
2: import { useNavigate } from 'react-router-dom';
3: import { useAppContext } from '../../context/AppContext';
4: import {
5:   IconArrowLeft,
6:   IconPlus,
7:   IconClipboardList,
8:   IconCreditCard,
9:   IconArrowRight,
10: } from '@tabler/icons-react';
11: 
12: export default function PesananKasir() {
13:   const { menus, cart, addToCart } = useAppContext();
14:   const navigate = useNavigate();
15:   const [filter, setFilter] = useState('Semua');
16: 
17:   const filteredMenus = filter === 'Semua' ? menus : menus.filter((m) => m.kategori === filter);
18: 
19:   const cartTotal = cart.reduce((sum, item) => sum + item.harga * item.qty, 0);
20: 
21:   const formatIDR = (num) => `Rp ${num.toLocaleString('id-ID')}`;
22: 
23:   const getEmoji = (name) => {
24:     if (name.includes('Ayam')) return '🍗';
25:     if (name.includes('Tempe') || name.includes('Tahu')) return '🍱';
26:     if (name.includes('Nasi')) return '🍚';
27:     if (name.includes('Ikan')) return '🐟';
28:     if (name.includes('Kangkung') || name.includes('Sayur')) return '🥗';
29:     if (name.includes('Teh') || name.includes('Es')) return '🍹';
30:     return '🍲';
31:   };
32: 
33:   return (
34:     <div style={styles.container}>
35:       <div style={styles.topBar}>
36:         <div style={styles.topBack} onClick={() => navigate(-1)}>
37:           <IconArrowLeft size={16} /> Beranda
38:         </div>
39:         <div style={styles.topTitle}>Pesanan Baru</div>
40:       </div>
41: 
42:       <div style={styles.body}>
43:         <div style={styles.filterRow}>
44:           {['Semua', 'Lauk', 'Sayur', 'Minuman'].map((f) => (
45:             <button
46:               key={f}
47:               style={filter === f ? styles.pillActive : styles.pillInactive}
48:               onClick={() => setFilter(f)}
49:             >
50:               {f}
51:             </button>
52:           ))}
53:         </div>
54: 
55:         <div style={styles.menuGrid}>
56:           {filteredMenus.map((menu) => (
57:             <div
58:               key={menu.id}
59:               style={menu.status === 'Habis' ? styles.menuCardHabis : styles.menuCard}
60:             >
61:               {menu.status !== 'Habis' && (
62:                 <button style={styles.addBtn} onClick={() => addToCart(menu)}>
63:                   <IconPlus size={14} color="#fff" />
64:                 </button>
65:               )}
66:               <div style={menu.status === 'Habis' ? styles.menuImgHabis : styles.menuImg}>
67:                 {getEmoji(menu.nama)}
68:               </div>
69:               <div style={menu.status === 'Habis' ? styles.menuNameHabis : styles.menuName}>
70:                 {menu.nama}
71:               </div>
72: 
73:               {menu.status === 'Habis' ? (
74:                 <div style={styles.habisBadge}>HABIS</div>
75:               ) : (
76:                 <div style={styles.menuPrice}>{formatIDR(menu.harga)}</div>
77:               )}
78:             </div>
79:           ))}
80:         </div>
81: 
82:         {cart.length > 0 && (
83:           <div style={styles.orderCard}>
84:             <div style={styles.orderTitle}>
85:               <IconClipboardList size={16} /> Pesanan Saat Ini
86:             </div>
87:             {cart.map((item, idx) => (
88:               <div key={idx} style={styles.orderRow}>
89:                 <span>
90:                   {item.nama} x{item.qty}
91:                 </span>
92:                 <span>{formatIDR(item.harga * item.qty)}</span>
93:               </div>
94:             ))}
95:             <hr style={styles.orderDivider} />
96:             <div style={styles.orderTotal}>
97:               <span>Total</span>
98:               <span>{formatIDR(cartTotal)}</span>
99:             </div>
100:           </div>
101:         )}
102: 
103:         <button
104:           style={{ ...styles.payBtn, opacity: cart.length > 0 ? 1 : 0.5 }}
105:           disabled={cart.length === 0}
106:           onClick={() => navigate('/bayar')}
107:         >
108:           <IconCreditCard size={18} /> Lanjut Bayar <IconArrowRight size={18} />
109:         </button>
110:       </div>
111:     </div>
112:   );
113: }
114: 
115: const styles = {
116:   container: { height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' },
117:   topBar: {
118:     background: '#1D9E75',
119:     padding: '14px 18px 40px',
120:     position: 'relative',
121:     borderRadius: '0 0 28px 28px',
122:   },
123:   topTitle: { fontSize: '18px', fontWeight: '800', color: '#fff', textAlign: 'center' },
124:   topBack: {
125:     position: 'absolute',
126:     left: '16px',
127:     top: '14px',
128:     color: 'rgba(255,255,255,0.85)',
129:     fontSize: '13px',
130:     fontWeight: '700',
131:     display: 'flex',
132:     alignItems: 'center',
133:     gap: '4px',
134:     cursor: 'pointer',
135:   },
136:   body: { padding: '30px 14px 90px', flex: 1, overflowY: 'auto' },
137:   filterRow: {
138:     display: 'flex',
139:     gap: '8px',
140:     marginBottom: '16px',
141:     overflowX: 'auto',
142:     paddingBottom: '2px',
143:   },
144:   pillActive: {
145:     padding: '7px 16px',
146:     borderRadius: '50px',
147:     fontSize: '12px',
148:     fontWeight: '800',
149:     border: 'none',
150:     cursor: 'pointer',
151:     whiteSpace: 'nowrap',
152:     background: '#1D9E75',
153:     color: '#fff',
154:   },
155:   pillInactive: {
156:     padding: '7px 16px',
157:     borderRadius: '50px',
158:     fontSize: '12px',
159:     fontWeight: '800',
160:     border: '1.5px solid #D3D1C7',
161:     cursor: 'pointer',
162:     whiteSpace: 'nowrap',
163:     background: '#fff',
164:     color: '#5F5E5A',
165:   },
166:   menuGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '18px' },
167:   menuCard: {
168:     background: '#fff',
169:     borderRadius: '18px',
170:     padding: '10px',
171:     display: 'flex',
172:     flexDirection: 'column',
173:     alignItems: 'center',
174:     gap: '6px',
175:     border: '1.5px solid #EAE5DA',
176:     position: 'relative',
177:   },
178:   menuCardHabis: {
179:     background: '#FAECE7',
180:     borderRadius: '18px',
181:     padding: '10px',
182:     display: 'flex',
183:     flexDirection: 'column',
184:     alignItems: 'center',
185:     gap: '6px',
186:     border: '1.5px solid #F5C4B3',
187:     position: 'relative',
188:   },
189:   menuImg: {
190:     width: '56px',
191:     height: '56px',
192:     borderRadius: '12px',
193:     background: '#EAF3DE',
194:     display: 'flex',
195:     alignItems: 'center',
196:     justifyContent: 'center',
197:     fontSize: '26px',
198:   },
199:   menuImgHabis: {
200:     width: '56px',
201:     height: '56px',
202:     borderRadius: '12px',
203:     background: '#F5C4B3',
204:     display: 'flex',
205:     alignItems: 'center',
206:     justifyContent: 'center',
207:     fontSize: '26px',
208:   },
209:   menuName: { fontSize: '12px', fontWeight: '800', color: '#2C2C2A', textAlign: 'center' },
210:   menuNameHabis: { fontSize: '12px', fontWeight: '800', color: '#993C1D', textAlign: 'center' },
211:   menuPrice: { fontSize: '11px', fontWeight: '700', color: '#1D9E75' },
212:   habisBadge: {
213:     fontSize: '10px',
214:     fontWeight: '800',
215:     color: '#993C1D',
216:     background: '#F5C4B3',
217:     padding: '2px 10px',
218:     borderRadius: '50px',
219:   },
220:   addBtn: {
221:     position: 'absolute',
222:     top: '8px',
223:     right: '8px',
224:     width: '22px',
225:     height: '22px',
226:     background: '#1D9E75',
227:     borderRadius: '50%',
228:     display: 'flex',
229:     alignItems: 'center',
230:     justifyContent: 'center',
231:     border: 'none',
232:     cursor: 'pointer',
233:   },
234:   orderCard: {
235:     background: '#E1F5EE',
236:     borderRadius: '18px',
237:     padding: '14px 16px',
238:     marginBottom: '14px',
239:     border: '1.5px solid #9FE1CB',
240:   },
241:   orderTitle: {
242:     fontSize: '13px',
243:     fontWeight: '800',
244:     color: '#085041',
245:     marginBottom: '8px',
246:     display: 'flex',
247:     alignItems: 'center',
248:     gap: '6px',
249:   },
250:   orderRow: {
251:     display: 'flex',
252:     justifyContent: 'space-between',
253:     fontSize: '12px',
254:     color: '#0F6E56',
255:     fontWeight: '600',
256:     marginBottom: '4px',
257:   },
258:   orderDivider: { border: 'none', borderTop: '1px dashed #5DCAA5', margin: '8px 0' },
259:   orderTotal: {
260:     display: 'flex',
261:     justifyContent: 'space-between',
262:     fontSize: '13px',
263:     color: '#085041',
264:     fontWeight: '800',
265:   },
266:   payBtn: {
267:     background: '#1D9E75',
268:     border: 'none',
269:     borderRadius: '18px',
270:     width: '100%',
271:     padding: '16px',
272:     fontSize: '15px',
273:     fontWeight: '800',
274:     color: '#fff',
275:     cursor: 'pointer',
276:     display: 'flex',
277:     alignItems: 'center',
278:     justifyContent: 'center',
279:     gap: '8px',
280:     fontFamily: 'inherit',
281:   },
282: };

(End of file - total 282 lines)
</content>
```

**Tool: read**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\kasir\\ProsesPembayaran.jsx"
}
```

**Output:**
```
<path>E:\UDIN\Kuliah\Mata Kuliah\Rekayasa Perangkat Lunak\Tugas 6\wdms-app\wdms-frontend\src\pages\kasir\ProsesPembayaran.jsx</path>
<type>file</type>
<content>
1: import React, { useState } from 'react';
2: import { useNavigate } from 'react-router-dom';
3: import { useAppContext } from '../../context/AppContext';
4: import { IconArrowLeft, IconReceipt, IconCash, IconQrcode, IconCheck } from '@tabler/icons-react';
5: 
6: export default function ProsesPembayaran() {
7:   const { cart, addTransaction } = useAppContext();
8:   const navigate = useNavigate();
9: 
10:   const total = cart.reduce((sum, item) => sum + item.harga * item.qty, 0);
11: 
12:   const [paid, setPaid] = useState(total);
13:   const [method, setMethod] = useState('Tunai');
14: 
15:   const formatIDR = (num) => `Rp ${num.toLocaleString('id-ID')}`;
16:   const kembalian = Math.max(0, paid - total);
17: 
18:   // If cart is empty (e.g. page refreshed), redirect
19:   if (cart.length === 0) {
20:     navigate('/pesan');
21:     return null;
22:   }
23: 
24:   const handleConfirm = async () => {
25:     if (paid < total) {
26:       alert('Jumlah bayar kurang dari total pesanan!');
27:       return;
28:     }
29:     const trxData = {
30:       items: cart,
31:       total: total,
32:       bayar: paid,
33:       kembalian: kembalian,
34:       metode: method,
35:     };
36:     const result = await addTransaction(trxData);
37:     if (result.success) {
38:       navigate('/struk', {
39:         state: {
40:           trx: {
41:             id: result.id_transaksi,
42:             id_transaksi: result.id_transaksi,
43:             date: new Date().toISOString(),
44:             items: cart,
45:             total,
46:             bayar: paid,
47:             kembalian,
48:             metode: method,
49:             kasir: undefined, // Will use user context
50:           },
51:         },
52:       });
53:     } else {
54:       alert(result.message || 'Gagal menyimpan transaksi!');
55:     }
56:   };
57: 
58:   return (
59:     <div style={styles.container}>
60:       <div style={styles.topBar}>
61:         <div style={styles.topBack} onClick={() => navigate(-1)}>
62:           <IconArrowLeft size={16} /> Proses Pembayaran
63:         </div>
64:       </div>
65: 
66:       <div style={styles.body}>
67:         <div style={styles.summaryCard}>
68:           <div style={styles.summaryTitle}>
69:             <IconReceipt size={18} color="#1D9E75" /> Ringkasan Pesanan
70:           </div>
71:           {cart.map((item, idx) => (
72:             <div key={idx} style={styles.sRow}>
73:               <span>
74:                 {item.nama} x{item.qty}
75:               </span>
76:               <span>{formatIDR(item.harga * item.qty)}</span>
77:             </div>
78:           ))}
79:           <hr style={styles.sDivider} />
80:           <div style={styles.sTotal}>
81:             <span>Total</span>
82:             <span style={styles.sTotalVal}>{formatIDR(total)}</span>
83:           </div>
84:         </div>
85: 
86:         <div style={styles.sectionLabel}>Jumlah Bayar</div>
87:         <div style={styles.amountCard}>
88:           <div style={styles.amountHint}>Uang diterima</div>
89:           <div style={styles.amountVal}>{formatIDR(paid)}</div>
90:         </div>
91: 
92:         <div style={styles.quickLabel}>Nominal Cepat:</div>
93:         <div style={styles.quickRow}>
94:           {[total, 20000, 50000].map((val) => (
95:             <div
96:               key={val}
97:               style={paid === val ? styles.quickPillActive : styles.quickPill}
98:               onClick={() => setPaid(val)}
99:             >
100:               {val === total ? 'PAS' : `${val / 1000}K`}
101:             </div>
102:           ))}
103:         </div>
104: 
105:         <div style={styles.kembalianCard}>
106:           <div style={styles.kembalianHint}>Kembalian</div>
107:           <div style={styles.kembalianVal}>{formatIDR(kembalian)}</div>
108:         </div>
109: 
110:         <div style={styles.metodeLabel}>Metode Bayar:</div>
111:         <div style={styles.metodeRow}>
112:           <button
113:             style={method === 'Tunai' ? styles.metodeBtnActive : styles.metodeBtnInactive}
114:             onClick={() => setMethod('Tunai')}
115:           >
116:             <IconCash size={18} /> Tunai
117:           </button>
118:           <button
119:             style={method === 'QRIS' ? styles.metodeBtnActive : styles.metodeBtnInactive}
120:             onClick={() => setMethod('QRIS')}
121:           >
122:             <IconQrcode size={18} /> QRIS
123:           </button>
124:         </div>
125: 
126:         <button style={styles.confirmBtn} onClick={handleConfirm}>
127:           <IconCheck size={20} /> Konfirmasi Bayar
128:         </button>
129:       </div>
130:     </div>
131:   );
132: }
133: 
134: const styles = {
135:   container: { height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' },
136:   topBar: {
137:     background: '#1D9E75',
138:     padding: '14px 18px 42px',
139:     position: 'relative',
140:     borderRadius: '0 0 28px 28px',
141:   },
142:   topBack: {
143:     fontSize: '13px',
144:     fontWeight: '700',
145:     color: 'rgba(255,255,255,0.9)',
146:     display: 'flex',
147:     alignItems: 'center',
148:     justifyContent: 'center',
149:     gap: '5px',
150:     cursor: 'pointer',
151:   },
152:   body: { padding: '32px 16px 24px', flex: 1, overflowY: 'auto' },
153:   sectionLabel: { fontSize: '13px', fontWeight: '800', color: '#085041', marginBottom: '10px' },
154:   summaryCard: {
155:     background: '#fff',
156:     borderRadius: '18px',
157:     padding: '14px 16px',
158:     marginBottom: '18px',
159:     border: '1.5px solid #EAE5DA',
160:   },
161:   summaryTitle: {
162:     fontSize: '13px',
163:     fontWeight: '800',
164:     color: '#2C2C2A',
165:     marginBottom: '10px',
166:     display: 'flex',
167:     alignItems: 'center',
168:     gap: '6px',
169:   },
170:   sRow: {
171:     display: 'flex',
172:     justifyContent: 'space-between',
173:     fontSize: '12px',
174:     color: '#5F5E5A',
175:     fontWeight: '600',
176:     marginBottom: '6px',
177:   },
178:   sDivider: { border: 'none', borderTop: '1px dashed #D3D1C7', margin: '8px 0' },
179:   sTotal: {
180:     display: 'flex',
181:     justifyContent: 'space-between',
182:     fontSize: '14px',
183:     fontWeight: '800',
184:     color: '#2C2C2A',
185:   },
186:   sTotalVal: { color: '#1D9E75' },
187:   amountCard: {
188:     background: '#fff',
189:     borderRadius: '18px',
190:     padding: '14px 16px',
191:     border: '2px solid #1D9E75',
192:     marginBottom: '14px',
193:     textAlign: 'center',
194:   },
195:   amountHint: { fontSize: '11px', fontWeight: '700', color: '#0F6E56', marginBottom: '4px' },
196:   amountVal: { fontSize: '28px', fontWeight: '800', color: '#1D9E75' },
197:   quickLabel: { fontSize: '11px', fontWeight: '700', color: '#888780', marginBottom: '8px' },
198:   quickRow: { display: 'flex', gap: '8px', marginBottom: '16px' },
199:   quickPill: {
200:     flex: 1,
201:     padding: '9px 0',
202:     borderRadius: '50px',
203:     background: '#fff',
204:     border: '1.5px solid #1D9E75',
205:     fontSize: '12px',
206:     fontWeight: '800',
207:     color: '#0F6E56',
208:     cursor: 'pointer',
209:     textAlign: 'center',
210:   },
211:   quickPillActive: {
212:     flex: 1,
213:     padding: '9px 0',
214:     borderRadius: '50px',
215:     background: '#1D9E75',
216:     border: '1.5px solid #1D9E75',
217:     fontSize: '12px',
218:     fontWeight: '800',
219:     color: '#fff',
220:     cursor: 'pointer',
221:     textAlign: 'center',
222:   },
223:   kembalianCard: {
224:     background: '#E1F5EE',
225:     borderRadius: '18px',
226:     padding: '14px 16px',
227:     border: '1.5px solid #9FE1CB',
228:     marginBottom: '18px',
229:     textAlign: 'center',
230:   },
231:   kembalianHint: { fontSize: '11px', fontWeight: '700', color: '#0F6E56', marginBottom: '4px' },
232:   kembalianVal: { fontSize: '26px', fontWeight: '800', color: '#085041' },
233:   metodeLabel: { fontSize: '12px', fontWeight: '800', color: '#5F5E5A', marginBottom: '8px' },
234:   metodeRow: { display: 'flex', gap: '10px', marginBottom: '18px' },
235:   metodeBtnInactive: {
236:     flex: 1,
237:     padding: '11px 0',
238:     borderRadius: '14px',
239:     fontFamily: 'inherit',
240:     fontSize: '13px',
241:     fontWeight: '800',
242:     cursor: 'pointer',
243:     display: 'flex',
244:     alignItems: 'center',
245:     justifyContent: 'center',
246:     gap: '6px',
247:     background: '#fff',
248:     border: '1.5px solid #D3D1C7',
249:     color: '#888780',
250:   },
251:   metodeBtnActive: {
252:     flex: 1,
253:     padding: '11px 0',
254:     borderRadius: '14px',
255:     fontFamily: 'inherit',
256:     fontSize: '13px',
257:     fontWeight: '800',
258:     cursor: 'pointer',
259:     display: 'flex',
260:     alignItems: 'center',
261:     justifyContent: 'center',
262:     gap: '6px',
263:     background: '#1D9E75',
264:     border: '2px solid #1D9E75',
265:     color: '#fff',
266:   },
267:   confirmBtn: {
268:     background: '#E07B3A',
269:     border: 'none',
270:     borderRadius: '18px',
271:     width: '100%',
272:     padding: '16px',
273:     fontFamily: 'inherit',
274:     fontSize: '15px',
275:     fontWeight: '800',
276:     color: '#fff',
277:     cursor: 'pointer',
278:     display: 'flex',
279:     alignItems: 'center',
280:     justifyContent: 'center',
281:     gap: '8px',
282:   },
283: };

(End of file - total 283 lines)
</content>
```

**Tool: read**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\kasir\\RiwayatTransaksi.jsx"
}
```

**Output:**
```
<path>E:\UDIN\Kuliah\Mata Kuliah\Rekayasa Perangkat Lunak\Tugas 6\wdms-app\wdms-frontend\src\pages\kasir\RiwayatTransaksi.jsx</path>
<type>file</type>
<content>
1: import React, { useState } from 'react';
2: import { useNavigate } from 'react-router-dom';
3: import { useAppContext } from '../../context/AppContext';
4: import { IconSearch, IconFilter, IconReceipt } from '@tabler/icons-react';
5: 
6: export default function RiwayatTransaksi() {
7:   const { transactions } = useAppContext();
8:   const navigate = useNavigate();
9:   const [search, setSearch] = useState('');
10: 
11:   const formatIDR = (num) => `Rp ${num.toLocaleString('id-ID')}`;
12: 
13:   const openStruk = (trx) => {
14:     const normalized = {
15:       ...trx,
16:       id: trx.id_transaksi || trx.id,
17:       id_transaksi: trx.id_transaksi || trx.id,
18:       date: trx.tanggal_transaksi || trx.date || trx.created_at,
19:       kasir: trx.kasir || 'Kasir',
20:       items: (trx.items || []).map((item) => ({
21:         ...item,
22:         nama: item.nama || item.nama_menu || item.name || 'Item',
23:         qty: Number(item.qty ?? item.jumlah ?? 1),
24:         harga: Number(item.harga ?? item.harga_satuan ?? item.harga_jual ?? 0),
25:       })),
26:       total: Number(trx.total_transaksi || trx.total || 0),
27:       bayar: Number(trx.jumlah_bayar || trx.bayar || 0),
28:       kembalian: Number(trx.kembalian || 0),
29:       metode: trx.metode_bayar || trx.metode || 'Tunai',
30:     };
31: 
32:     try {
33:       sessionStorage.setItem('wdms_last_trx', JSON.stringify(normalized));
34:     } catch {}
35: 
36:     navigate('/struk', { state: { trx: normalized } });
37:   };
38: 
39:   const normalizedTransactions = (transactions || []).map((trx) => ({
40:     ...trx,
41:     id: trx.id_transaksi || trx.id,
42:     id_transaksi: trx.id_transaksi || trx.id,
43:     date: trx.tanggal_transaksi || trx.date || trx.created_at,
44:     kasir: trx.kasir || 'Kasir',
45:     items: trx.items || [],
46:     total: trx.total_transaksi || trx.total || 0,
47:     bayar: trx.jumlah_bayar || trx.bayar || 0,
48:     kembalian: trx.kembalian || 0,
49:     metode: trx.metode_bayar || trx.metode || 'Tunai',
50:   }));
51: 
52:   const filtered = normalizedTransactions.filter((t) => {
53:     const idText = String(t.id_transaksi ?? t.id ?? '');
54:     const kasirText = String(t.kasir ?? '');
55:     return idText.includes(search) || kasirText.toLowerCase().includes(search.toLowerCase());
56:   });
57: 
58:   return (
59:     <div style={styles.container}>
60:       <div style={styles.header}>
61:         <div style={styles.headerTitle}>Riwayat Transaksi</div>
62:         <div style={styles.searchRow}>
63:           <div style={styles.searchBox}>
64:             <IconSearch size={18} color="#888780" />
65:             <input
66:               style={styles.searchInput}
67:               placeholder="Cari ID transaksi..."
68:               value={search}
69:               onChange={(e) => setSearch(e.target.value)}
70:             />
71:           </div>
72:           <button style={styles.filterBtn}>
73:             <IconFilter size={20} color="#fff" />
74:           </button>
75:         </div>
76:       </div>
77: 
78:       <div style={styles.content}>
79:         {filtered.map((trx) => {
80:           const d = trx.date ? new Date(trx.date) : new Date();
81:           const timeStr = `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`;
82: 
83:           return (
84:             <div
85:               key={trx.id_transaksi || trx.id}
86:               style={styles.trxCard}
87:               onClick={() => openStruk(trx)}
88:             >
89:               <div style={styles.trxHeader}>
90:                 <div style={styles.trxId}>#{String(trx.id_transaksi || trx.id).slice(-4)}</div>
91:                 <div style={styles.trxStatus}>Berhasil</div>
92:               </div>
93:               <div style={styles.trxBody}>
94:                 <div style={styles.trxSummary}>
95:                   {(trx.items || []).length} Item • Kasir: {trx.kasir}
96:                 </div>
97:                 <div style={styles.trxTime}>{timeStr}</div>
98:               </div>
99:               <div style={styles.trxFooter}>
100:                 <div style={styles.trxTotal}>{formatIDR(trx.total)}</div>
101:                 <div style={styles.viewStruk}>
102:                   Lihat Struk <IconReceipt size={14} />
103:                 </div>
104:               </div>
105:             </div>
106:           );
107:         })}
108:         {filtered.length === 0 && <div style={styles.empty}>Belum ada transaksi.</div>}
109:       </div>
110:     </div>
111:   );
112: }
113: 
114: const styles = {
115:   container: { height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' },
116:   header: { background: '#1D9E75', padding: '24px 20px 40px', borderRadius: '0 0 24px 24px' },
117:   headerTitle: {
118:     fontSize: '18px',
119:     fontWeight: '800',
120:     color: '#fff',
121:     textAlign: 'center',
122:     marginBottom: '16px',
123:   },
124:   searchRow: { display: 'flex', gap: '10px' },
125:   searchBox: {
126:     display: 'flex',
127:     alignItems: 'center',
128:     background: '#fff',
129:     padding: '10px 14px',
130:     borderRadius: '12px',
131:     gap: '8px',
132:     flex: 1,
133:   },
134:   searchInput: {
135:     border: 'none',
136:     outline: 'none',
137:     flex: 1,
138:     fontSize: '14px',
139:     fontFamily: 'inherit',
140:   },
141:   filterBtn: {
142:     background: '#0F6E56',
143:     border: 'none',
144:     borderRadius: '12px',
145:     padding: '0 14px',
146:     display: 'flex',
147:     alignItems: 'center',
148:     justifyContent: 'center',
149:     cursor: 'pointer',
150:   },
151:   content: {
152:     padding: '20px 16px 80px',
153:     flex: 1,
154:     overflowY: 'auto',
155:     display: 'flex',
156:     flexDirection: 'column',
157:     gap: '12px',
158:     marginTop: '-20px',
159:   },
160:   trxCard: {
161:     background: '#fff',
162:     borderRadius: '16px',
163:     padding: '16px',
164:     border: '1.5px solid #EAE5DA',
165:     cursor: 'pointer',
166:   },
167:   trxHeader: { display: 'flex', justifyContent: 'space-between', marginBottom: '8px' },
168:   trxId: { fontSize: '14px', fontWeight: '800', color: '#2C2C2A' },
169:   trxStatus: {
170:     fontSize: '10px',
171:     fontWeight: '800',
172:     background: '#EAF3DE',
173:     color: '#3B6D11',
174:     padding: '2px 8px',
175:     borderRadius: '4px',
176:   },
177:   trxBody: { display: 'flex', justifyContent: 'space-between', marginBottom: '12px' },
178:   trxSummary: { fontSize: '12px', color: '#5F5E5A', fontWeight: '600' },
179:   trxTime: { fontSize: '12px', color: '#888780', fontWeight: '600' },
180:   trxFooter: {
181:     display: 'flex',
182:     justifyContent: 'space-between',
183:     alignItems: 'center',
184:     paddingTop: '12px',
185:     borderTop: '1px dashed #D3D1C7',
186:   },
187:   trxTotal: { fontSize: '15px', fontWeight: '800', color: '#1D9E75' },
188:   viewStruk: {
189:     display: 'flex',
190:     alignItems: 'center',
191:     gap: '4px',
192:     fontSize: '11px',
193:     fontWeight: '700',
194:     color: '#1D9E75',
195:   },
196:   empty: { textAlign: 'center', color: '#888780', fontSize: '13px', marginTop: '40px' },
197: };

(End of file - total 197 lines)
</content>
```

**Tool: read**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\kasir\\StrukPembayaran.jsx"
}
```

**Output:**
```
<path>E:\UDIN\Kuliah\Mata Kuliah\Rekayasa Perangkat Lunak\Tugas 6\wdms-app\wdms-frontend\src\pages\kasir\StrukPembayaran.jsx</path>
<type>file</type>
<content>
1: import React, { useEffect, useState } from 'react';
2: import { useNavigate, useLocation } from 'react-router-dom';
3: import { IconPrinter, IconShare, IconPlus } from '@tabler/icons-react';
4: 
5: export default function StrukPembayaran() {
6:   const navigate = useNavigate();
7:   const location = useLocation();
8:   const [trx, setTrx] = useState(() => {
9:     try {
10:       const saved = sessionStorage.getItem('wdms_last_trx');
11:       return saved ? JSON.parse(saved) : null;
12:     } catch {
13:       return null;
14:     }
15:   });
16: 
17:   const normalizeTrx = (raw) => {
18:     if (!raw) return null;
19: 
20:     return {
21:       ...raw,
22:       id: raw.id_transaksi || raw.id || raw.id_pesanan,
23:       id_transaksi: raw.id_transaksi || raw.id || raw.id_pesanan,
24:       date: raw.tanggal_transaksi || raw.date || raw.created_at || new Date().toISOString(),
25:       kasir: raw.kasir || raw.nama_kasir || 'Kasir',
26:       items: (raw.items || []).map((item) => ({
27:         ...item,
28:         nama: item.nama || item.nama_menu || item.name || 'Item',
29:         qty: Number(item.qty ?? item.jumlah ?? 1),
30:         harga: Number(item.harga ?? item.harga_satuan ?? item.harga_jual ?? 0),
31:       })),
32:       total: Number(raw.total_transaksi || raw.total || raw.total_bayar || 0),
33:       bayar: Number(raw.jumlah_bayar || raw.bayar || 0),
34:       kembalian: Number(raw.kembalian || raw.kembali || 0),
35:       metode: raw.metode_bayar || raw.metode || 'Tunai',
36:     };
37:   };
38: 
39:   useEffect(() => {
40:     const incoming = location.state?.trx || location.state?.transaction || null;
41:     if (incoming) {
42:       const normalized = normalizeTrx(incoming);
43:       setTrx(normalized);
44:       try {
45:         sessionStorage.setItem('wdms_last_trx', JSON.stringify(normalized));
46:       } catch {}
47:     }
48:   }, [location.state]);
49: 
50:   const formatIDR = (num) => `Rp ${num.toLocaleString('id-ID')}`;
51:   const currentTrx = normalizeTrx(trx);
52: 
53:   if (!currentTrx) {
54:     return (
55:       <div style={styles.container}>
56:         <div style={styles.body}>Data transaksi tidak ditemukan.</div>
57:         <button style={styles.newTrxBtn} onClick={() => navigate('/pesan')}>
58:           <IconPlus size={18} /> Transaksi Baru
59:         </button>
60:       </div>
61:     );
62:   }
63: 
64:   const d = trx.date ? new Date(trx.date) : new Date();
65:   const dateStr = `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1).toString().padStart(2, '0')}/${d.getFullYear()} ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`;
66:   const trxId = String(trx.id_transaksi || trx.id || '').slice(-4); // Last 4 digits
67: 
68:   return (
69:     <div style={styles.container}>
70:       <div style={styles.topBar}>
71:         <div style={styles.topTitle}>Struk Pembayaran</div>
72:       </div>
73: 
74:       <div style={styles.body}>
75:         <div style={styles.receipt}>
76:           <div style={styles.restoName}>WARTEG PAK BUDI</div>
77:           <div style={styles.restoSub}>
78:             Jl. Margonda Raya, Depok
79:             <br />
80:             Telp: 0812-xxxx-xxxx
81:           </div>
82: 
83:           <div style={styles.rDivider} />
84: 
85:           <div style={styles.metaRow}>
86:             <span>No: #{trxId}</span>
87:             <span>{dateStr}</span>
88:           </div>
89:           <div style={styles.metaRow}>
90:             <span>Kasir: {trx.kasir}</span>
91:           </div>
92: 
93:           <div style={styles.rDivider} />
94: 
95:           <div style={{ marginTop: '2px' }}>
96:             {(trx.items || []).map((item, idx) => (
97:               <div key={idx} style={styles.itemRow}>
98:                 <div>
99:                   <div style={styles.itemName}>{item.nama}</div>
100:                   <div style={styles.itemQty}>
101:                     {item.qty} x {formatIDR(item.harga)}
102:                   </div>
103:                 </div>
104:                 <div style={styles.itemPrice}>{formatIDR(item.harga * item.qty)}</div>
105:               </div>
106:             ))}
107:           </div>
108: 
109:           <div style={styles.rDivider} />
110: 
111:           <div style={styles.totalRow}>
112:             <span>TOTAL</span>
113:             <span style={{ color: '#1D9E75' }}>{formatIDR(trx.total)}</span>
114:           </div>
115:           <div style={styles.subRow}>
116:             <span>Bayar</span>
117:             <span>{formatIDR(trx.bayar)}</span>
118:           </div>
119:           <div style={styles.kembalianRow}>
120:             <span>Kembalian</span>
121:             <span>{formatIDR(trx.kembalian)}</span>
122:           </div>
123: 
124:           <div style={styles.rDivider} />
125: 
126:           <div style={styles.thankyou}>
127:             <p style={styles.thankyouText}>
128:               Terima kasih atas kunjungan Anda!
129:               <br />
130:               Selamat makan!
131:             </p>
132:           </div>
133:         </div>
134: 
135:         <div style={styles.actionRow}>
136:           <button style={styles.btnCetak} onClick={() => window.print()}>
137:             <IconPrinter size={16} /> Cetak
138:           </button>
139:           <button style={styles.btnShare}>
140:             <IconShare size={16} /> Share
141:           </button>
142:         </div>
143: 
144:         <button style={styles.newTrxBtn} onClick={() => navigate('/pesan')}>
145:           <IconPlus size={18} /> Transaksi Baru
146:         </button>
147:       </div>
148:     </div>
149:   );
150: }
151: 
152: const styles = {
153:   container: { height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' },
154:   topBar: {
155:     background: '#1D9E75',
156:     padding: '14px 18px 42px',
157:     position: 'relative',
158:     borderRadius: '0 0 28px 28px',
159:   },
160:   topTitle: { fontSize: '15px', fontWeight: '800', color: '#fff', textAlign: 'center' },
161:   body: {
162:     padding: '28px 16px 24px',
163:     flex: 1,
164:     display: 'flex',
165:     flexDirection: 'column',
166:     gap: '14px',
167:     overflowY: 'auto',
168:   },
169:   receipt: {
170:     background: '#fff',
171:     borderRadius: '20px',
172:     padding: '18px 16px',
173:     border: '1.5px solid #EAE5DA',
174:   },
175:   restoName: {
176:     fontSize: '17px',
177:     fontWeight: '800',
178:     color: '#2C2C2A',
179:     textAlign: 'center',
180:     marginBottom: '2px',
181:   },
182:   restoSub: {
183:     fontSize: '11px',
184:     color: '#888780',
185:     fontWeight: '600',
186:     textAlign: 'center',
187:     lineHeight: 1.6,
188:   },
189:   rDivider: { border: 'none', borderTop: '1.5px dashed #D3D1C7', margin: '12px 0' },
190:   metaRow: {
191:     display: 'flex',
192:     justifyContent: 'space-between',
193:     fontSize: '11px',
194:     color: '#5F5E5A',
195:     fontWeight: '600',
196:     marginBottom: '4px',
197:   },
198:   itemRow: {
199:     display: 'flex',
200:     justifyContent: 'space-between',
201:     alignItems: 'flex-start',
202:     marginBottom: '8px',
203:   },
204:   itemName: { fontSize: '12px', fontWeight: '800', color: '#2C2C2A' },
205:   itemQty: { fontSize: '11px', fontWeight: '600', color: '#888780' },
206:   itemPrice: {
207:     fontSize: '12px',
208:     fontWeight: '700',
209:     color: '#2C2C2A',
210:     textAlign: 'right',
211:     minWidth: '64px',
212:   },
213:   totalRow: {
214:     display: 'flex',
215:     justifyContent: 'space-between',
216:     fontSize: '14px',
217:     fontWeight: '800',
218:     color: '#2C2C2A',
219:     marginBottom: '6px',
220:   },
221:   subRow: {
222:     display: 'flex',
223:     justifyContent: 'space-between',
224:     fontSize: '12px',
225:     fontWeight: '600',
226:     color: '#5F5E5A',
227:     marginBottom: '4px',
228:   },
229:   kembalianRow: {
230:     display: 'flex',
231:     justifyContent: 'space-between',
232:     fontSize: '12px',
233:     fontWeight: '800',
234:     color: '#E07B3A',
235:   },
236:   thankyou: {
237:     background: '#E1F5EE',
238:     borderRadius: '14px',
239:     padding: '10px 14px',
240:     textAlign: 'center',
241:   },
242:   thankyouText: {
243:     fontSize: '12px',
244:     fontWeight: '700',
245:     color: '#085041',
246:     lineHeight: 1.6,
247:     margin: 0,
248:   },
249:   actionRow: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' },
250:   btnCetak: {
251:     borderRadius: '14px',
252:     padding: '13px 0',
253:     fontFamily: 'inherit',
254:     fontSize: '13px',
255:     fontWeight: '800',
256:     cursor: 'pointer',
257:     display: 'flex',
258:     alignItems: 'center',
259:     justifyContent: 'center',
260:     gap: '6px',
261:     border: 'none',
262:     background: '#1D9E75',
263:     color: '#fff',
264:   },
265:   btnShare: {
266:     borderRadius: '14px',
267:     padding: '13px 0',
268:     fontFamily: 'inherit',
269:     fontSize: '13px',
270:     fontWeight: '800',
271:     cursor: 'pointer',
272:     display: 'flex',
273:     alignItems: 'center',
274:     justifyContent: 'center',
275:     gap: '6px',
276:     background: '#fff',
277:     color: '#1D9E75',
278:     border: '2px solid #1D9E75',
279:   },
280:   newTrxBtn: {
281:     background: '#E07B3A',
282:     border: 'none',
283:     borderRadius: '18px',
284:     width: '100%',
285:     padding: '15px',
286:     fontFamily: 'inherit',
287:     fontSize: '14px',
288:     fontWeight: '800',
289:     color: '#fff',
290:     cursor: 'pointer',
291:     display: 'flex',
292:     alignItems: 'center',
293:     justifyContent: 'center',
294:     gap: '8px',
295:   },
296: };
297: 
298: if (typeof window !== 'undefined') {
299:   window.addEventListener('beforeprint', () => {
300:     document.body.style.background = '#fff';
301:     document.body.style.padding = '0';
302:   });
303: 
304:   window.addEventListener('afterprint', () => {
305:     document.body.style.background = '';
306:     document.body.style.padding = '';
307:   });
308: }

(End of file - total 308 lines)
</content>
```

**Tool: read**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\pemilik\\DashboardPemilik.jsx"
}
```

**Output:**
```
<path>E:\UDIN\Kuliah\Mata Kuliah\Rekayasa Perangkat Lunak\Tugas 6\wdms-app\wdms-frontend\src\pages\pemilik\DashboardPemilik.jsx</path>
<type>file</type>
<content>
1: import React, { useEffect, useState } from 'react';
2: import { useNavigate } from 'react-router-dom';
3: import { useAppContext } from '../../context/AppContext';
4: import {
5:   IconToolsKitchen2,
6:   IconChartBar,
7:   IconPackage,
8:   IconCashBanknote,
9: } from '@tabler/icons-react';
10: 
11: export default function DashboardPemilik() {
12:   const { user, fetchLaporan } = useAppContext();
13:   const navigate = useNavigate();
14:   const [stats, setStats] = useState({ total_transaksi: 0, total_pendapatan: 0 });
15:   const [menuTerlaris, setMenuTerlaris] = useState([]);
16: 
17:   useEffect(() => {
18:     fetchLaporan('hari').then((data) => {
19:       if (data) {
20:         setStats(data.stats);
21:         setMenuTerlaris(data.menuTerlaris || []);
22:       }
23:     });
24:   }, [fetchLaporan]);
25: 
26:   const formatIDR = (num) => {
27:     const n = parseFloat(num) || 0;
28:     return n >= 1000 ? (n / 1000).toFixed(0) + 'K' : `Rp ${n}`;
29:   };
30: 
31:   const maxTerjual = menuTerlaris.length > 0 ? menuTerlaris[0].total_terjual : 1;
32:   const barColors = ['#C94040', '#E07B3A', '#D4B96A', '#3B7A57', '#5F5E5A'];
33: 
34:   return (
35:     <div style={styles.container}>
36:       <div style={styles.header}>
37:         <div style={styles.headerTitle}>🍽 Dashboard Pemilik</div>
38:         <div style={styles.headerGreeting}>Selamat pagi, {user?.nama?.split(' ')[0]}!</div>
39:         <div style={styles.headerDate}>
40:           {new Date().toLocaleDateString('id-ID', {
41:             weekday: 'long',
42:             year: 'numeric',
43:             month: 'long',
44:             day: 'numeric',
45:           })}
46:         </div>
47:         <div style={styles.avatar}>👨‍🍳</div>
48:       </div>
49: 
50:       <div style={styles.content}>
51:         <div style={styles.adviceCard}>
52:           <div style={styles.adviceIcon}>💡</div>
53:           <div>
54:             <div style={styles.adviceHead}>Tips Hari Ini</div>
55:             <div style={styles.adviceBody}>
56:               Pantau stok bahan baku dan pastikan menu selalu tersedia untuk pelanggan!
57:             </div>
58:           </div>
59:         </div>
60: 
61:         <div style={styles.statsRow}>
62:           <div style={{ ...styles.statCard, ...styles.incomeCard }}>
63:             <div style={{ ...styles.statLabel, color: '#3B6D11' }}>PENDAPATAN</div>
64:             <div style={{ ...styles.statValue, color: '#27500A' }}>
65:               {formatIDR(stats.total_pendapatan)}
66:             </div>
67:             <div style={{ ...styles.statSub, color: '#3B6D11' }}>Hari ini</div>
68:           </div>
69:           <div style={{ ...styles.statCard, ...styles.trxCard }}>
70:             <div style={{ ...styles.statLabel, color: '#993C1D' }}>TRANSAKSI</div>
71:             <div style={{ ...styles.statValue, color: '#D85A30' }}>{stats.total_transaksi}</div>
72:             <div style={{ ...styles.statSub, color: '#993C1D' }}>Hari ini</div>
73:           </div>
74:         </div>
75: 
76:         <div style={styles.sectionTitle}>Menu Terlaris Hari Ini</div>
77:         <div style={styles.menuPopular}>
78:           {menuTerlaris.length === 0 ? (
79:             <div style={{ color: '#888780', fontSize: '12px', textAlign: 'center' }}>
80:               Belum ada data penjualan hari ini.
81:             </div>
82:           ) : (
83:             menuTerlaris.slice(0, 3).map((menu, i) => (
84:               <div key={i} style={styles.menuItem}>
85:                 <div style={styles.menuName}>{menu.nama_menu}</div>
86:                 <div style={styles.menuBarBg}>
87:                   <div
88:                     style={{
89:                       ...styles.menuBarFill,
90:                       width: `${(menu.total_terjual / maxTerjual) * 100}%`,
91:                       background: barColors[i],
92:                     }}
93:                   />
94:                 </div>
95:                 <div style={styles.menuQty}>{menu.total_terjual} porsi</div>
96:               </div>
97:             ))
98:           )}
99:         </div>
100: 
101:         <div style={styles.sectionTitle}>Menu Cepat</div>
102:         <div style={styles.quickGrid}>
103:           <QuickBtn
104:             icon={<IconToolsKitchen2 />}
105:             label="Kelola Menu"
106:             bg="#C94040"
107:             onClick={() => navigate('/menu')}
108:           />
109:           <QuickBtn
110:             icon={<IconChartBar />}
111:             label="Lihat Laporan"
112:             bg="#3B7A57"
113:             onClick={() => navigate('/laporan')}
114:           />
115:           <QuickBtn
116:             icon={<IconPackage />}
117:             label="Kelola Stok"
118:             bg="#E07B3A"
119:             onClick={() => navigate('/stok')}
120:           />
121:           <QuickBtn
122:             icon={<IconCashBanknote />}
123:             label="Pengaturan"
124:             bg="#5F5E5A"
125:             onClick={() => navigate('/pengaturan')}
126:           />
127:         </div>
128:       </div>
129:     </div>
130:   );
131: }
132: 
133: function QuickBtn({ icon, label, bg, onClick }) {
134:   return (
135:     <button style={{ ...styles.quickBtn, background: bg }} onClick={onClick}>
136:       <div style={{ color: '#fff' }}>{icon}</div>
137:       <div style={styles.quickLabel}>{label}</div>
138:     </button>
139:   );
140: }
141: 
142: const styles = {
143:   container: { height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' },
144:   header: {
145:     background: '#C94040',
146:     padding: '18px 20px 36px',
147:     position: 'relative',
148:     borderRadius: '0 0 24px 24px',
149:   },
150:   headerTitle: {
151:     fontSize: '13px',
152:     fontWeight: '700',
153:     color: '#fff',
154:     opacity: 0.85,
155:     textAlign: 'center',
156:     marginBottom: '4px',
157:   },
158:   headerGreeting: { fontSize: '20px', fontWeight: '800', color: '#fff', marginBottom: '2px' },
159:   headerDate: { fontSize: '12px', color: 'rgba(255,255,255,0.75)' },
160:   avatar: {
161:     position: 'absolute',
162:     top: '16px',
163:     right: '18px',
164:     width: '40px',
165:     height: '40px',
166:     borderRadius: '50%',
167:     background: '#f5c4c4',
168:     border: '2.5px solid #fff',
169:     display: 'flex',
170:     alignItems: 'center',
171:     justifyContent: 'center',
172:     fontSize: '18px',
173:   },
174:   content: { padding: '24px 16px 80px', flex: 1, overflowY: 'auto' },
175:   adviceCard: {
176:     background: '#FFF8EC',
177:     borderRadius: '18px',
178:     padding: '13px 16px',
179:     marginBottom: '18px',
180:     display: 'flex',
181:     alignItems: 'flex-start',
182:     gap: '10px',
183:   },
184:   adviceIcon: { fontSize: '22px', marginTop: '2px' },
185:   adviceHead: { fontSize: '12px', fontWeight: '800', color: '#854F0B', marginBottom: '2px' },
186:   adviceBody: { fontSize: '11px', color: '#BA7517', lineHeight: 1.5 },
187:   statsRow: { display: 'flex', gap: '10px', marginBottom: '18px' },
188:   statCard: { flex: 1, borderRadius: '18px', padding: '14px 16px' },
189:   incomeCard: { background: '#EAF3DE' },
190:   trxCard: { background: '#FAECE7' },
191:   statLabel: { fontSize: '11px', fontWeight: '700', opacity: 0.7, marginBottom: '4px' },
192:   statValue: { fontSize: '26px', fontWeight: '800' },
193:   statSub: { fontSize: '10px', fontWeight: '600', opacity: 0.65, marginTop: '2px' },
194:   sectionTitle: { fontSize: '13px', fontWeight: '800', color: '#5F5E5A', margin: '0 0 10px' },
195:   menuPopular: {
196:     background: '#fff',
197:     borderRadius: '18px',
198:     padding: '14px 16px',
199:     marginBottom: '18px',
200:   },
201:   menuItem: {
202:     display: 'flex',
203:     alignItems: 'center',
204:     justifyContent: 'space-between',
205:     marginBottom: '8px',
206:   },
207:   menuBarBg: {
208:     flex: 1,
209:     height: '8px',
210:     background: '#F1EFE8',
211:     borderRadius: '8px',
212:     margin: '0 10px',
213:     overflow: 'hidden',
214:   },
215:   menuBarFill: { height: '100%', borderRadius: '8px' },
216:   menuName: { fontSize: '12px', fontWeight: '700', color: '#2C2C2A', minWidth: '90px' },
217:   menuQty: {
218:     fontSize: '11px',
219:     color: '#888780',
220:     fontWeight: '600',
221:     minWidth: '40px',
222:     textAlign: 'right',
223:   },
224:   quickGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' },
225:   quickBtn: {
226:     borderRadius: '18px',
227:     padding: '16px 14px',
228:     display: 'flex',
229:     flexDirection: 'column',
230:     alignItems: 'flex-start',
231:     gap: '6px',
232:     border: 'none',
233:     cursor: 'pointer',
234:     textAlign: 'left',
235:   },
236:   quickLabel: { fontSize: '12px', fontWeight: '800', color: '#fff' },
237: };

(End of file - total 237 lines)
</content>
```

**Tool: read**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\pemilik\\KelolaMenu.jsx"
}
```

**Output:**
```
<path>E:\UDIN\Kuliah\Mata Kuliah\Rekayasa Perangkat Lunak\Tugas 6\wdms-app\wdms-frontend\src\pages\pemilik\KelolaMenu.jsx</path>
<type>file</type>
<content>
1: import React, { useState } from 'react';
2: import { useAppContext } from '../../context/AppContext';
3: import {
4:   IconSearch,
5:   IconDotsVertical,
6:   IconPlus,
7:   IconX,
8:   IconCheck,
9:   IconChevronDown,
10:   IconLoader2,
11:   IconPencil,
12:   IconTrash,
13: } from '@tabler/icons-react';
14: 
15: const KATEGORI_OPTIONS = ['Lauk', 'Sayuran', 'Minuman'];
16: const STATUS_OPTIONS = ['Tersedia', 'Habis'];
17: 
18: export default function KelolaMenu() {
19:   const { menus, addMenu, updateMenuItem, deleteMenuItem } = useAppContext();
20:   const [search, setSearch] = useState('');
21: 
22:   // Modal & Form States
23:   const [showFormModal, setShowFormModal] = useState(false);
24:   const [editingMenu, setEditingMenu] = useState(null); // null = mode tambah, object = mode edit
25:   const [isSubmitting, setIsSubmitting] = useState(false);
26:   const [errors, setErrors] = useState({});
27: 
28:   // Dropdown States
29:   const [showKategoriDropdown, setShowKategoriDropdown] = useState(false);
30:   const [showStatusDropdown, setShowStatusDropdown] = useState(false);
31:   const [activeActionId, setActiveActionId] = useState(null); // ID menu yang action-nya terbuka
32: 
33:   const [formData, setFormData] = useState({
34:     nama_menu: '',
35:     kategori: 'Lauk',
36:     harga_jual: '',
37:     stok: '',
38:     status: 'Tersedia',
39:   });
40: 
41:   const filteredMenus = menus.filter((m) => m.nama.toLowerCase().includes(search.toLowerCase()));
42: 
43:   const formatIDR = (num) => `Rp ${num.toLocaleString('id-ID')}`;
44: 
45:   // ── Handlers ──────────────────────────────────────────
46:   const handleInputChange = (field, value) => {
47:     setFormData((prev) => ({ ...prev, [field]: value }));
48:     if (errors[field]) setErrors((prev) => ({ ...prev, [field]: null }));
49:   };
50: 
51:   const handleHargaChange = (value) => {
52:     const numeric = value.replace(/\D/g, '');
53:     setFormData((prev) => ({ ...prev, harga_jual: numeric }));
54:     if (errors.harga_jual) setErrors((prev) => ({ ...prev, harga_jual: null }));
55:   };
56: 
57:   const handleStokChange = (value) => {
58:     const numeric = value.replace(/\D/g, '');
59:     setFormData((prev) => ({ ...prev, stok: numeric }));
60:     if (errors.stok) setErrors((prev) => ({ ...prev, stok: null }));
61:   };
62: 
63:   const formatNumberInput = (val) => {
64:     if (!val) return '';
65:     return parseInt(val, 10).toLocaleString('id-ID');
66:   };
67: 
68:   const validate = () => {
69:     const newErrors = {};
70:     if (!formData.nama_menu.trim()) newErrors.nama_menu = 'Nama menu wajib diisi';
71:     if (!formData.harga_jual || parseInt(formData.harga_jual, 10) <= 0)
72:       newErrors.harga_jual = 'Harga wajib diisi dan lebih dari 0';
73:     if (!formData.stok && formData.stok !== '0') newErrors.stok = 'Stok wajib diisi';
74:     setErrors(newErrors);
75:     return Object.keys(newErrors).length === 0;
76:   };
77: 
78:   // ── CRUD Handlers ─────────────────────────────────────
79:   const openAddModal = () => {
80:     setEditingMenu(null);
81:     setFormData({
82:       nama_menu: '',
83:       kategori: 'Lauk',
84:       harga_jual: '',
85:       stok: '',
86:       status: 'Tersedia',
87:     });
88:     setErrors({});
89:     setShowFormModal(true);
90:     setActiveActionId(null);
91:   };
92: 
93:   const openEditModal = (menu) => {
94:     setEditingMenu(menu);
95:     setFormData({
96:       nama_menu: menu.nama_menu || menu.nama,
97:       kategori: menu.kategori,
98:       harga_jual: String(menu.harga_jual || menu.harga),
99:       stok: String(menu.stok),
100:       status: menu.status,
101:     });
102:     setErrors({});
103:     setShowFormModal(true);
104:     setActiveActionId(null);
105:   };
106: 
107:   const handleSubmit = async (e) => {
108:     e.preventDefault();
109:     if (!validate()) return;
110: 
111:     setIsSubmitting(true);
112: 
113:     const payload = {
114:       nama_menu: formData.nama_menu.trim(),
115:       kategori: formData.kategori,
116:       harga_jual: parseInt(formData.harga_jual, 10),
117:       stok: parseInt(formData.stok, 10),
118:       status: formData.status,
119:     };
120: 
121:     let result;
122:     if (editingMenu) {
123:       result = await updateMenuItem(editingMenu.id_menu || editingMenu.id, payload);
124:     } else {
125:       result = await addMenu(payload);
126:     }
127: 
128:     setIsSubmitting(false);
129: 
130:     if (result.success) {
131:       resetAndCloseModal();
132:     } else {
133:       alert(result.message || 'Gagal menyimpan menu');
134:     }
135:   };
136: 
137:   const handleDelete = async (menu) => {
138:     if (window.confirm(`Hapus menu "${menu.nama}"?`)) {
139:       const result = await deleteMenuItem(menu.id_menu || menu.id);
140:       if (!result.success) {
141:         alert(result.message || 'Gagal menghapus menu');
142:       }
143:     }
144:     setActiveActionId(null);
145:   };
146: 
147:   const resetAndCloseModal = () => {
148:     setShowFormModal(false);
149:     setEditingMenu(null);
150:     setFormData({
151:       nama_menu: '',
152:       kategori: 'Lauk',
153:       harga_jual: '',
154:       stok: '',
155:       status: 'Tersedia',
156:     });
157:     setErrors({});
158:     setShowKategoriDropdown(false);
159:     setShowStatusDropdown(false);
160:   };
161: 
162:   // ── Render ────────────────────────────────────────────
163:   return (
164:     <div style={styles.container}>
165:       {/* ── Header ── */}
166:       <div style={styles.header}>
167:         <div style={styles.headerTitle}>Kelola Menu</div>
168:         <div style={styles.searchBox}>
169:           <IconSearch size={18} color="#888780" />
170:           <input
171:             style={styles.searchInput}
172:             placeholder="Cari menu..."
173:             value={search}
174:             onChange={(e) => setSearch(e.target.value)}
175:           />
176:         </div>
177:       </div>
178: 
179:       {/* ── Menu List ── */}
180:       <div style={styles.content}>
181:         {filteredMenus.length === 0 && (
182:           <div style={styles.emptyState}>
183:             <div style={{ fontSize: '40px', marginBottom: '8px' }}>📋</div>
184:             <div style={{ fontSize: '14px', color: '#888780', fontWeight: '600' }}>
185:               {search ? 'Menu tidak ditemukan' : 'Belum ada menu'}
186:             </div>
187:           </div>
188:         )}
189:         {filteredMenus.map((menu) => (
190:           <div key={menu.id} style={styles.menuCard}>
191:             <div style={styles.menuImg}>🍲</div>
192:             <div style={styles.menuInfo}>
193:               <div style={styles.menuName}>{menu.nama}</div>
194:               <div style={styles.menuCategory}>{menu.kategori}</div>
195:               <div style={styles.menuPrice}>{formatIDR(menu.harga)}</div>
196:             </div>
197:             <div style={styles.menuActionWrapper}>
198:               <div style={menu.status === 'Habis' ? styles.badgeHabis : styles.badgeTersedia}>
199:                 {menu.status}
200:               </div>
201: 
202:               {/* Action Button (3 dots) */}
203:               <div style={styles.actionContainer}>
204:                 <IconDotsVertical
205:                   size={20}
206:                   color="#888780"
207:                   style={{ cursor: 'pointer' }}
208:                   onClick={() => setActiveActionId(activeActionId === menu.id ? null : menu.id)}
209:                 />
210: 
211:                 {/* Action Dropdown */}
212:                 {activeActionId === menu.id && (
213:                   <>
214:                     <div style={styles.actionOverlay} onClick={() => setActiveActionId(null)} />
215:                     <div style={styles.actionDropdown}>
216:                       <button style={styles.actionItem} onClick={() => openEditModal(menu)}>
217:                         <IconPencil size={14} /> Edit Menu
218:                       </button>
219:                       <button
220:                         style={{ ...styles.actionItem, color: '#C94040' }}
221:                         onClick={() => handleDelete(menu)}
222:                       >
223:                         <IconTrash size={14} /> Hapus Menu
224:                       </button>
225:                     </div>
226:                   </>
227:                 )}
228:               </div>
229:             </div>
230:           </div>
231:         ))}
232:       </div>
233: 
234:       {/* ── FAB ── */}
235:       <button style={styles.fab} onClick={openAddModal}>
236:         <IconPlus size={24} />
237:       </button>
238: 
239:       {/* ── Modal Tambah/Edit Menu ── */}
240:       {showFormModal && (
241:         <div style={styles.modalOverlay} onClick={resetAndCloseModal}>
242:           <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
243:             <div style={styles.modalHeader}>
244:               <div style={styles.modalTitle}>{editingMenu ? 'Edit Menu' : 'Tambah Menu Baru'}</div>
245:               <button style={styles.closeBtn} onClick={resetAndCloseModal}>
246:                 <IconX size={20} />
247:               </button>
248:             </div>
249: 
250:             <form onSubmit={handleSubmit} style={styles.modalBody}>
251:               {/* Nama Menu */}
252:               <div style={styles.formGroup}>
253:                 <label style={styles.label}>
254:                   Nama Menu <span style={{ color: '#C94040' }}>*</span>
255:                 </label>
256:                 <input
257:                   type="text"
258:                   style={{ ...styles.input, ...(errors.nama_menu ? styles.inputError : {}) }}
259:                   placeholder="Contoh: Lele Goreng"
260:                   value={formData.nama_menu}
261:                   onChange={(e) => handleInputChange('nama_menu', e.target.value)}
262:                   autoFocus
263:                 />
264:                 {errors.nama_menu && <div style={styles.errorText}>{errors.nama_menu}</div>}
265:               </div>
266: 
267:               {/* Kategori */}
268:               <div style={styles.formGroup}>
269:                 <label style={styles.label}>
270:                   Kategori <span style={{ color: '#C94040' }}>*</span>
271:                 </label>
272:                 <div style={styles.selectWrapper}>
273:                   <button
274:                     type="button"
275:                     style={styles.selectBtn}
276:                     onClick={() => {
277:                       setShowStatusDropdown(false);
278:                       setShowKategoriDropdown(!showKategoriDropdown);
279:                     }}
280:                   >
281:                     {formData.kategori}
282:                     <IconChevronDown size={16} color="#888780" />
283:                   </button>
284:                   {showKategoriDropdown && (
285:                     <div style={styles.dropdown}>
286:                       {KATEGORI_OPTIONS.map((kat) => (
287:                         <button
288:                           key={kat}
289:                           type="button"
290:                           style={{
291:                             ...styles.dropdownItem,
292:                             ...(formData.kategori === kat ? styles.dropdownItemActive : {}),
293:                           }}
294:                           onClick={() => {
295:                             handleInputChange('kategori', kat);
296:                             setShowKategoriDropdown(false);
297:                           }}
298:                         >
299:                           {kat}
300:                           {formData.kategori === kat && <IconCheck size={14} color="#4361EE" />}
301:                         </button>
302:                       ))}
303:                     </div>
304:                   )}
305:                 </div>
306:               </div>
307: 
308:               {/* Harga Jual */}
309:               <div style={styles.formGroup}>
310:                 <label style={styles.label}>
311:                   Harga Jual (Rp) <span style={{ color: '#C94040' }}>*</span>
312:                 </label>
313:                 <div style={styles.hargaWrapper}>
314:                   <span style={styles.hargaPrefix}>Rp</span>
315:                   <input
316:                     type="text"
317:                     style={{
318:                       ...styles.input,
319:                       ...styles.hargaInput,
320:                       ...(errors.harga_jual ? styles.inputError : {}),
321:                     }}
322:                     placeholder="0"
323:                     value={formatNumberInput(formData.harga_jual)}
324:                     onChange={(e) => handleHargaChange(e.target.value)}
325:                   />
326:                 </div>
327:                 {errors.harga_jual && <div style={styles.errorText}>{errors.harga_jual}</div>}
328:               </div>
329: 
330:               {/* Stok */}
331:               <div style={styles.formGroup}>
332:                 <label style={styles.label}>
333:                   Stok <span style={{ color: '#C94040' }}>*</span>
334:                 </label>
335:                 <input
336:                   type="text"
337:                   style={{ ...styles.input, ...(errors.stok ? styles.inputError : {}) }}
338:                   placeholder="Contoh: 20"
339:                   value={formatNumberInput(formData.stok)}
340:                   onChange={(e) => handleStokChange(e.target.value)}
341:                 />
342:                 {errors.stok && <div style={styles.errorText}>{errors.stok}</div>}
343:               </div>
344: 
345:               {/* Status */}
346:               <div style={styles.formGroup}>
347:                 <label style={styles.label}>Status</label>
348:                 <div style={styles.selectWrapper}>
349:                   <button
350:                     type="button"
351:                     style={styles.selectBtn}
352:                     onClick={() => {
353:                       setShowKategoriDropdown(false);
354:                       setShowStatusDropdown(!showStatusDropdown);
355:                     }}
356:                   >
357:                     <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
358:                       <span
359:                         style={{
360:                           width: '8px',
361:                           height: '8px',
362:                           borderRadius: '50%',
363:                           background: formData.status === 'Tersedia' ? '#3B6D11' : '#993C1D',
364:                         }}
365:                       />
366:                       {formData.status}
367:                     </span>
368:                     <IconChevronDown size={16} color="#888780" />
369:                   </button>
370:                   {showStatusDropdown && (
371:                     <div style={styles.dropdown}>
372:                       {STATUS_OPTIONS.map((st) => (
373:                         <button
374:                           key={st}
375:                           type="button"
376:                           style={{
377:                             ...styles.dropdownItem,
378:                             ...(formData.status === st ? styles.dropdownItemActive : {}),
379:                           }}
380:                           onClick={() => {
381:                             handleInputChange('status', st);
382:                             setShowStatusDropdown(false);
383:                           }}
384:                         >
385:                           <span
386:                             style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
387:                           >
388:                             <span
389:                               style={{
390:                                 width: '8px',
391:                                 height: '8px',
392:                                 borderRadius: '50%',
393:                                 background: st === 'Tersedia' ? '#3B6D11' : '#993C1D',
394:                               }}
395:                             />
396:                             {st}
397:                           </span>
398:                           {formData.status === st && <IconCheck size={14} color="#4361EE" />}
399:                         </button>
400:                       ))}
401:                     </div>
402:                   )}
403:                 </div>
404:               </div>
405: 
406:               {/* Buttons */}
407:               <div style={styles.btnRow}>
408:                 <button
409:                   type="button"
410:                   style={styles.cancelBtn}
411:                   onClick={resetAndCloseModal}
412:                   disabled={isSubmitting}
413:                 >
414:                   Batal
415:                 </button>
416:                 <button type="submit" style={styles.submitBtn} disabled={isSubmitting}>
417:                   {isSubmitting ? (
418:                     <IconLoader2 size={16} style={{ animation: 'spin 1s linear infinite' }} />
419:                   ) : editingMenu ? (
420:                     <IconCheck size={16} />
421:                   ) : (
422:                     <IconPlus size={16} />
423:                   )}
424:                   {isSubmitting ? 'Menyimpan...' : editingMenu ? 'Simpan Perubahan' : 'Tambah Menu'}
425:                 </button>
426:               </div>
427:             </form>
428:           </div>
429:         </div>
430:       )}
431:     </div>
432:   );
433: }
434: 
435: // ── Styles ──────────────────────────────────────────────
436: const styles = {
437:   container: { height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' },
438:   header: { background: '#C94040', padding: '24px 20px 40px', borderRadius: '0 0 24px 24px' },
439:   headerTitle: {
440:     fontSize: '18px',
441:     fontWeight: '800',
442:     color: '#fff',
443:     textAlign: 'center',
444:     marginBottom: '16px',
445:   },
446:   searchBox: {
447:     display: 'flex',
448:     alignItems: 'center',
449:     background: '#fff',
450:     padding: '10px 14px',
451:     borderRadius: '12px',
452:     gap: '8px',
453:   },
454:   searchInput: {
455:     border: 'none',
456:     outline: 'none',
457:     flex: 1,
458:     fontSize: '14px',
459:     fontFamily: 'inherit',
460:   },
461:   content: {
462:     padding: '20px 16px 80px',
463:     flex: 1,
464:     overflowY: 'auto',
465:     display: 'flex',
466:     flexDirection: 'column',
467:     gap: '12px',
468:     marginTop: '-20px',
469:   },
470:   emptyState: {
471:     display: 'flex',
472:     flexDirection: 'column',
473:     alignItems: 'center',
474:     justifyContent: 'center',
475:     padding: '40px 0',
476:   },
477:   menuCard: {
478:     background: '#fff',
479:     borderRadius: '16px',
480:     padding: '12px',
481:     display: 'flex',
482:     gap: '12px',
483:     alignItems: 'center',
484:     border: '1.5px solid #EAE5DA',
485:   },
486:   menuImg: {
487:     width: '48px',
488:     height: '48px',
489:     borderRadius: '10px',
490:     background: '#F1EFE8',
491:     display: 'flex',
492:     alignItems: 'center',
493:     justifyContent: 'center',
494:     fontSize: '24px',
495:   },
496:   menuInfo: { flex: 1 },
497:   menuName: { fontSize: '14px', fontWeight: '800', color: '#2C2C2A' },
498:   menuCategory: { fontSize: '11px', color: '#888780', fontWeight: '600', marginBottom: '4px' },
499:   menuPrice: { fontSize: '12px', fontWeight: '700', color: '#C94040' },
500: 
501:   // Action Wrapper & Badges
502:   menuActionWrapper: {
503:     display: 'flex',
504:     flexDirection: 'column',
505:     alignItems: 'flex-end',
506:     justifyContent: 'space-between',
507:     gap: '10px',
508:     position: 'relative',
509:   },
510:   badgeTersedia: {
511:     fontSize: '10px',
512:     fontWeight: '700',
513:     background: '#EAF3DE',
514:     color: '#3B6D11',
515:     padding: '2px 8px',
516:     borderRadius: '4px',
517:   },
518:   badgeHabis: {
519:     fontSize: '10px',
520:     fontWeight: '700',
521:     background: '#F5C4B3',
522:     color: '#993C1D',
523:     padding: '2px 8px',
524:     borderRadius: '4px',
525:   },
526: 
527:   // Action Dropdown (3-dots)
528:   actionContainer: { position: 'relative' },
529:   actionOverlay: { position: 'fixed', inset: 0, zIndex: 9 }, // Untuk menutup dropdown saat klik luar
530:   actionDropdown: {
531:     position: 'absolute',
532:     top: '24px',
533:     right: 0,
534:     background: '#fff',
535:     border: '1.5px solid #EAE5DA',
536:     borderRadius: '12px',
537:     boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
538:     zIndex: 10,
539:     overflow: 'hidden',
540:     minWidth: '160px',
541:   },
542:   actionItem: {
543:     width: '100%',
544:     padding: '10px 14px',
545:     border: 'none',
546:     background: 'transparent',
547:     fontSize: '13px',
548:     fontFamily: 'inherit',
549:     color: '#2C2C2A',
550:     cursor: 'pointer',
551:     display: 'flex',
552:     alignItems: 'center',
553:     gap: '8px',
554:     textAlign: 'left',
555:     fontWeight: '600',
556:   },
557: 
558:   fab: {
559:     position: 'absolute',
560:     bottom: '80px',
561:     right: '16px',
562:     width: '56px',
563:     height: '56px',
564:     borderRadius: '50%',
565:     background: '#4361EE',
566:     color: '#fff',
567:     display: 'flex',
568:     alignItems: 'center',
569:     justifyContent: 'center',
570:     border: 'none',
571:     cursor: 'pointer',
572:     boxShadow: '0 4px 12px rgba(67, 97, 238, 0.4)',
573:   },
574: 
575:   // ── Modal ──
576:   modalOverlay: {
577:     position: 'fixed',
578:     inset: 0,
579:     background: 'rgba(0,0,0,0.45)',
580:     display: 'flex',
581:     alignItems: 'flex-end',
582:     justifyContent: 'center',
583:     zIndex: 9999,
584:     animation: 'fadeIn 0.2s ease',
585:   },
586:   modalContent: {
587:     background: '#fff',
588:     width: '100%',
589:     maxWidth: '480px',
590:     maxHeight: '92vh',
591:     borderRadius: '24px 24px 0 0',
592:     display: 'flex',
593:     flexDirection: 'column',
594:     animation: 'slideUp 0.3s ease',
595:     overflow: 'hidden',
596:   },
597:   modalHeader: {
598:     display: 'flex',
599:     alignItems: 'center',
600:     justifyContent: 'space-between',
601:     padding: '20px 20px 12px',
602:     borderBottom: '1px solid #EAE5DA',
603:   },
604:   modalTitle: { fontSize: '17px', fontWeight: '800', color: '#2C2C2A' },
605:   closeBtn: {
606:     background: '#F1EFE8',
607:     border: 'none',
608:     borderRadius: '10px',
609:     width: '36px',
610:     height: '36px',
611:     display: 'flex',
612:     alignItems: 'center',
613:     justifyContent: 'center',
614:     cursor: 'pointer',
615:     color: '#2C2C2A',
616:   },
617:   modalBody: {
618:     padding: '20px',
619:     overflowY: 'auto',
620:     flex: 1,
621:     display: 'flex',
622:     flexDirection: 'column',
623:     gap: '16px',
624:   },
625: 
626:   // ── Form ──
627:   formGroup: { display: 'flex', flexDirection: 'column', gap: '6px' },
628:   label: { fontSize: '13px', fontWeight: '700', color: '#2C2C2A' },
629:   input: {
630:     border: '1.5px solid #EAE5DA',
631:     borderRadius: '12px',
632:     padding: '12px 14px',
633:     fontSize: '14px',
634:     fontFamily: 'inherit',
635:     outline: 'none',
636:     background: '#FAFAF8',
637:     color: '#2C2C2A',
638:     transition: 'border-color 0.2s',
639:   },
640:   inputError: { borderColor: '#C94040' },
641:   errorText: { fontSize: '11px', color: '#C94040', fontWeight: '600' },
642: 
643:   // ── Select / Dropdown ──
644:   selectWrapper: { position: 'relative' },
645:   selectBtn: {
646:     width: '100%',
647:     border: '1.5px solid #EAE5DA',
648:     borderRadius: '12px',
649:     padding: '12px 14px',
650:     fontSize: '14px',
651:     fontFamily: 'inherit',
652:     background: '#FAFAF8',
653:     color: '#2C2C2A',
654:     display: 'flex',
655:     alignItems: 'center',
656:     justifyContent: 'space-between',
657:     cursor: 'pointer',
658:     outline: 'none',
659:   },
660:   dropdown: {
661:     position: 'absolute',
662:     top: 'calc(100% + 4px)',
663:     left: 0,
664:     right: 0,
665:     background: '#fff',
666:     border: '1.5px solid #EAE5DA',
667:     borderRadius: '12px',
668:     boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
669:     zIndex: 10,
670:     overflow: 'hidden',
671:   },
672:   dropdownItem: {
673:     width: '100%',
674:     padding: '10px 14px',
675:     border: 'none',
676:     background: 'transparent',
677:     fontSize: '14px',
678:     fontFamily: 'inherit',
679:     color: '#2C2C2A',
680:     cursor: 'pointer',
681:     display: 'flex',
682:     alignItems: 'center',
683:     justifyContent: 'space-between',
684:     textAlign: 'left',
685:   },
686:   dropdownItemActive: { background: '#EEF1FF', fontWeight: '700', color: '#4361EE' },
687: 
688:   // ── Harga ──
689:   hargaWrapper: {
690:     display: 'flex',
691:     alignItems: 'center',
692:     border: '1.5px solid #EAE5DA',
693:     borderRadius: '12px',
694:     background: '#FAFAF8',
695:     overflow: 'hidden',
696:   },
697:   hargaPrefix: {
698:     padding: '0 0 0 14px',
699:     fontSize: '14px',
700:     fontWeight: '700',
701:     color: '#888780',
702:     userSelect: 'none',
703:   },
704:   hargaInput: { border: 'none', borderRadius: 0 },
705: 
706:   // ── Buttons ──
707:   btnRow: { display: 'flex', gap: '10px', paddingTop: '4px', paddingBottom: '10px' },
708:   cancelBtn: {
709:     flex: 1,
710:     padding: '13px',
711:     borderRadius: '14px',
712:     border: '1.5px solid #EAE5DA',
713:     background: '#fff',
714:     color: '#2C2C2A',
715:     fontSize: '14px',
716:     fontWeight: '700',
717:     fontFamily: 'inherit',
718:     cursor: 'pointer',
719:   },
720:   submitBtn: {
721:     flex: 1,
722:     padding: '13px',
723:     borderRadius: '14px',
724:     border: 'none',
725:     background: '#4361EE',
726:     color: '#fff',
727:     fontSize: '14px',
728:     fontWeight: '700',
729:     fontFamily: 'inherit',
730:     cursor: 'pointer',
731:     display: 'flex',
732:     alignItems: 'center',
733:     justifyContent: 'center',
734:     gap: '6px',
735:     boxShadow: '0 4px 12px rgba(67, 97, 238, 0.3)',
736:   },
737: };

(End of file - total 737 lines)
</content>
```

**Tool: read**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\pemilik\\LaporanPenjualan.jsx"
}
```

**Output:**
```
<path>E:\UDIN\Kuliah\Mata Kuliah\Rekayasa Perangkat Lunak\Tugas 6\wdms-app\wdms-frontend\src\pages\pemilik\LaporanPenjualan.jsx</path>
<type>file</type>
<content>
1: import React, { useEffect, useState } from 'react';
2: import { useAppContext } from '../../context/AppContext';
3: import { IconDownload, IconPrinter, IconX } from '@tabler/icons-react';
4: 
5: const PERIODES = [
6:   { label: 'Hari Ini', value: 'hari' },
7:   { label: '7 Hari', value: 'minggu' },
8:   { label: 'Bulan Ini', value: 'bulan' },
9: ];
10: 
11: export default function LaporanPenjualan() {
12:   const { fetchLaporan } = useAppContext();
13:   const [periode, setPeriode] = useState('hari');
14:   const [stats, setStats] = useState({ total_transaksi: 0, total_pendapatan: 0 });
15:   const [menuTerlaris, setMenuTerlaris] = useState([]);
16:   const [showPreview, setShowPreview] = useState(false);
17: 
18:   useEffect(() => {
19:     fetchLaporan(periode).then((data) => {
20:       if (data) {
21:         setStats(data.stats);
22:         setMenuTerlaris(data.menuTerlaris || []);
23:       }
24:     });
25:   }, [fetchLaporan, periode]);
26: 
27:   const formatIDR = (num) => `Rp ${parseFloat(num || 0).toLocaleString('id-ID')}`;
28:   const maxTerjual = menuTerlaris.length > 0 ? menuTerlaris[0].total_terjual : 1;
29: 
30:   const handleExport = () => {
31:     setShowPreview(true);
32:   };
33: 
34:   const handlePrint = () => {
35:     window.print();
36:   };
37: 
38:   const periodeLabel = PERIODES.find((p) => p.value === periode)?.label || 'Hari Ini';
39: 
40:   return (
41:     <div style={styles.container}>
42:       <style>{`
43:         @media print {
44:           body { background: #fff; }
45:           body * { visibility: hidden; }
46:           .print-report-preview, .print-report-preview * { visibility: visible; }
47:           .print-report-preview { position: absolute; left: 0; top: 0; width: 100%; box-shadow: none; }
48:           .print-report-preview .previewActions { display: none !important; }
49:         }
50:       `}</style>
51: 
52:       <div style={styles.header}>
53:         <div style={styles.headerTitle}>Laporan Penjualan</div>
54:         <div style={styles.periodeTabs}>
55:           {PERIODES.map((p) => (
56:             <button
57:               key={p.value}
58:               style={periode === p.value ? styles.tabActive : styles.tabInactive}
59:               onClick={() => setPeriode(p.value)}
60:             >
61:               {p.label}
62:             </button>
63:           ))}
64:         </div>
65:       </div>
66: 
67:       <div style={styles.content}>
68:         <div style={styles.statsRow}>
69:           <div style={styles.statCard}>
70:             <div style={styles.statLabel}>Total Pendapatan</div>
71:             <div style={{ ...styles.statValue, color: '#C94040' }}>
72:               {formatIDR(stats.total_pendapatan)}
73:             </div>
74:           </div>
75:           <div style={styles.statCard}>
76:             <div style={styles.statLabel}>Total Transaksi</div>
77:             <div style={{ ...styles.statValue, color: '#2C2C2A' }}>{stats.total_transaksi}</div>
78:           </div>
79:         </div>
80: 
81:         <div style={styles.sectionTitle}>Menu Terlaris</div>
82:         <div style={styles.menuPopular}>
83:           {menuTerlaris.length === 0 ? (
84:             <div
85:               style={{ color: '#888780', fontSize: '12px', textAlign: 'center', padding: '8px' }}
86:             >
87:               Belum ada data penjualan untuk periode ini.
88:             </div>
89:           ) : (
90:             menuTerlaris.map((menu, i) => (
91:               <div key={i} style={styles.menuItem}>
92:                 <div style={styles.menuName}>{menu.nama_menu}</div>
93:                 <div style={styles.menuBarBg}>
94:                   <div
95:                     style={{
96:                       ...styles.menuBarFill,
97:                       width: `${(menu.total_terjual / maxTerjual) * 100}%`,
98:                     }}
99:                   />
100:                 </div>
101:                 <div style={styles.menuQty}>{menu.total_terjual} porsi</div>
102:               </div>
103:             ))
104:           )}
105:         </div>
106: 
107:         <div style={styles.sectionTitle}>Grafik Penjualan</div>
108:         <div style={styles.chartCard}>
109:           <div style={styles.chartPlaceholder}>
110:             {[40, 70, 50, 90, 60, 80, 100].map((h, i) => (
111:               <div key={i} style={{ ...styles.bar, height: `${h}%` }}></div>
112:             ))}
113:           </div>
114:           <div style={styles.chartLabels}>
115:             <span>Sen</span>
116:             <span>Sel</span>
117:             <span>Rab</span>
118:             <span>Kam</span>
119:             <span>Jum</span>
120:             <span>Sab</span>
121:             <span>Min</span>
122:           </div>
123:         </div>
124: 
125:         <button style={styles.exportBtn} onClick={handleExport}>
126:           <IconDownload size={18} /> Export Laporan
127:         </button>
128:       </div>
129: 
130:       {showPreview && (
131:         <div className="print-report-preview" style={styles.previewOverlay}>
132:           <div style={styles.previewSheet}>
133:             <div style={styles.previewHeader}>
134:               <div>
135:                 <div style={styles.previewTitle}>Preview Laporan</div>
136:                 <div style={styles.previewSubtitle}>WARTEG PAK BUDI • {periodeLabel}</div>
137:               </div>
138:               <button style={styles.previewClose} onClick={() => setShowPreview(false)}>
139:                 <IconX size={18} />
140:               </button>
141:             </div>
142: 
143:             <div style={styles.previewBody}>
144:               <div style={styles.previewBrand}>LAPORAN PENJUALAN</div>
145:               <div style={styles.previewMeta}>Periode: {periodeLabel}</div>
146:               <div style={styles.previewDivider} />
147: 
148:               <div style={styles.previewStatsGrid}>
149:                 <div style={styles.previewStatBox}>
150:                   <div style={styles.previewStatLabel}>Total Pendapatan</div>
151:                   <div style={styles.previewStatValue}>{formatIDR(stats.total_pendapatan)}</div>
152:                 </div>
153:                 <div style={styles.previewStatBox}>
154:                   <div style={styles.previewStatLabel}>Total Transaksi</div>
155:                   <div style={styles.previewStatValue}>{stats.total_transaksi}</div>
156:                 </div>
157:               </div>
158: 
159:               <div style={styles.previewSectionTitle}>Menu Terlaris</div>
160:               <div style={styles.previewList}>
161:                 {menuTerlaris.length === 0 ? (
162:                   <div style={styles.previewEmpty}>Belum ada data untuk periode ini.</div>
163:                 ) : (
164:                   menuTerlaris.map((menu, i) => (
165:                     <div key={i} style={styles.previewItemRow}>
166:                       <div style={styles.previewItemName}>{menu.nama_menu}</div>
167:                       <div style={styles.previewItemQty}>{menu.total_terjual} porsi</div>
168:                     </div>
169:                   ))
170:                 )}
171:               </div>
172:             </div>
173: 
174:             <div style={styles.previewActions}>
175:               <button style={styles.previewBtnSecondary} onClick={() => setShowPreview(false)}>
176:                 Tutup
177:               </button>
178:               <button style={styles.previewBtnPrimary} onClick={handlePrint}>
179:                 <IconPrinter size={16} /> Cetak
180:               </button>
181:             </div>
182:           </div>
183:         </div>
184:       )}
185:     </div>
186:   );
187: }
188: 
189: const styles = {
190:   container: { height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' },
191:   header: { background: '#C94040', padding: '24px 20px 40px', borderRadius: '0 0 24px 24px' },
192:   headerTitle: {
193:     fontSize: '18px',
194:     fontWeight: '800',
195:     color: '#fff',
196:     textAlign: 'center',
197:     marginBottom: '14px',
198:   },
199:   periodeTabs: {
200:     display: 'flex',
201:     background: 'rgba(255,255,255,0.2)',
202:     borderRadius: '10px',
203:     padding: '3px',
204:     gap: '3px',
205:   },
206:   tabActive: {
207:     flex: 1,
208:     background: '#fff',
209:     color: '#C94040',
210:     border: 'none',
211:     borderRadius: '8px',
212:     padding: '9px 0',
213:     fontWeight: '800',
214:     fontSize: '12px',
215:     cursor: 'pointer',
216:     fontFamily: 'inherit',
217:   },
218:   tabInactive: {
219:     flex: 1,
220:     background: 'transparent',
221:     color: 'rgba(255,255,255,0.85)',
222:     border: 'none',
223:     borderRadius: '8px',
224:     padding: '9px 0',
225:     fontWeight: '700',
226:     fontSize: '12px',
227:     cursor: 'pointer',
228:     fontFamily: 'inherit',
229:   },
230:   content: { padding: '20px 16px 80px', flex: 1, overflowY: 'auto', marginTop: '-20px' },
231:   statsRow: { display: 'flex', gap: '10px', marginBottom: '20px' },
232:   statCard: {
233:     flex: 1,
234:     background: '#fff',
235:     borderRadius: '16px',
236:     padding: '16px',
237:     border: '1.5px solid #EAE5DA',
238:     textAlign: 'center',
239:   },
240:   statLabel: { fontSize: '11px', fontWeight: '700', color: '#888780', marginBottom: '8px' },
241:   statValue: { fontSize: '18px', fontWeight: '800' },
242:   sectionTitle: { fontSize: '14px', fontWeight: '800', color: '#5F5E5A', marginBottom: '12px' },
243:   menuPopular: {
244:     background: '#fff',
245:     borderRadius: '16px',
246:     padding: '14px 16px',
247:     marginBottom: '20px',
248:     border: '1.5px solid #EAE5DA',
249:   },
250:   menuItem: {
251:     display: 'flex',
252:     alignItems: 'center',
253:     justifyContent: 'space-between',
254:     marginBottom: '8px',
255:   },
256:   menuBarBg: {
257:     flex: 1,
258:     height: '8px',
259:     background: '#F1EFE8',
260:     borderRadius: '8px',
261:     margin: '0 10px',
262:     overflow: 'hidden',
263:   },
264:   menuBarFill: { height: '100%', borderRadius: '8px', background: '#C94040' },
265:   menuName: { fontSize: '12px', fontWeight: '700', color: '#2C2C2A', minWidth: '90px' },
266:   menuQty: {
267:     fontSize: '11px',
268:     color: '#888780',
269:     fontWeight: '600',
270:     minWidth: '40px',
271:     textAlign: 'right',
272:   },
273:   chartCard: {
274:     background: '#fff',
275:     borderRadius: '16px',
276:     padding: '16px',
277:     marginBottom: '20px',
278:     border: '1.5px solid #EAE5DA',
279:   },
280:   chartPlaceholder: {
281:     height: '120px',
282:     display: 'flex',
283:     alignItems: 'flex-end',
284:     justifyContent: 'space-between',
285:     padding: '0 10px',
286:     marginBottom: '10px',
287:   },
288:   bar: { width: '24px', background: '#C94040', borderRadius: '4px 4px 0 0', opacity: 0.8 },
289:   chartLabels: {
290:     display: 'flex',
291:     justifyContent: 'space-between',
292:     padding: '0 10px',
293:     fontSize: '10px',
294:     color: '#888780',
295:     fontWeight: '700',
296:   },
297:   exportBtn: {
298:     width: '100%',
299:     background: '#fff',
300:     border: '1.5px solid #C94040',
301:     color: '#C94040',
302:     padding: '14px',
303:     borderRadius: '14px',
304:     fontSize: '14px',
305:     fontWeight: '800',
306:     display: 'flex',
307:     alignItems: 'center',
308:     justifyContent: 'center',
309:     gap: '8px',
310:     cursor: 'pointer',
311:     fontFamily: 'inherit',
312:   },
313:   previewOverlay: {
314:     position: 'fixed',
315:     inset: 0,
316:     background: 'rgba(12, 18, 20, 0.62)',
317:     display: 'flex',
318:     alignItems: 'center',
319:     justifyContent: 'center',
320:     padding: '18px',
321:     zIndex: 1000,
322:   },
323:   previewSheet: {
324:     width: '100%',
325:     maxWidth: '430px',
326:     background: '#fff',
327:     borderRadius: '24px',
328:     overflow: 'hidden',
329:     boxShadow: '0 20px 50px rgba(0,0,0,0.25)',
330:   },
331:   previewHeader: {
332:     background: '#C94040',
333:     padding: '16px 18px',
334:     display: 'flex',
335:     justifyContent: 'space-between',
336:     alignItems: 'center',
337:   },
338:   previewTitle: { fontSize: '16px', fontWeight: '800', color: '#fff' },
339:   previewSubtitle: { fontSize: '12px', color: 'rgba(255,255,255,0.85)', marginTop: '2px' },
340:   previewClose: {
341:     background: 'rgba(255,255,255,0.2)',
342:     border: 'none',
343:     borderRadius: '999px',
344:     color: '#fff',
345:     width: '34px',
346:     height: '34px',
347:     display: 'flex',
348:     alignItems: 'center',
349:     justifyContent: 'center',
350:     cursor: 'pointer',
351:   },
352:   previewBody: { padding: '18px' },
353:   previewBrand: {
354:     fontSize: '18px',
355:     fontWeight: '800',
356:     color: '#2C2C2A',
357:     textAlign: 'center',
358:     marginBottom: '4px',
359:   },
360:   previewMeta: { fontSize: '12px', color: '#888780', textAlign: 'center', marginBottom: '10px' },
361:   previewDivider: { borderTop: '1.5px dashed #D3D1C7', margin: '10px 0 14px' },
362:   previewStatsGrid: {
363:     display: 'grid',
364:     gridTemplateColumns: '1fr 1fr',
365:     gap: '10px',
366:     marginBottom: '14px',
367:   },
368:   previewStatBox: {
369:     background: '#FFF6F6',
370:     border: '1px solid #F2D1D1',
371:     borderRadius: '14px',
372:     padding: '12px',
373:   },
374:   previewStatLabel: { fontSize: '10px', fontWeight: '700', color: '#888780', marginBottom: '6px' },
375:   previewStatValue: { fontSize: '15px', fontWeight: '800', color: '#C94040' },
376:   previewSectionTitle: {
377:     fontSize: '13px',
378:     fontWeight: '800',
379:     color: '#5F5E5A',
380:     marginBottom: '10px',
381:   },
382:   previewList: { display: 'flex', flexDirection: 'column', gap: '8px' },
383:   previewItemRow: {
384:     display: 'flex',
385:     justifyContent: 'space-between',
386:     alignItems: 'center',
387:     padding: '10px 12px',
388:     background: '#FAFAFA',
389:     borderRadius: '12px',
390:   },
391:   previewItemName: { fontSize: '12px', fontWeight: '700', color: '#2C2C2A' },
392:   previewItemQty: { fontSize: '11px', fontWeight: '700', color: '#C94040' },
393:   previewEmpty: { textAlign: 'center', color: '#888780', fontSize: '12px', padding: '6px 0' },
394:   previewActions: { display: 'flex', gap: '10px', padding: '0 18px 18px' },
395:   previewBtnSecondary: {
396:     flex: 1,
397:     border: '1.5px solid #D3D1C7',
398:     background: '#fff',
399:     color: '#5F5E5A',
400:     borderRadius: '14px',
401:     padding: '12px',
402:     fontFamily: 'inherit',
403:     fontWeight: '800',
404:     cursor: 'pointer',
405:   },
406:   previewBtnPrimary: {
407:     flex: 1,
408:     border: 'none',
409:     background: '#C94040',
410:     color: '#fff',
411:     borderRadius: '14px',
412:     padding: '12px',
413:     fontFamily: 'inherit',
414:     fontWeight: '800',
415:     cursor: 'pointer',
416:     display: 'flex',
417:     alignItems: 'center',
418:     justifyContent: 'center',
419:     gap: '6px',
420:   },
421: };
422: 
423: if (typeof window !== 'undefined') {
424:   window.addEventListener('beforeprint', () => {
425:     const root = document.body;
426:     if (root) {
427:       root.style.background = '#fff';
428:       root.style.padding = '0';
429:     }
430:   });
431: 
432:   window.addEventListener('afterprint', () => {
433:     const root = document.body;
434:     if (root) {
435:       root.style.background = '';
436:       root.style.padding = '';
437:     }
438:   });
439: }

(End of file - total 439 lines)
</content>
```

**Tool: read**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\pemilik\\ManajemenStok.jsx"
}
```

**Output:**
```
<path>E:\UDIN\Kuliah\Mata Kuliah\Rekayasa Perangkat Lunak\Tugas 6\wdms-app\wdms-frontend\src\pages\pemilik\ManajemenStok.jsx</path>
<type>file</type>
<content>
1: import React, { useState } from 'react';
2: import { useAppContext } from '../../context/AppContext';
3: import { IconSearch, IconRefresh } from '@tabler/icons-react';
4: 
5: export default function ManajemenStok() {
6:   const { menus, updateStok } = useAppContext();
7:   const [search, setSearch] = useState('');
8:   const [editingId, setEditingId] = useState(null);
9:   const [editQty, setEditQty] = useState('');
10: 
11:   const filteredMenus = menus.filter((m) => m.nama.toLowerCase().includes(search.toLowerCase()));
12: 
13:   const getStatusStyle = (status, stok) => {
14:     if (status === 'Habis' || stok <= 0) return { bg: '#F5C4B3', text: '#993C1D', label: 'HABIS' };
15:     if (stok < 10) return { bg: '#FFE4C4', text: '#D85A30', label: 'SEDIKIT' };
16:     return { bg: '#EAF3DE', text: '#3B6D11', label: 'TERSEDIA' };
17:   };
18: 
19:   const handleUpdateStok = async (id_menu) => {
20:     const qty = parseInt(editQty);
21:     if (isNaN(qty) || qty < 0) {
22:       alert('Masukkan jumlah stok yang valid!');
23:       return;
24:     }
25:     const result = await updateStok(id_menu, qty);
26:     if (result.success) {
27:       setEditingId(null);
28:       setEditQty('');
29:     } else {
30:       alert(result.message);
31:     }
32:   };
33: 
34:   const handleResetAll = async () => {
35:     if (
36:       !confirm(
37:         'Reset semua stok ke 50 porsi? Ini akan mengubah status semua menu menjadi Tersedia.'
38:       )
39:     )
40:       return;
41:     for (const menu of menus) {
42:       await updateStok(menu.id_menu, 50);
43:     }
44:   };
45: 
46:   return (
47:     <div style={styles.container}>
48:       <div style={styles.header}>
49:         <div style={styles.headerTitle}>Manajemen Stok</div>
50:         <div style={styles.searchBox}>
51:           <IconSearch size={18} color="#888780" />
52:           <input
53:             style={styles.searchInput}
54:             placeholder="Cari menu..."
55:             value={search}
56:             onChange={(e) => setSearch(e.target.value)}
57:           />
58:         </div>
59:       </div>
60: 
61:       <div style={styles.content}>
62:         {filteredMenus.map((menu) => {
63:           const statusStyle = getStatusStyle(menu.status, menu.stok);
64:           const isEditing = editingId === menu.id_menu;
65: 
66:           return (
67:             <div key={menu.id_menu} style={styles.menuCard}>
68:               <div style={styles.menuInfo}>
69:                 <div style={styles.menuName}>{menu.nama}</div>
70:                 <div style={styles.menuStok}>{menu.stok} porsi tersisa</div>
71:               </div>
72: 
73:               <div style={styles.actionSide}>
74:                 <div
75:                   style={{ ...styles.badge, background: statusStyle.bg, color: statusStyle.text }}
76:                 >
77:                   {statusStyle.label}
78:                 </div>
79: 
80:                 {isEditing ? (
81:                   <div style={styles.editRow}>
82:                     <input
83:                       type="number"
84:                       min="0"
85:                       style={styles.qtyInput}
86:                       value={editQty}
87:                       onChange={(e) => setEditQty(e.target.value)}
88:                       placeholder="Qty"
89:                     />
90:                     <button style={styles.saveBtn} onClick={() => handleUpdateStok(menu.id_menu)}>
91:                       ✓
92:                     </button>
93:                     <button style={styles.cancelBtn} onClick={() => setEditingId(null)}>
94:                       ✕
95:                     </button>
96:                   </div>
97:                 ) : (
98:                   <button
99:                     style={styles.updateBtn}
100:                     onClick={() => {
101:                       setEditingId(menu.id_menu);
102:                       setEditQty(String(menu.stok));
103:                     }}
104:                   >
105:                     Edit
106:                   </button>
107:                 )}
108:               </div>
109:             </div>
110:           );
111:         })}
112:       </div>
113: 
114:       <div style={styles.footer}>
115:         <button style={styles.resetBtn} onClick={handleResetAll}>
116:           <IconRefresh size={18} /> Reset Semua Stok (Awal Hari)
117:         </button>
118:       </div>
119:     </div>
120:   );
121: }
122: 
123: const styles = {
124:   container: { height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' },
125:   header: { background: '#E07B3A', padding: '24px 20px 40px', borderRadius: '0 0 24px 24px' },
126:   headerTitle: {
127:     fontSize: '18px',
128:     fontWeight: '800',
129:     color: '#fff',
130:     textAlign: 'center',
131:     marginBottom: '16px',
132:   },
133:   searchBox: {
134:     display: 'flex',
135:     alignItems: 'center',
136:     background: '#fff',
137:     padding: '10px 14px',
138:     borderRadius: '12px',
139:     gap: '8px',
140:   },
141:   searchInput: {
142:     border: 'none',
143:     outline: 'none',
144:     flex: 1,
145:     fontSize: '14px',
146:     fontFamily: 'inherit',
147:   },
148:   content: {
149:     padding: '20px 16px 100px',
150:     flex: 1,
151:     overflowY: 'auto',
152:     display: 'flex',
153:     flexDirection: 'column',
154:     gap: '12px',
155:     marginTop: '-20px',
156:   },
157:   menuCard: {
158:     background: '#fff',
159:     borderRadius: '16px',
160:     padding: '14px',
161:     display: 'flex',
162:     justifyContent: 'space-between',
163:     alignItems: 'center',
164:     border: '1.5px solid #EAE5DA',
165:   },
166:   menuInfo: { flex: 1 },
167:   menuName: { fontSize: '14px', fontWeight: '800', color: '#2C2C2A', marginBottom: '4px' },
168:   menuStok: { fontSize: '12px', color: '#888780', fontWeight: '600' },
169:   actionSide: { display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' },
170:   badge: { fontSize: '10px', fontWeight: '800', padding: '4px 8px', borderRadius: '6px' },
171:   updateBtn: {
172:     background: '#F1EFE8',
173:     border: 'none',
174:     borderRadius: '8px',
175:     padding: '6px 12px',
176:     fontSize: '11px',
177:     fontWeight: '800',
178:     color: '#5F5E5A',
179:     cursor: 'pointer',
180:     fontFamily: 'inherit',
181:   },
182:   editRow: { display: 'flex', gap: '4px', alignItems: 'center' },
183:   qtyInput: {
184:     width: '52px',
185:     padding: '6px 8px',
186:     borderRadius: '8px',
187:     border: '1.5px solid #D3D1C7',
188:     fontSize: '13px',
189:     fontFamily: 'inherit',
190:     textAlign: 'center',
191:   },
192:   saveBtn: {
193:     background: '#1D9E75',
194:     color: '#fff',
195:     border: 'none',
196:     borderRadius: '8px',
197:     padding: '6px 8px',
198:     cursor: 'pointer',
199:     fontWeight: '800',
200:   },
201:   cancelBtn: {
202:     background: '#F5C4B3',
203:     color: '#993C1D',
204:     border: 'none',
205:     borderRadius: '8px',
206:     padding: '6px 8px',
207:     cursor: 'pointer',
208:     fontWeight: '800',
209:   },
210:   footer: { position: 'absolute', bottom: '80px', left: '16px', right: '16px' },
211:   resetBtn: {
212:     width: '100%',
213:     background: '#fff',
214:     border: '1.5px solid #E07B3A',
215:     color: '#E07B3A',
216:     padding: '14px',
217:     borderRadius: '14px',
218:     fontSize: '14px',
219:     fontWeight: '800',
220:     display: 'flex',
221:     alignItems: 'center',
222:     justifyContent: 'center',
223:     gap: '8px',
224:     cursor: 'pointer',
225:     fontFamily: 'inherit',
226:   },
227: };

(End of file - total 227 lines)
</content>
```

**Tool: read**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\shared\\Login.jsx"
}
```

**Output:**
```
<path>E:\UDIN\Kuliah\Mata Kuliah\Rekayasa Perangkat Lunak\Tugas 6\wdms-app\wdms-frontend\src\pages\shared\Login.jsx</path>
<type>file</type>
<content>
1: import React, { useState } from 'react';
2: import { useNavigate } from 'react-router-dom';
3: import { useAppContext } from '../../context/AppContext';
4: 
5: export default function Login() {
6:   const [username, setUsername] = useState('');
7:   const [password, setPassword] = useState('');
8:   const [role, setRole] = useState('Pemilik');
9:   const [error, setError] = useState('');
10:   const [isLoading, setIsLoading] = useState(false);
11:   const { login } = useAppContext();
12:   const navigate = useNavigate();
13: 
14:   const handleLogin = async (e) => {
15:     e.preventDefault();
16:     if (!username || !password) {
17:       setError('Harap isi username dan password');
18:       return;
19:     }
20:     setIsLoading(true);
21:     setError('');
22:     const result = await login(username, password);
23:     setIsLoading(false);
24:     if (result.success) {
25:       navigate(result.user.role === 'Pemilik' ? '/dashboard-pemilik' : '/dashboard-kasir');
26:     } else {
27:       setError(result.message || 'Login gagal.');
28:     }
29:   };
30: 
31:   return (
32:     <div style={styles.container}>
33:       <div style={styles.logoWrap}>
34:         <div style={styles.logo}>WDMS</div>
35:         <div style={styles.subtitle}>Warteg Digital Management System</div>
36:       </div>
37: 
38:       <div style={styles.roleToggle}>
39:         <button
40:           style={{
41:             ...styles.toggleBtn,
42:             ...(role === 'Pemilik' ? styles.activeRole : styles.inactiveRole),
43:           }}
44:           onClick={() => setRole('Pemilik')}
45:         >
46:           👨‍🍳 Pemilik
47:         </button>
48:         <button
49:           style={{
50:             ...styles.toggleBtn,
51:             ...(role === 'Kasir' ? styles.activeRole : styles.inactiveRole),
52:           }}
53:           onClick={() => setRole('Kasir')}
54:         >
55:           👩‍🍳 Kasir
56:         </button>
57:       </div>
58: 
59:       <form onSubmit={handleLogin} style={styles.form}>
60:         <div style={styles.inputGroup}>
61:           <label style={styles.label}>Username</label>
62:           <input
63:             style={styles.input}
64:             value={username}
65:             onChange={(e) => setUsername(e.target.value)}
66:             placeholder={role === 'Pemilik' ? 'pemilik' : 'kasir'}
67:             autoCapitalize="none"
68:           />
69:         </div>
70:         <div style={styles.inputGroup}>
71:           <label style={styles.label}>Password</label>
72:           <input
73:             type="password"
74:             style={styles.input}
75:             value={password}
76:             onChange={(e) => setPassword(e.target.value)}
77:             placeholder="password123"
78:           />
79:         </div>
80: 
81:         {error && <div style={styles.error}>⚠ {error}</div>}
82: 
83:         <button
84:           type="submit"
85:           style={{ ...styles.submitBtn, opacity: isLoading ? 0.7 : 1 }}
86:           disabled={isLoading}
87:         >
88:           {isLoading ? 'Memverifikasi...' : 'Masuk →'}
89:         </button>
90:       </form>
91: 
92:       <div style={styles.hint}>
93:         <div style={styles.hintTitle}>Akun Demo:</div>
94:         <div style={styles.hintText}>
95:           Pemilik: <b>pemilik</b> / <b>password123</b>
96:         </div>
97:         <div style={styles.hintText}>
98:           Kasir: <b>kasir</b> / <b>password123</b>
99:         </div>
100:       </div>
101:     </div>
102:   );
103: }
104: 
105: const styles = {
106:   container: {
107:     padding: '40px 24px',
108:     display: 'flex',
109:     flexDirection: 'column',
110:     alignItems: 'center',
111:     justifyContent: 'center',
112:     height: '100%',
113:     width: '100%',
114:     background: '#fff',
115:   },
116:   logoWrap: { textAlign: 'center', marginBottom: '32px' },
117:   logo: { fontSize: '40px', fontWeight: '800', color: '#C94040', letterSpacing: '-1px' },
118:   subtitle: { fontSize: '12px', color: '#888780', fontWeight: '600', marginTop: '4px' },
119:   roleToggle: {
120:     display: 'flex',
121:     background: '#F1EFE8',
122:     borderRadius: '14px',
123:     padding: '4px',
124:     width: '100%',
125:     marginBottom: '24px',
126:   },
127:   toggleBtn: {
128:     flex: 1,
129:     padding: '12px 0',
130:     borderRadius: '10px',
131:     border: 'none',
132:     fontWeight: '700',
133:     fontSize: '13px',
134:     cursor: 'pointer',
135:     transition: 'all 0.2s',
136:     fontFamily: 'inherit',
137:   },
138:   activeRole: { background: '#fff', color: '#C94040', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' },
139:   inactiveRole: { background: 'transparent', color: '#888780' },
140:   form: { width: '100%', display: 'flex', flexDirection: 'column', gap: '16px' },
141:   inputGroup: { display: 'flex', flexDirection: 'column', gap: '6px' },
142:   label: { fontSize: '12px', fontWeight: '700', color: '#5F5E5A' },
143:   input: {
144:     padding: '14px',
145:     borderRadius: '12px',
146:     border: '1.5px solid #EAE5DA',
147:     background: '#FAFAFA',
148:     fontSize: '14px',
149:     outline: 'none',
150:     fontFamily: 'inherit',
151:   },
152:   submitBtn: {
153:     padding: '16px',
154:     background: '#C94040',
155:     color: '#fff',
156:     border: 'none',
157:     borderRadius: '16px',
158:     fontSize: '15px',
159:     fontWeight: '800',
160:     cursor: 'pointer',
161:     marginTop: '8px',
162:     fontFamily: 'inherit',
163:   },
164:   error: {
165:     color: '#C94040',
166:     fontSize: '12px',
167:     textAlign: 'center',
168:     fontWeight: '600',
169:     background: '#FFF0F0',
170:     padding: '10px',
171:     borderRadius: '10px',
172:   },
173:   hint: {
174:     marginTop: '24px',
175:     background: '#F5F0E8',
176:     padding: '14px',
177:     borderRadius: '12px',
178:     width: '100%',
179:     textAlign: 'center',
180:   },
181:   hintTitle: { fontSize: '11px', fontWeight: '800', color: '#5F5E5A', marginBottom: '6px' },
182:   hintText: { fontSize: '12px', color: '#888780', marginBottom: '2px' },
183: };

(End of file - total 183 lines)
</content>
```

**Tool: read**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\shared\\Pengaturan.jsx"
}
```

**Output:**
```
<path>E:\UDIN\Kuliah\Mata Kuliah\Rekayasa Perangkat Lunak\Tugas 6\wdms-app\wdms-frontend\src\pages\shared\Pengaturan.jsx</path>
<type>file</type>
<content>
1: import React from 'react';
2: import { useNavigate } from 'react-router-dom';
3: import { useAppContext } from '../../context/AppContext';
4: import {
5:   IconUser,
6:   IconUsers,
7:   IconBell,
8:   IconCloudDownload,
9:   IconInfoCircle,
10:   IconLogout,
11:   IconChevronRight,
12: } from '@tabler/icons-react';
13: 
14: export default function Pengaturan() {
15:   const { user, logout } = useAppContext();
16:   const navigate = useNavigate();
17: 
18:   const handleLogout = () => {
19:     logout();
20:     navigate('/');
21:   };
22: 
23:   const isPemilik = user?.role === 'Pemilik';
24:   const primaryColor = isPemilik ? '#C94040' : '#1D9E75';
25: 
26:   return (
27:     <div style={styles.container}>
28:       <div style={{ ...styles.header, background: primaryColor }}>
29:         <div style={styles.headerTitle}>Pengaturan</div>
30:       </div>
31: 
32:       <div style={styles.content}>
33:         <div style={styles.profileCard}>
34:           <div style={styles.avatar}>{isPemilik ? '👨‍🍳' : '👩‍🍳'}</div>
35:           <div>
36:             <div style={styles.profileName}>{user?.nama || user?.name || 'Pengguna'}</div>
37:             <div style={styles.profileRole}>{user?.role || 'User'} Warteg</div>
38:           </div>
39:         </div>
40: 
41:         <div style={styles.menuGroup}>
42:           <MenuItem icon={<IconUser size={20} />} label="Profil Saya" />
43:           {isPemilik && <MenuItem icon={<IconUsers size={20} />} label="Kelola Akun Kasir" />}
44:           <MenuItem icon={<IconBell size={20} />} label="Notifikasi" />
45:           <MenuItem icon={<IconCloudDownload size={20} />} label="Backup Data" />
46:           <MenuItem icon={<IconInfoCircle size={20} />} label="Tentang Aplikasi" />
47:         </div>
48: 
49:         <button style={styles.logoutBtn} onClick={handleLogout}>
50:           <IconLogout size={20} /> Keluar
51:         </button>
52:       </div>
53:     </div>
54:   );
55: }
56: 
57: function MenuItem({ icon, label }) {
58:   return (
59:     <div style={styles.menuItem}>
60:       <div style={styles.menuItemLeft}>
61:         <div style={styles.menuIcon}>{icon}</div>
62:         <div style={styles.menuLabel}>{label}</div>
63:       </div>
64:       <IconChevronRight size={18} color="#B4B2A9" />
65:     </div>
66:   );
67: }
68: 
69: const styles = {
70:   container: { height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' },
71:   header: { padding: '24px 20px 40px', borderRadius: '0 0 24px 24px' },
72:   headerTitle: { fontSize: '18px', fontWeight: '800', color: '#fff', textAlign: 'center' },
73:   content: {
74:     padding: '20px 16px 80px',
75:     flex: 1,
76:     overflowY: 'auto',
77:     display: 'flex',
78:     flexDirection: 'column',
79:     gap: '20px',
80:     marginTop: '-30px',
81:   },
82:   profileCard: {
83:     background: '#fff',
84:     borderRadius: '16px',
85:     padding: '16px',
86:     display: 'flex',
87:     alignItems: 'center',
88:     gap: '16px',
89:     border: '1.5px solid #EAE5DA',
90:     boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
91:   },
92:   avatar: {
93:     width: '56px',
94:     height: '56px',
95:     borderRadius: '50%',
96:     background: '#F1EFE8',
97:     display: 'flex',
98:     alignItems: 'center',
99:     justifyContent: 'center',
100:     fontSize: '28px',
101:   },
102:   profileName: { fontSize: '16px', fontWeight: '800', color: '#2C2C2A', marginBottom: '2px' },
103:   profileRole: { fontSize: '12px', color: '#888780', fontWeight: '600' },
104:   menuGroup: {
105:     background: '#fff',
106:     borderRadius: '16px',
107:     border: '1.5px solid #EAE5DA',
108:     overflow: 'hidden',
109:   },
110:   menuItem: {
111:     padding: '16px',
112:     display: 'flex',
113:     justifyContent: 'space-between',
114:     alignItems: 'center',
115:     borderBottom: '1px solid #F1EFE8',
116:     cursor: 'pointer',
117:   },
118:   menuItemLeft: { display: 'flex', alignItems: 'center', gap: '12px' },
119:   menuIcon: { color: '#5F5E5A', display: 'flex', alignItems: 'center' },
120:   menuLabel: { fontSize: '14px', fontWeight: '700', color: '#2C2C2A' },
121:   logoutBtn: {
122:     width: '100%',
123:     background: '#FFF0F0',
124:     border: '1.5px solid #F5C4B3',
125:     color: '#C94040',
126:     padding: '16px',
127:     borderRadius: '16px',
128:     fontSize: '15px',
129:     fontWeight: '800',
130:     display: 'flex',
131:     alignItems: 'center',
132:     justifyContent: 'center',
133:     gap: '8px',
134:     cursor: 'pointer',
135:     fontFamily: 'inherit',
136:   },
137: };

(End of file - total 137 lines)
</content>
```

**Tool: read**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\App.jsx"
}
```

**Output:**
```
<path>E:\UDIN\Kuliah\Mata Kuliah\Rekayasa Perangkat Lunak\Tugas 6\wdms-app\wdms-frontend\src\App.jsx</path>
<type>file</type>
<content>
1: import React from 'react';
2: import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
3: import { AppProvider, useAppContext } from './context/AppContext';
4: import BottomNav from './components/BottomNav';
5: 
6: // Pages
7: import Login from './pages/shared/Login';
8: import DashboardPemilik from './pages/pemilik/DashboardPemilik';
9: import DashboardKasir from './pages/kasir/DashboardKasir';
10: import PesananKasir from './pages/kasir/PesananKasir';
11: import ProsesPembayaran from './pages/kasir/ProsesPembayaran';
12: import StrukPembayaran from './pages/kasir/StrukPembayaran';
13: import KelolaMenu from './pages/pemilik/KelolaMenu';
14: import LaporanPenjualan from './pages/pemilik/LaporanPenjualan';
15: import ManajemenStok from './pages/pemilik/ManajemenStok';
16: import RiwayatTransaksi from './pages/kasir/RiwayatTransaksi';
17: import Pengaturan from './pages/shared/Pengaturan';
18: 
19: function ProtectedRoute({ children, role }) {
20:   const { user } = useAppContext();
21:   if (!user) return <Navigate to="/" />;
22:   if (role && user.role !== role) {
23:     return <Navigate to={user.role === 'Pemilik' ? '/dashboard-pemilik' : '/dashboard-kasir'} />;
24:   }
25:   return children;
26: }
27: 
28: function MainApp() {
29:   return (
30:     <div className="app-container">
31:       <Routes>
32:         <Route path="/" element={<Login />} />
33: 
34:         {/* Pemilik Routes */}
35:         <Route
36:           path="/dashboard-pemilik"
37:           element={
38:             <ProtectedRoute role="Pemilik">
39:               <DashboardPemilik />
40:             </ProtectedRoute>
41:           }
42:         />
43:         <Route
44:           path="/menu"
45:           element={
46:             <ProtectedRoute role="Pemilik">
47:               <KelolaMenu />
48:             </ProtectedRoute>
49:           }
50:         />
51:         <Route
52:           path="/laporan"
53:           element={
54:             <ProtectedRoute role="Pemilik">
55:               <LaporanPenjualan />
56:             </ProtectedRoute>
57:           }
58:         />
59:         <Route
60:           path="/stok"
61:           element={
62:             <ProtectedRoute role="Pemilik">
63:               <ManajemenStok />
64:             </ProtectedRoute>
65:           }
66:         />
67: 
68:         {/* Kasir Routes */}
69:         <Route
70:           path="/dashboard-kasir"
71:           element={
72:             <ProtectedRoute role="Kasir">
73:               <DashboardKasir />
74:             </ProtectedRoute>
75:           }
76:         />
77:         <Route
78:           path="/pesan"
79:           element={
80:             <ProtectedRoute role="Kasir">
81:               <PesananKasir />
82:             </ProtectedRoute>
83:           }
84:         />
85:         <Route
86:           path="/bayar"
87:           element={
88:             <ProtectedRoute role="Kasir">
89:               <ProsesPembayaran />
90:             </ProtectedRoute>
91:           }
92:         />
93:         <Route
94:           path="/struk"
95:           element={
96:             <ProtectedRoute role="Kasir">
97:               <StrukPembayaran />
98:             </ProtectedRoute>
99:           }
100:         />
101:         <Route
102:           path="/riwayat"
103:           element={
104:             <ProtectedRoute role="Kasir">
105:               <RiwayatTransaksi />
106:             </ProtectedRoute>
107:           }
108:         />
109: 
110:         {/* Shared */}
111:         <Route
112:           path="/pengaturan"
113:           element={
114:             <ProtectedRoute>
115:               <Pengaturan />
116:             </ProtectedRoute>
117:           }
118:         />
119:       </Routes>
120:       <BottomNav />
121:     </div>
122:   );
123: }
124: 
125: export default function App() {
126:   return (
127:     <AppProvider>
128:       <BrowserRouter>
129:         <MainApp />
130:       </BrowserRouter>
131:     </AppProvider>
132:   );
133: }

(End of file - total 133 lines)
</content>
```

**Tool: read**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\App.css"
}
```

**Output:**
```
<path>E:\UDIN\Kuliah\Mata Kuliah\Rekayasa Perangkat Lunak\Tugas 6\wdms-app\wdms-frontend\src\App.css</path>
<type>file</type>
<content>
1: .counter {
2:   font-size: 16px;
3:   padding: 5px 10px;
4:   border-radius: 5px;
5:   color: var(--accent);
6:   background: var(--accent-bg);
7:   border: 2px solid transparent;
8:   transition: border-color 0.3s;
9:   margin-bottom: 24px;
10: 
11:   &:hover {
12:     border-color: var(--accent-border);
13:   }
14:   &:focus-visible {
15:     outline: 2px solid var(--accent);
16:     outline-offset: 2px;
17:   }
18: }
19: 
20: .hero {
21:   position: relative;
22: 
23:   .base,
24:   .framework,
25:   .vite {
26:     inset-inline: 0;
27:     margin: 0 auto;
28:   }
29: 
30:   .base {
31:     width: 170px;
32:     position: relative;
33:     z-index: 0;
34:   }
35: 
36:   .framework,
37:   .vite {
38:     position: absolute;
39:   }
40: 
41:   .framework {
42:     z-index: 1;
43:     top: 34px;
44:     height: 28px;
45:     transform: perspective(2000px) rotateZ(300deg) rotateX(44deg) rotateY(39deg) scale(1.4);
46:   }
47: 
48:   .vite {
49:     z-index: 0;
50:     top: 107px;
51:     height: 26px;
52:     width: auto;
53:     transform: perspective(2000px) rotateZ(300deg) rotateX(40deg) rotateY(39deg) scale(0.8);
54:   }
55: }
56: 
57: #center {
58:   display: flex;
59:   flex-direction: column;
60:   gap: 25px;
61:   place-content: center;
62:   place-items: center;
63:   flex-grow: 1;
64: 
65:   @media (max-width: 1024px) {
66:     padding: 32px 20px 24px;
67:     gap: 18px;
68:   }
69: }
70: 
71: #next-steps {
72:   display: flex;
73:   border-top: 1px solid var(--border);
74:   text-align: left;
75: 
76:   & > div {
77:     flex: 1 1 0;
78:     padding: 32px;
79:     @media (max-width: 1024px) {
80:       padding: 24px 20px;
81:     }
82:   }
83: 
84:   .icon {
85:     margin-bottom: 16px;
86:     width: 22px;
87:     height: 22px;
88:   }
89: 
90:   @media (max-width: 1024px) {
91:     flex-direction: column;
92:     text-align: center;
93:   }
94: }
95: 
96: #docs {
97:   border-right: 1px solid var(--border);
98: 
99:   @media (max-width: 1024px) {
100:     border-right: none;
101:     border-bottom: 1px solid var(--border);
102:   }
103: }
104: 
105: #next-steps ul {
106:   list-style: none;
107:   padding: 0;
108:   display: flex;
109:   gap: 8px;
110:   margin: 32px 0 0;
111: 
112:   .logo {
113:     height: 18px;
114:   }
115: 
116:   a {
117:     color: var(--text-h);
118:     font-size: 16px;
119:     border-radius: 6px;
120:     background: var(--social-bg);
121:     display: flex;
122:     padding: 6px 12px;
123:     align-items: center;
124:     gap: 8px;
125:     text-decoration: none;
126:     transition: box-shadow 0.3s;
127: 
128:     &:hover {
129:       box-shadow: var(--shadow);
130:     }
131:     .button-icon {
132:       height: 18px;
133:       width: 18px;
134:     }
135:   }
136: 
137:   @media (max-width: 1024px) {
138:     margin-top: 20px;
139:     flex-wrap: wrap;
140:     justify-content: center;
141: 
142:     li {
143:       flex: 1 1 calc(50% - 8px);
144:     }
145: 
146:     a {
147:       width: 100%;
148:       justify-content: center;
149:       box-sizing: border-box;
150:     }
151:   }
152: }
153: 
154: #spacer {
155:   height: 88px;
156:   border-top: 1px solid var(--border);
157:   @media (max-width: 1024px) {
158:     height: 48px;
159:   }
160: }
161: 
162: .ticks {
163:   position: relative;
164:   width: 100%;
165: 
166:   &::before,
167:   &::after {
168:     content: '';
169:     position: absolute;
170:     top: -4.5px;
171:     border: 5px solid transparent;
172:   }
173: 
174:   &::before {
175:     left: 0;
176:     border-left-color: var(--border);
177:   }
178:   &::after {
179:     right: 0;
180:     border-right-color: var(--border);
181:   }
182: }

(End of file - total 182 lines)
</content>
```

---

## Assistant (Build · Big Pickle · 10.4s)

_Thinking:_

Now I have a complete picture of the codebase. The website uses:
- React with inline styles (JS `styles` objects)
- CSS already has some animations defined in `index.css`: `fadeIn`, `slideUp`, `spin`
- Some components already use animations: `KelolaMenu.jsx` uses `fadeIn` and `slideUp` for modals
- `LaporanPenjualan.jsx` has bar chart bars

I need to create a global CSS animations file and then apply animations to all components. Since the components use inline styles, I'll need to either:
1. Add animation CSS classes in a global CSS file and add `className` to elements
2. Or add CSS animations to index.css

Since most styles are inline, I should create an `animations.css` file with CSS classes that can be added to components. Let me create comprehensive animations:

1. **Page transitions** - fadeIn + slideUp when pages mount
2. **Card animations** - scale/opacity on hover/entry
3. **Button animations** - hover/press effects
4. **List item animations** - staggered entries
5. **Header animations** - slide down
6. **Modal animations** - already has fadeIn/slideUp
7. **Bottom nav** - active indicator animation

I'll create `src/animations.css` with utility classes and then add `className` props to key elements. Let me plan carefully:

For components using inline styles, I need to add `className` attributes. Let me map out what needs to change:

**Components:**
1. `Login.jsx` - Add page animation
2. `DashboardKasir.jsx` - Add page animation, card animations
3. `PesananKasir.jsx` - Add page animation, menu card animations
4. `ProsesPembayaran.jsx` - Add page animation
5. `RiwayatTransaksi.jsx` - Add page animation, transaction card animations
6. `StrukPembayaran.jsx` - Add page animation
7. `DashboardPemilik.jsx` - Add page animation, stats animations
8. `KelolaMenu.jsx` - Already has some animations, add more
9. `LaporanPenjualan.jsx` - Add page animation, bar animations
10. `ManajemenStok.jsx` - Add page animation
11. `Pengaturan.jsx` - Add page animation
12. `BottomNav.jsx` - Add nav item animation

Since there are many components and the CSS is already in place for some, I'll create a comprehensive `animations.css` file and then update each component.

Let me create the animations CSS first with all needed classes, then update each component.

Key animations I'll implement:
- `.page-enter` / `.fade-in` - Fade in on mount
- `.slide-up` - Slide up from below
- `.slide-down` - Slide down from above
- `.stagger-1` through `.stagger-5` - Staggered delays
- `.card-hover` - Scale/transform on hover
- `.btn-hover` - Button hover effects
- `.scale-in` - Scale in animation
- `.bounce-in` - Bounce in animation
- `.slide-in-right` - Slide in from right
- `.slide-in-left` - Slide in from left

I'll need to add `className` to various elements. Let me now write all the files.

Let me create the animations.css file first with comprehensive animations:

**Tool: todowrite**

**Input:**
```json
{
  "todos": [
    {
      "content": "Create src/animations.css with global animation classes",
      "status": "in_progress",
      "priority": "high"
    },
    {
      "content": "Update Login.jsx with page/card/button animations",
      "status": "pending",
      "priority": "high"
    },
    {
      "content": "Update all kasir pages with animations",
      "status": "pending",
      "priority": "high"
    },
    {
      "content": "Update all pemilik pages with animations",
      "status": "pending",
      "priority": "high"
    },
    {
      "content": "Update shared pages and components with animations",
      "status": "pending",
      "priority": "high"
    },
    {
      "content": "Import animations.css in main.jsx",
      "status": "pending",
      "priority": "high"
    }
  ]
}
```

**Output:**
```
[
  {
    "content": "Create src/animations.css with global animation classes",
    "status": "in_progress",
    "priority": "high"
  },
  {
    "content": "Update Login.jsx with page/card/button animations",
    "status": "pending",
    "priority": "high"
  },
  {
    "content": "Update all kasir pages with animations",
    "status": "pending",
    "priority": "high"
  },
  {
    "content": "Update all pemilik pages with animations",
    "status": "pending",
    "priority": "high"
  },
  {
    "content": "Update shared pages and components with animations",
    "status": "pending",
    "priority": "high"
  },
  {
    "content": "Import animations.css in main.jsx",
    "status": "pending",
    "priority": "high"
  }
]
```

---

## Assistant (Build · Big Pickle · 13.8s)

_Thinking:_

Let me create the animations.css file first.

**Tool: write**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\animations.css",
  "content": "/* ── Keyframes ── */\n@keyframes fadeIn {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n\n@keyframes fadeInUp {\n  from { opacity: 0; transform: translateY(24px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n\n@keyframes fadeInDown {\n  from { opacity: 0; transform: translateY(-20px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n\n@keyframes fadeInScale {\n  from { opacity: 0; transform: scale(0.92); }\n  to { opacity: 1; transform: scale(1); }\n}\n\n@keyframes slideUp {\n  from { transform: translateY(100%); }\n  to { transform: translateY(0); }\n}\n\n@keyframes slideDown {\n  from { transform: translateY(-100%); }\n  to { transform: translateY(0); }\n}\n\n@keyframes slideInRight {\n  from { opacity: 0; transform: translateX(30px); }\n  to { opacity: 1; transform: translateX(0); }\n}\n\n@keyframes slideInLeft {\n  from { opacity: 0; transform: translateX(-30px); }\n  to { opacity: 1; transform: translateX(0); }\n}\n\n@keyframes scaleIn {\n  from { opacity: 0; transform: scale(0.85); }\n  to { opacity: 1; transform: scale(1); }\n}\n\n@keyframes bounceIn {\n  0% { opacity: 0; transform: scale(0.7); }\n  60% { opacity: 1; transform: scale(1.05); }\n  100% { transform: scale(1); }\n}\n\n@keyframes spin {\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n}\n\n@keyframes pulse {\n  0%, 100% { transform: scale(1); }\n  50% { transform: scale(1.05); }\n}\n\n@keyframes shimmer {\n  0% { background-position: -200% 0; }\n  100% { background-position: 200% 0; }\n}\n\n@keyframes countUp {\n  from { opacity: 0; transform: translateY(10px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n\n@keyframes barGrow {\n  from { width: 0; }\n}\n\n@keyframes float {\n  0%, 100% { transform: translateY(0); }\n  50% { transform: translateY(-6px); }\n}\n\n/* ── Page Transitions ── */\n.page-enter {\n  animation: fadeIn 0.35s ease;\n}\n\n.page-fade-up {\n  animation: fadeInUp 0.4s ease;\n}\n\n.page-fade-down {\n  animation: fadeInDown 0.35s ease;\n}\n\n/* ── Card / Element Entry ── */\n.fade-in {\n  animation: fadeIn 0.35s ease both;\n}\n\n.fade-in-up {\n  animation: fadeInUp 0.4s ease both;\n}\n\n.fade-in-scale {\n  animation: fadeInScale 0.35s ease both;\n}\n\n.slide-in-right {\n  animation: slideInRight 0.35s ease both;\n}\n\n.slide-in-left {\n  animation: slideInLeft 0.35s ease both;\n}\n\n.scale-in {\n  animation: scaleIn 0.35s ease both;\n}\n\n.bounce-in {\n  animation: bounceIn 0.45s ease both;\n}\n\n/* ── Staggered Delays ── */\n.stagger-1 { animation-delay: 0.05s; }\n.stagger-2 { animation-delay: 0.1s; }\n.stagger-3 { animation-delay: 0.15s; }\n.stagger-4 { animation-delay: 0.2s; }\n.stagger-5 { animation-delay: 0.25s; }\n.stagger-6 { animation-delay: 0.3s; }\n.stagger-7 { animation-delay: 0.35s; }\n.stagger-8 { animation-delay: 0.4s; }\n\n/* ── Hover Effects ── */\n.hover-lift {\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.hover-lift:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 25px rgba(0,0,0,0.12);\n}\n\n.hover-scale {\n  transition: transform 0.2s ease;\n}\n.hover-scale:hover {\n  transform: scale(1.04);\n}\n\n.hover-glow {\n  transition: box-shadow 0.25s ease, transform 0.25s ease;\n}\n.hover-glow:hover {\n  box-shadow: 0 4px 20px rgba(0,0,0,0.18);\n  transform: translateY(-2px);\n}\n\n.hover-bright {\n  transition: filter 0.2s ease;\n}\n.hover-bright:hover {\n  filter: brightness(1.08);\n}\n\n/* ── Button Active/Press ── */\n.btn-press {\n  transition: transform 0.1s ease;\n}\n.btn-press:active {\n  transform: scale(0.95);\n}\n\n/* ── Header / Top Bar ── */\n.header-enter {\n  animation: fadeInDown 0.4s ease;\n}\n\n/* ── Bottom Nav ── */\n.nav-enter {\n  animation: fadeInUp 0.3s ease;\n}\n\n.nav-indicator {\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n/* ── Counters / Stats ── */\n.stat-enter {\n  animation: countUp 0.5s ease both;\n}\n\n/* ── Progress / Bar Fill ── */\n.bar-fill {\n  animation: barGrow 0.8s ease both;\n  transform-origin: left;\n}\n\n/* ── Menu Cards (Grid Items) ── */\n.menu-card-enter {\n  animation: fadeInUp 0.35s ease both;\n}\n\n/* ── Chart Bars ── */\n.chart-bar {\n  animation: fadeInUp 0.5s ease both;\n}\n\n/* ── Floating / Attention ── */\n.float-anim {\n  animation: float 2.5s ease-in-out infinite;\n}\n\n.pulse-anim {\n  animation: pulse 1.8s ease-in-out infinite;\n}\n\n/* ── Loading Shimmer ── */\n.shimmer {\n  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: shimmer 1.5s infinite;\n}\n\n/* ── Spinner ── */\n.spin-anim {\n  animation: spin 1s linear infinite;\n}\n\n/* ── Modal ── */\n.modal-overlay-enter {\n  animation: fadeIn 0.2s ease;\n}\n.modal-content-enter {\n  animation: slideUp 0.3s ease;\n}\n\n/* ─── Trx / List Items ─── */\n.list-item-enter {\n  animation: slideInRight 0.35s ease both;\n}\n\n/* ─── Profile / Avatar ─── */\n.avatar-enter {\n  animation: bounceIn 0.45s ease both;\n}\n\n/* ─── Badge ─── */\n.badge-enter {\n  animation: scaleIn 0.25s ease both;\n}\n\n/* ─── Quick action buttons ─── */\n.quick-btn-enter {\n  animation: fadeInUp 0.35s ease both;\n}\n"
}
```

**Output:**
```
Wrote file successfully.
```

---

## Assistant (Build · Big Pickle · 3.0s)

_Thinking:_

Now let me check the main.jsx to see where to import the animations.css.

**Tool: read**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\main.jsx"
}
```

**Output:**
```
<path>E:\UDIN\Kuliah\Mata Kuliah\Rekayasa Perangkat Lunak\Tugas 6\wdms-app\wdms-frontend\src\main.jsx</path>
<type>file</type>
<content>
1: import React from 'react';
2: import ReactDOM from 'react-dom/client';
3: import App from './App.jsx';
4: import './index.css';
5: // import './App.css';
6: 
7: ReactDOM.createRoot(document.getElementById('root')).render(
8:   <React.StrictMode>
9:     <App />
10:   </React.StrictMode>
11: );

(End of file - total 11 lines)
</content>
```

---

## Assistant (Build · Big Pickle · 3.7s)

_Thinking:_

Now I need to:
1. Import `animations.css` in `main.jsx`
2. Update each page/component with animation classes

Let me start with main.jsx import, then update each file. I'll do the edits in parallel where possible.

**Tool: todowrite**

**Input:**
```json
{
  "todos": [
    {
      "priority": "high",
      "content": "Create src/animations.css with global animation classes",
      "status": "completed"
    },
    {
      "priority": "high",
      "content": "Import animations.css in main.jsx",
      "status": "in_progress"
    },
    {
      "priority": "high",
      "content": "Update Login.jsx with page/card/button animations",
      "status": "pending"
    },
    {
      "priority": "high",
      "content": "Update all kasir pages with animations",
      "status": "pending"
    },
    {
      "priority": "high",
      "content": "Update all pemilik pages with animations",
      "status": "pending"
    },
    {
      "priority": "high",
      "content": "Update shared pages and components with animations",
      "status": "pending"
    }
  ]
}
```

**Output:**
```
[
  {
    "content": "Create src/animations.css with global animation classes",
    "status": "completed",
    "priority": "high"
  },
  {
    "content": "Import animations.css in main.jsx",
    "status": "in_progress",
    "priority": "high"
  },
  {
    "content": "Update Login.jsx with page/card/button animations",
    "status": "pending",
    "priority": "high"
  },
  {
    "content": "Update all kasir pages with animations",
    "status": "pending",
    "priority": "high"
  },
  {
    "content": "Update all pemilik pages with animations",
    "status": "pending",
    "priority": "high"
  },
  {
    "content": "Update shared pages and components with animations",
    "status": "pending",
    "priority": "high"
  }
]
```

---

## Assistant (Build · Big Pickle · 7.0s)

_Thinking:_

Let me now make all the edits. I'll do main.jsx and all page files.

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\main.jsx",
  "oldString": "import './index.css';",
  "newString": "import './index.css';\nimport './animations.css';"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\shared\\Login.jsx",
  "oldString": "    <div style={styles.container}>\n      <div style={styles.logoWrap}>",
  "newString": "    <div className=\"page-enter\" style={styles.container}>\n      <div className=\"bounce-in\" style={styles.logoWrap}>"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\shared\\Login.jsx",
  "oldString": "      <div style={styles.roleToggle}>",
  "newString": "      <div className=\"fade-in-up stagger-1\" style={styles.roleToggle}>"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\shared\\Login.jsx",
  "oldString": "      <form onSubmit={handleLogin} style={styles.form}>",
  "newString": "      <form onSubmit={handleLogin} className=\"fade-in-up stagger-2\" style={styles.form}>"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\shared\\Login.jsx",
  "oldString": "        <button\n          type=\"submit\"\n          style={{ ...styles.submitBtn, opacity: isLoading ? 0.7 : 1 }}\n          disabled={isLoading}\n        >",
  "newString": "        <button\n          type=\"submit\"\n          className=\"btn-press hover-bright\"\n          style={{ ...styles.submitBtn, opacity: isLoading ? 0.7 : 1 }}\n          disabled={isLoading}\n        >"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\shared\\Login.jsx",
  "oldString": "      <div style={styles.hint}>",
  "newString": "      <div className=\"fade-in-up stagger-3\" style={styles.hint}>"
}
```

**Output:**
```
Edit applied successfully.
```

---

## Assistant (Build · Big Pickle · 9.1s)

_Thinking:_

Now let me update the kasir pages and pemilik pages. Let me update DashboardKasir.jsx.

Now update the kasir pages:

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\kasir\\DashboardKasir.jsx",
  "oldString": "    <div style={styles.container}>\n      <div style={styles.header}>",
  "newString": "    <div className=\"page-enter\" style={styles.container}>\n      <div className=\"header-enter\" style={styles.header}>"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\kasir\\DashboardKasir.jsx",
  "oldString": "        <div style={styles.statsCard}>",
  "newString": "        <div className=\"fade-in-scale stagger-1\" style={styles.statsCard}>"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\kasir\\DashboardKasir.jsx",
  "oldString": "          <button\n            style={{ ...styles.quickBtn, background: '#1D9E75' }}\n            onClick={() => navigate('/pesan')}\n          >\n            <div style={{ color: '#fff' }}>\n              <IconClipboardList size={32} />\n            </div>\n            <div style={styles.quickLabel}>Buat Pesanan Baru</div>\n          </button>\n\n          <button\n            style={{ ...styles.quickBtn, background: '#E07B3A' }}\n            onClick={() => navigate('/riwayat')}\n          >\n            <div style={{ color: '#fff' }}>\n              <IconHistory size={32} />\n            </div>\n            <div style={styles.quickLabel}>Riwayat Transaksi</div>\n          </button>",
  "newString": "          <button\n            className=\"hover-lift btn-press quick-btn-enter stagger-2\"\n            style={{ ...styles.quickBtn, background: '#1D9E75' }}\n            onClick={() => navigate('/pesan')}\n          >\n            <div style={{ color: '#fff' }}>\n              <IconClipboardList size={32} />\n            </div>\n            <div style={styles.quickLabel}>Buat Pesanan Baru</div>\n          </button>\n\n          <button\n            className=\"hover-lift btn-press quick-btn-enter stagger-3\"\n            style={{ ...styles.quickBtn, background: '#E07B3A' }}\n            onClick={() => navigate('/riwayat')}\n          >\n            <div style={{ color: '#fff' }}>\n              <IconHistory size={32} />\n            </div>\n            <div style={styles.quickLabel}>Riwayat Transaksi</div>\n          </button>"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\kasir\\DashboardKasir.jsx",
  "oldString": "  avatar: {\n    position: 'absolute',\n    top: '16px',\n    right: '18px',\n    width: '40px',\n    height: '40px',\n    borderRadius: '50%',\n    background: '#a0eed3',\n    border: '2.5px solid #fff',\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'center',\n    fontSize: '18px',\n  },",
  "newString": "  avatar: {\n    position: 'absolute',\n    top: '16px',\n    right: '18px',\n    width: '40px',\n    height: '40px',\n    borderRadius: '50%',\n    background: '#a0eed3',\n    border: '2.5px solid #fff',\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'center',\n    fontSize: '18px',\n    transition: 'transform 0.3s ease',\n  },"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\kasir\\DashboardKasir.jsx",
  "oldString": "  quickBtn: {\n    borderRadius: '18px',\n    padding: '20px',\n    display: 'flex',\n    alignItems: 'center',\n    gap: '16px',\n    border: 'none',\n    cursor: 'pointer',\n    textAlign: 'left',\n  },",
  "newString": "  quickBtn: {\n    borderRadius: '18px',\n    padding: '20px',\n    display: 'flex',\n    alignItems: 'center',\n    gap: '16px',\n    border: 'none',\n    cursor: 'pointer',\n    textAlign: 'left',\n    transition: 'transform 0.2s, box-shadow 0.2s',\n  },"
}
```

**Output:**
```
Edit applied successfully.
```

---

## Assistant (Build · Big Pickle · 8.9s)

_Thinking:_

Now update PesananKasir.jsx with animations.

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\kasir\\PesananKasir.jsx",
  "oldString": "    <div style={styles.container}>\n      <div style={styles.topBar}>",
  "newString": "    <div className=\"page-enter\" style={styles.container}>\n      <div className=\"header-enter\" style={styles.topBar}>"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\kasir\\PesananKasir.jsx",
  "oldString": "        <div style={styles.filterRow}>\n          {['Semua', 'Lauk', 'Sayur', 'Minuman'].map((f) => (",
  "newString": "        <div className=\"fade-in-up stagger-1\" style={styles.filterRow}>\n          {['Semua', 'Lauk', 'Sayur', 'Minuman'].map((f) => ("
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\kasir\\PesananKasir.jsx",
  "oldString": "            <div\n              key={menu.id}\n              style={menu.status === 'Habis' ? styles.menuCardHabis : styles.menuCard}\n            >",
  "newString": "            <div\n              key={menu.id}\n              className=\"menu-card-enter hover-lift\"\n              style={menu.status === 'Habis' ? styles.menuCardHabis : styles.menuCard}\n            >"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\kasir\\PesananKasir.jsx",
  "oldString": "          <div style={styles.orderCard}>",
  "newString": "          <div className=\"fade-in-up\" style={styles.orderCard}>"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\kasir\\PesananKasir.jsx",
  "oldString": "          <button\n            style={{ ...styles.payBtn, opacity: cart.length > 0 ? 1 : 0.5 }}\n            disabled={cart.length === 0}\n            onClick={() => navigate('/bayar')}\n          >",
  "newString": "          <button\n            className=\"btn-press hover-bright fade-in-up\"\n            style={{ ...styles.payBtn, opacity: cart.length > 0 ? 1 : 0.5 }}\n            disabled={cart.length === 0}\n            onClick={() => navigate('/bayar')}\n          >"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\kasir\\PesananKasir.jsx",
  "oldString": "  addBtn: {\n    position: 'absolute',\n    top: '8px',\n    right: '8px',\n    width: '22px',\n    height: '22px',\n    background: '#1D9E75',\n    borderRadius: '50%',\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'center',\n    border: 'none',\n    cursor: 'pointer',\n  },",
  "newString": "  addBtn: {\n    position: 'absolute',\n    top: '8px',\n    right: '8px',\n    width: '22px',\n    height: '22px',\n    background: '#1D9E75',\n    borderRadius: '50%',\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'center',\n    border: 'none',\n    cursor: 'pointer',\n    transition: 'transform 0.2s, background 0.2s',\n  },"
}
```

**Output:**
```
Edit applied successfully.
```

---

## Assistant (Build · Big Pickle · 11.4s)

_Thinking:_

Now update ProsesPembayaran.jsx, RiwayatTransaksi.jsx, and StrukPembayaran.jsx.

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\kasir\\ProsesPembayaran.jsx",
  "oldString": "    <div style={styles.container}>\n      <div style={styles.topBar}>",
  "newString": "    <div className=\"page-enter\" style={styles.container}>\n      <div className=\"header-enter\" style={styles.topBar}>"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\kasir\\ProsesPembayaran.jsx",
  "oldString": "        <div style={styles.summaryCard}>",
  "newString": "        <div className=\"fade-in-up stagger-1\" style={styles.summaryCard}>"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\kasir\\ProsesPembayaran.jsx",
  "oldString": "        <div style={styles.sectionLabel}>Jumlah Bayar</div>\n        <div style={styles.amountCard}>",
  "newString": "        <div className=\"fade-in-up stagger-2\" style={styles.sectionLabel}>Jumlah Bayar</div>\n        <div className=\"fade-in-scale stagger-2\" style={styles.amountCard}>"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\kasir\\ProsesPembayaran.jsx",
  "oldString": "        <div style={styles.quickLabel}>Nominal Cepat:</div>\n        <div style={styles.quickRow}>",
  "newString": "        <div className=\"fade-in-up stagger-3\" style={styles.quickLabel}>Nominal Cepat:</div>\n        <div className=\"fade-in-up stagger-3\" style={styles.quickRow}>"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\kasir\\ProsesPembayaran.jsx",
  "oldString": "        <div style={styles.kembalianCard}>",
  "newString": "        <div className=\"fade-in-up stagger-4\" style={styles.kembalianCard}>"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\kasir\\ProsesPembayaran.jsx",
  "oldString": "        <div style={styles.metodeLabel}>Metode Bayar:</div>\n        <div style={styles.metodeRow}>",
  "newString": "        <div className=\"fade-in-up stagger-5\" style={styles.metodeLabel}>Metode Bayar:</div>\n        <div className=\"fade-in-up stagger-5\" style={styles.metodeRow}>"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\kasir\\ProsesPembayaran.jsx",
  "oldString": "        <button style={styles.confirmBtn} onClick={handleConfirm}>",
  "newString": "        <button className=\"btn-press hover-bright fade-in-up stagger-6\" style={styles.confirmBtn} onClick={handleConfirm}>"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\kasir\\ProsesPembayaran.jsx",
  "oldString": "            <div\n              key={val}\n              style={paid === val ? styles.quickPillActive : styles.quickPill}\n              onClick={() => setPaid(val)}\n            >",
  "newString": "            <div\n              key={val}\n              className=\"btn-press hover-scale\"\n              style={paid === val ? styles.quickPillActive : styles.quickPill}\n              onClick={() => setPaid(val)}\n            >"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\kasir\\ProsesPembayaran.jsx",
  "oldString": "          <button\n            style={method === 'Tunai' ? styles.metodeBtnActive : styles.metodeBtnInactive}\n            onClick={() => setMethod('Tunai')}\n          >\n            <IconCash size={18} /> Tunai\n          </button>\n          <button\n            style={method === 'QRIS' ? styles.metodeBtnActive : styles.metodeBtnInactive}\n            onClick={() => setMethod('QRIS')}\n          >\n            <IconQrcode size={18} /> QRIS\n          </button>",
  "newString": "          <button\n            className=\"btn-press\"\n            style={method === 'Tunai' ? styles.metodeBtnActive : styles.metodeBtnInactive}\n            onClick={() => setMethod('Tunai')}\n          >\n            <IconCash size={18} /> Tunai\n          </button>\n          <button\n            className=\"btn-press\"\n            style={method === 'QRIS' ? styles.metodeBtnActive : styles.metodeBtnInactive}\n            onClick={() => setMethod('QRIS')}\n          >\n            <IconQrcode size={18} /> QRIS\n          </button>"
}
```

**Output:**
```
Edit applied successfully.
```

---

## Assistant (Build · Big Pickle · 9.2s)

_Thinking:_

Now update RiwayatTransaksi.jsx and StrukPembayaran.jsx.

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\kasir\\RiwayatTransaksi.jsx",
  "oldString": "    <div style={styles.container}>\n      <div style={styles.header}>",
  "newString": "    <div className=\"page-enter\" style={styles.container}>\n      <div className=\"header-enter\" style={styles.header}>"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\kasir\\RiwayatTransaksi.jsx",
  "oldString": "            <div\n              key={trx.id_transaksi || trx.id}\n              style={styles.trxCard}\n              onClick={() => openStruk(trx)}\n            >",
  "newString": "            <div\n              key={trx.id_transaksi || trx.id}\n              className=\"list-item-enter hover-lift\"\n              style={styles.trxCard}\n              onClick={() => openStruk(trx)}\n            >"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\kasir\\RiwayatTransaksi.jsx",
  "oldString": "          {filtered.length === 0 && <div style={styles.empty}>Belum ada transaksi.</div>}",
  "newString": "          {filtered.length === 0 && <div className=\"fade-in\" style={styles.empty}>Belum ada transaksi.</div>}"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\kasir\\RiwayatTransaksi.jsx",
  "oldString": "  trxCard: {\n    background: '#fff',\n    borderRadius: '16px',\n    padding: '16px',\n    border: '1.5px solid #EAE5DA',\n    cursor: 'pointer',\n  },",
  "newString": "  trxCard: {\n    background: '#fff',\n    borderRadius: '16px',\n    padding: '16px',\n    border: '1.5px solid #EAE5DA',\n    cursor: 'pointer',\n    transition: 'transform 0.2s ease, box-shadow 0.2s ease',\n  },"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\kasir\\StrukPembayaran.jsx",
  "oldString": "    <div style={styles.container}>\n      <div style={styles.topBar}>",
  "newString": "    <div className=\"page-enter\" style={styles.container}>\n      <div className=\"header-enter\" style={styles.topBar}>"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\kasir\\StrukPembayaran.jsx",
  "oldString": "        <div style={styles.receipt}>",
  "newString": "        <div className=\"fade-in-scale stagger-1\" style={styles.receipt}>"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\kasir\\StrukPembayaran.jsx",
  "oldString": "        <div style={styles.actionRow}>",
  "newString": "        <div className=\"fade-in-up stagger-2\" style={styles.actionRow}>"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\kasir\\StrukPembayaran.jsx",
  "oldString": "        <button style={styles.newTrxBtn} onClick={() => navigate('/pesan')}>",
  "newString": "        <button className=\"btn-press hover-bright fade-in-up stagger-3\" style={styles.newTrxBtn} onClick={() => navigate('/pesan')}>"
}
```

**Error:**
```
Found multiple matches for oldString. Provide more surrounding context to make the match unique.
```

---

## Assistant (Build · Big Pickle · 3.6s)

_Thinking:_

There are two instances of `style={styles.newTrxBtn}` in StrukPembayaran.jsx - one in the empty state and one in the main state. Let me find the one in the empty state and the one in the main view to handle them differently.

**Tool: read**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\kasir\\StrukPembayaran.jsx",
  "offset": 54,
  "limit": 20
}
```

**Output:**
```
<path>E:\UDIN\Kuliah\Mata Kuliah\Rekayasa Perangkat Lunak\Tugas 6\wdms-app\wdms-frontend\src\pages\kasir\StrukPembayaran.jsx</path>
<type>file</type>
<content>
54:     return (
55:       <div style={styles.container}>
56:         <div style={styles.body}>Data transaksi tidak ditemukan.</div>
57:         <button style={styles.newTrxBtn} onClick={() => navigate('/pesan')}>
58:           <IconPlus size={18} /> Transaksi Baru
59:         </button>
60:       </div>
61:     );
62:   }
63: 
64:   const d = trx.date ? new Date(trx.date) : new Date();
65:   const dateStr = `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1).toString().padStart(2, '0')}/${d.getFullYear()} ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`;
66:   const trxId = String(trx.id_transaksi || trx.id || '').slice(-4); // Last 4 digits
67: 
68:   return (
69:     <div className="page-enter" style={styles.container}>
70:       <div className="header-enter" style={styles.topBar}>
71:         <div style={styles.topTitle}>Struk Pembayaran</div>
72:       </div>
73: 

(Showing lines 54-73 of 308. Use offset=74 to continue.)
</content>
```

---

## Assistant (Build · Big Pickle · 4.2s)

_Thinking:_

I see - there's one in the empty state at line 57 and one in the main view at the bottom (probably around line 144). Let me update both of them.

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\kasir\\StrukPembayaran.jsx",
  "oldString": "        <div style={styles.body}>Data transaksi tidak ditemukan.</div>\n        <button style={styles.newTrxBtn} onClick={() => navigate('/pesan')}>",
  "newString": "        <div className=\"fade-in\" style={styles.body}>Data transaksi tidak ditemukan.</div>\n        <button className=\"btn-press hover-bright fade-in-up stagger-1\" style={styles.newTrxBtn} onClick={() => navigate('/pesan')}>"
}
```

**Output:**
```
Edit applied successfully.
```

---

## Assistant (Build · Big Pickle · 12.0s)

_Thinking:_

Now update the pemilik pages. Let me do DashboardPemilik.jsx, KelolaMenu.jsx, LaporanPenjualan.jsx, and ManajemenStok.jsx.

Now update the pemilik pages:

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\pemilik\\DashboardPemilik.jsx",
  "oldString": "    <div style={styles.container}>\n      <div style={styles.header}>",
  "newString": "    <div className=\"page-enter\" style={styles.container}>\n      <div className=\"header-enter\" style={styles.header}>"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\pemilik\\DashboardPemilik.jsx",
  "oldString": "        <div style={styles.adviceCard}>",
  "newString": "        <div className=\"fade-in-up stagger-1\" style={styles.adviceCard}>"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\pemilik\\DashboardPemilik.jsx",
  "oldString": "        <div style={styles.statsRow}>\n          <div style={{ ...styles.statCard, ...styles.incomeCard }}>\n            <div style={{ ...styles.statLabel, color: '#3B6D11' }}>PENDAPATAN</div>\n            <div style={{ ...styles.statValue, color: '#27500A' }}>\n              {formatIDR(stats.total_pendapatan)}\n            </div>\n            <div style={{ ...styles.statSub, color: '#3B6D11' }}>Hari ini</div>\n          </div>\n          <div style={{ ...styles.statCard, ...styles.trxCard }}>\n            <div style={{ ...styles.statLabel, color: '#993C1D' }}>TRANSAKSI</div>\n            <div style={{ ...styles.statValue, color: '#D85A30' }}>{stats.total_transaksi}</div>\n            <div style={{ ...styles.statSub, color: '#993C1D' }}>Hari ini</div>\n          </div>\n        </div>",
  "newString": "        <div className=\"fade-in-up stagger-2\" style={styles.statsRow}>\n          <div className=\"fade-in-scale stagger-2\" style={{ ...styles.statCard, ...styles.incomeCard }}>\n            <div style={{ ...styles.statLabel, color: '#3B6D11' }}>PENDAPATAN</div>\n            <div className=\"stat-enter\" style={{ ...styles.statValue, color: '#27500A' }}>\n              {formatIDR(stats.total_pendapatan)}\n            </div>\n            <div style={{ ...styles.statSub, color: '#3B6D11' }}>Hari ini</div>\n          </div>\n          <div className=\"fade-in-scale stagger-3\" style={{ ...styles.statCard, ...styles.trxCard }}>\n            <div style={{ ...styles.statLabel, color: '#993C1D' }}>TRANSAKSI</div>\n            <div className=\"stat-enter\" style={{ ...styles.statValue, color: '#D85A30' }}>{stats.total_transaksi}</div>\n            <div style={{ ...styles.statSub, color: '#993C1D' }}>Hari ini</div>\n          </div>\n        </div>"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\pemilik\\DashboardPemilik.jsx",
  "oldString": "        <div style={styles.sectionTitle}>Menu Terlaris Hari Ini</div>\n        <div style={styles.menuPopular}>",
  "newString": "        <div className=\"fade-in-up stagger-4\" style={styles.sectionTitle}>Menu Terlaris Hari Ini</div>\n        <div className=\"fade-in-up stagger-4\" style={styles.menuPopular}>"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\pemilik\\DashboardPemilik.jsx",
  "oldString": "                    style={{\n                      ...styles.menuBarFill,\n                      width: `${(menu.total_terjual / maxTerjual) * 100}%`,\n                      background: barColors[i],\n                    }}",
  "newString": "                    className=\"bar-fill\"\n                    style={{\n                      ...styles.menuBarFill,\n                      width: `${(menu.total_terjual / maxTerjual) * 100}%`,\n                      background: barColors[i],\n                    }}"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\pemilik\\DashboardPemilik.jsx",
  "oldString": "        <div style={styles.sectionTitle}>Menu Cepat</div>\n        <div style={styles.quickGrid}>",
  "newString": "        <div className=\"fade-in-up stagger-5\" style={styles.sectionTitle}>Menu Cepat</div>\n        <div className=\"fade-in-up stagger-5\" style={styles.quickGrid}>"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\pemilik\\DashboardPemilik.jsx",
  "oldString": "function QuickBtn({ icon, label, bg, onClick }) {\n  return (\n    <button style={{ ...styles.quickBtn, background: bg }} onClick={onClick}>",
  "newString": "function QuickBtn({ icon, label, bg, onClick }) {\n  return (\n    <button className=\"hover-lift btn-press\" style={{ ...styles.quickBtn, background: bg }} onClick={onClick}>"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\pemilik\\DashboardPemilik.jsx",
  "oldString": "  quickBtn: {\n    borderRadius: '18px',\n    padding: '16px 14px',\n    display: 'flex',\n    flexDirection: 'column',\n    alignItems: 'flex-start',\n    gap: '6px',\n    border: 'none',\n    cursor: 'pointer',\n    textAlign: 'left',\n  },",
  "newString": "  quickBtn: {\n    borderRadius: '18px',\n    padding: '16px 14px',\n    display: 'flex',\n    flexDirection: 'column',\n    alignItems: 'flex-start',\n    gap: '6px',\n    border: 'none',\n    cursor: 'pointer',\n    textAlign: 'left',\n    transition: 'transform 0.2s ease, box-shadow 0.2s ease',\n  },"
}
```

**Output:**
```
Edit applied successfully.
```

---

## Assistant (Build · Big Pickle · 10.3s)

_Thinking:_

Now update KelolaMenu.jsx, LaporanPenjualan.jsx, ManajemenStok.jsx, and the remaining shared pages/components.

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\pemilik\\KelolaMenu.jsx",
  "oldString": "    <div style={styles.container}>\n      {/* ── Header ── */}\n      <div style={styles.header}>",
  "newString": "    <div className=\"page-enter\" style={styles.container}>\n      {/* ── Header ── */}\n      <div className=\"header-enter\" style={styles.header}>"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\pemilik\\KelolaMenu.jsx",
  "oldString": "        {filteredMenus.map((menu) => (\n          <div key={menu.id} style={styles.menuCard}>",
  "newString": "        {filteredMenus.map((menu, i) => (\n          <div key={menu.id} className={`menu-card-enter stagger-${Math.min(i + 1, 8)}`} style={styles.menuCard}>"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\pemilik\\KelolaMenu.jsx",
  "oldString": "                <IconDotsVertical\n                  size={20}\n                  color=\"#888780\"\n                  style={{ cursor: 'pointer' }}\n                  onClick={() => setActiveActionId(activeActionId === menu.id ? null : menu.id)}\n                />",
  "newString": "                <IconDotsVertical\n                  size={20}\n                  color=\"#888780\"\n                  className=\"btn-press\"\n                  style={{ cursor: 'pointer' }}\n                  onClick={() => setActiveActionId(activeActionId === menu.id ? null : menu.id)}\n                />"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\pemilik\\KelolaMenu.jsx",
  "oldString": "      <button style={styles.fab} onClick={openAddModal}>",
  "newString": "      <button className=\"hover-lift btn-press pulse-anim\" style={styles.fab} onClick={openAddModal}>"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\pemilik\\KelolaMenu.jsx",
  "oldString": "        <div style={styles.modalOverlay} onClick={resetAndCloseModal}>\n          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>",
  "newString": "        <div className=\"modal-overlay-enter\" style={styles.modalOverlay} onClick={resetAndCloseModal}>\n          <div className=\"modal-content-enter\" style={styles.modalContent} onClick={(e) => e.stopPropagation()}>"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\pemilik\\KelolaMenu.jsx",
  "oldString": "  modalOverlay: {\n    position: 'fixed',\n    inset: 0,\n    background: 'rgba(0,0,0,0.45)',\n    display: 'flex',\n    alignItems: 'flex-end',\n    justifyContent: 'center',\n    zIndex: 9999,\n    animation: 'fadeIn 0.2s ease',\n  },\n  modalContent: {\n    background: '#fff',\n    width: '100%',\n    maxWidth: '480px',\n    maxHeight: '92vh',\n    borderRadius: '24px 24px 0 0',\n    display: 'flex',\n    flexDirection: 'column',\n    animation: 'slideUp 0.3s ease',\n    overflow: 'hidden',\n  },",
  "newString": "  modalOverlay: {\n    position: 'fixed',\n    inset: 0,\n    background: 'rgba(0,0,0,0.45)',\n    display: 'flex',\n    alignItems: 'flex-end',\n    justifyContent: 'center',\n    zIndex: 9999,\n  },\n  modalContent: {\n    background: '#fff',\n    width: '100%',\n    maxWidth: '480px',\n    maxHeight: '92vh',\n    borderRadius: '24px 24px 0 0',\n    display: 'flex',\n    flexDirection: 'column',\n    overflow: 'hidden',\n  },"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\pemilik\\KelolaMenu.jsx",
  "oldString": "  menuCard: {\n    background: '#fff',\n    borderRadius: '16px',\n    padding: '12px',\n    display: 'flex',\n    gap: '12px',\n    alignItems: 'center',\n    border: '1.5px solid #EAE5DA',\n  },",
  "newString": "  menuCard: {\n    background: '#fff',\n    borderRadius: '16px',\n    padding: '12px',\n    display: 'flex',\n    gap: '12px',\n    alignItems: 'center',\n    border: '1.5px solid #EAE5DA',\n    transition: 'transform 0.2s ease, box-shadow 0.2s ease',\n  },"
}
```

**Output:**
```
Edit applied successfully.
```

---

## Assistant (Build · Big Pickle · 11.5s)

_Thinking:_

Now update LaporanPenjualan.jsx, ManajemenStok.jsx, Pengaturan.jsx, and BottomNav.jsx.

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\pemilik\\LaporanPenjualan.jsx",
  "oldString": "      <div style={styles.header}>\n        <div style={styles.headerTitle}>Laporan Penjualan</div>\n        <div style={styles.periodeTabs}>",
  "newString": "      <div className=\"header-enter\" style={styles.header}>\n        <div style={styles.headerTitle}>Laporan Penjualan</div>\n        <div className=\"fade-in-up stagger-1\" style={styles.periodeTabs}>"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\pemilik\\LaporanPenjualan.jsx",
  "oldString": "    <div style={styles.container}>\n      <style>{`",
  "newString": "    <div className=\"page-enter\" style={styles.container}>\n      <style>{`"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\pemilik\\LaporanPenjualan.jsx",
  "oldString": "        <div style={styles.statsRow}>\n          <div style={styles.statCard}>\n            <div style={styles.statLabel}>Total Pendapatan</div>\n            <div style={{ ...styles.statValue, color: '#C94040' }}>\n              {formatIDR(stats.total_pendapatan)}\n            </div>\n          </div>\n          <div style={styles.statCard}>\n            <div style={styles.statLabel}>Total Transaksi</div>\n            <div style={{ ...styles.statValue, color: '#2C2C2A' }}>{stats.total_transaksi}</div>\n          </div>\n        </div>",
  "newString": "        <div className=\"fade-in-up stagger-2\" style={styles.statsRow}>\n          <div className=\"fade-in-scale stagger-2\" style={styles.statCard}>\n            <div style={styles.statLabel}>Total Pendapatan</div>\n            <div className=\"stat-enter\" style={{ ...styles.statValue, color: '#C94040' }}>\n              {formatIDR(stats.total_pendapatan)}\n            </div>\n          </div>\n          <div className=\"fade-in-scale stagger-3\" style={styles.statCard}>\n            <div style={styles.statLabel}>Total Transaksi</div>\n            <div className=\"stat-enter\" style={{ ...styles.statValue, color: '#2C2C2A' }}>{stats.total_transaksi}</div>\n          </div>\n        </div>"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\pemilik\\LaporanPenjualan.jsx",
  "oldString": "        <div style={styles.sectionTitle}>Menu Terlaris</div>\n        <div style={styles.menuPopular}>",
  "newString": "        <div className=\"fade-in-up stagger-4\" style={styles.sectionTitle}>Menu Terlaris</div>\n        <div className=\"fade-in-up stagger-4\" style={styles.menuPopular}>"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\pemilik\\LaporanPenjualan.jsx",
  "oldString": "        <div style={styles.sectionTitle}>Grafik Penjualan</div>\n        <div style={styles.chartCard}>\n          <div style={styles.chartPlaceholder}>\n            {[40, 70, 50, 90, 60, 80, 100].map((h, i) => (\n              <div key={i} style={{ ...styles.bar, height: `${h}%` }}></div>\n            ))}\n          </div>\n          <div style={styles.chartLabels}>",
  "newString": "        <div className=\"fade-in-up stagger-5\" style={styles.sectionTitle}>Grafik Penjualan</div>\n        <div className=\"fade-in-up stagger-5\" style={styles.chartCard}>\n          <div style={styles.chartPlaceholder}>\n            {[40, 70, 50, 90, 60, 80, 100].map((h, i) => (\n              <div key={i} className={`chart-bar stagger-${i + 1}`} style={{ ...styles.bar, height: `${h}%` }}></div>\n            ))}\n          </div>\n          <div style={styles.chartLabels}>"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\pemilik\\LaporanPenjualan.jsx",
  "oldString": "        <button style={styles.exportBtn} onClick={handleExport}>",
  "newString": "        <button className=\"btn-press hover-glow fade-in-up stagger-6\" style={styles.exportBtn} onClick={handleExport}>"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\pemilik\\LaporanPenjualan.jsx",
  "oldString": "      {showPreview && (\n        <div className=\"print-report-preview\" style={styles.previewOverlay}>",
  "newString": "      {showPreview && (\n        <div className=\"print-report-preview modal-overlay-enter\" style={styles.previewOverlay}>"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\pemilik\\LaporanPenjualan.jsx",
  "oldString": "          <div style={styles.previewSheet}>",
  "newString": "          <div className=\"modal-content-enter\" style={styles.previewSheet}>"
}
```

**Output:**
```
Edit applied successfully.
```

---

## Assistant (Build · Big Pickle · 13.7s)

_Thinking:_

Now update ManajemenStok.jsx, Pengaturan.jsx, and BottomNav.jsx.

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\pemilik\\ManajemenStok.jsx",
  "oldString": "    <div style={styles.container}>\n      <div style={styles.header}>",
  "newString": "    <div className=\"page-enter\" style={styles.container}>\n      <div className=\"header-enter\" style={styles.header}>"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\pemilik\\ManajemenStok.jsx",
  "oldString": "            <div key={menu.id_menu} style={styles.menuCard}>",
  "newString": "            <div key={menu.id_menu} className=\"menu-card-enter\" style={styles.menuCard}>"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\pemilik\\ManajemenStok.jsx",
  "oldString": "        <button style={styles.resetBtn} onClick={handleResetAll}>",
  "newString": "        <button className=\"btn-press hover-glow fade-in-up\" style={styles.resetBtn} onClick={handleResetAll}>"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\pemilik\\ManajemenStok.jsx",
  "oldString": "                    <button style={styles.saveBtn} onClick={() => handleUpdateStok(menu.id_menu)}>",
  "newString": "                    <button className=\"btn-press hover-bright\" style={styles.saveBtn} onClick={() => handleUpdateStok(menu.id_menu)}>"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\pemilik\\ManajemenStok.jsx",
  "oldString": "  menuCard: {\n    background: '#fff',\n    borderRadius: '16px',\n    padding: '14px',\n    display: 'flex',\n    justifyContent: 'space-between',\n    alignItems: 'center',\n    border: '1.5px solid #EAE5DA',\n  },",
  "newString": "  menuCard: {\n    background: '#fff',\n    borderRadius: '16px',\n    padding: '14px',\n    display: 'flex',\n    justifyContent: 'space-between',\n    alignItems: 'center',\n    border: '1.5px solid #EAE5DA',\n    transition: 'transform 0.2s ease, box-shadow 0.2s ease',\n  },"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\shared\\Pengaturan.jsx",
  "oldString": "    <div style={styles.container}>\n      <div style={{ ...styles.header, background: primaryColor }}>",
  "newString": "    <div className=\"page-enter\" style={styles.container}>\n      <div className=\"header-enter\" style={{ ...styles.header, background: primaryColor }}>"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\shared\\Pengaturan.jsx",
  "oldString": "        <div style={styles.profileCard}>",
  "newString": "        <div className=\"fade-in-up stagger-1\" style={styles.profileCard}>"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\shared\\Pengaturan.jsx",
  "oldString": "        <div style={styles.menuGroup}>",
  "newString": "        <div className=\"fade-in-up stagger-2\" style={styles.menuGroup}>"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\shared\\Pengaturan.jsx",
  "oldString": "        <button style={styles.logoutBtn} onClick={handleLogout}>",
  "newString": "        <button className=\"btn-press hover-bright fade-in-up stagger-3\" style={styles.logoutBtn} onClick={handleLogout}>"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\shared\\Pengaturan.jsx",
  "oldString": "function MenuItem({ icon, label }) {\n  return (\n    <div style={styles.menuItem}>",
  "newString": "function MenuItem({ icon, label }) {\n  return (\n    <div className=\"hover-lift\" style={styles.menuItem}>"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\shared\\Pengaturan.jsx",
  "oldString": "  menuItem: {\n    padding: '16px',\n    display: 'flex',\n    justifyContent: 'space-between',\n    alignItems: 'center',\n    borderBottom: '1px solid #F1EFE8',\n    cursor: 'pointer',\n  },",
  "newString": "  menuItem: {\n    padding: '16px',\n    display: 'flex',\n    justifyContent: 'space-between',\n    alignItems: 'center',\n    borderBottom: '1px solid #F1EFE8',\n    cursor: 'pointer',\n    transition: 'background 0.2s ease',\n  },"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\components\\BottomNav.jsx",
  "oldString": "    <div style={styles.navContainer}>",
  "newString": "    <div className=\"nav-enter\" style={styles.navContainer}>"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\components\\BottomNav.jsx",
  "oldString": "      style={({ isActive }) => ({\n        ...styles.navItem,\n        color: isActive ? '#C94040' : '#B4B2A9',\n      })}",
  "newString": "      className=\"btn-press\"\n      style={({ isActive }) => ({\n        ...styles.navItem,\n        color: isActive ? '#C94040' : '#B4B2A9',\n      })}"
}
```

**Output:**
```
Edit applied successfully.
```

---

## Assistant (Build · Big Pickle · 7.2s)

_Thinking:_

Now let me also add hover effect on the avatar and make the transitions a bit nicer in DashboardKasir's avatar and PesananKasir's filter pills. Let me also add some additional animation touches to index.css to enhance.

Let me also add the `transition` for hover on the avatars. Let me also update the `activeDot` in BottomNav to have a transition.

Let me update the todo and verify the changes work.

Now let me add hover transitions to a few remaining style objects and verify:

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\components\\BottomNav.jsx",
  "oldString": "  navItem: {\n    display: 'flex',\n    flexDirection: 'column',\n    alignItems: 'center',\n    gap: '4px',\n    cursor: 'pointer',\n    textDecoration: 'none',\n  },",
  "newString": "  navItem: {\n    display: 'flex',\n    flexDirection: 'column',\n    alignItems: 'center',\n    gap: '4px',\n    cursor: 'pointer',\n    textDecoration: 'none',\n    transition: 'color 0.2s ease',\n  },"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\pemilik\\DashboardPemilik.jsx",
  "oldString": "  avatar: {\n    position: 'absolute',\n    top: '16px',\n    right: '18px',\n    width: '40px',\n    height: '40px',\n    borderRadius: '50%',\n    background: '#f5c4c4',\n    border: '2.5px solid #fff',\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'center',\n    fontSize: '18px',\n  },",
  "newString": "  avatar: {\n    position: 'absolute',\n    top: '16px',\n    right: '18px',\n    width: '40px',\n    height: '40px',\n    borderRadius: '50%',\n    background: '#f5c4c4',\n    border: '2.5px solid #fff',\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'center',\n    fontSize: '18px',\n    transition: 'transform 0.3s ease',\n  },"
}
```

**Output:**
```
Edit applied successfully.
```

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\pemilik\\LaporanPenjualan.jsx",
  "oldString": "  bar: { width: '24px', background: '#C94040', borderRadius: '4px 4px 0 0', opacity: 0.8 },",
  "newString": "  bar: { width: '24px', background: '#C94040', borderRadius: '4px 4px 0 0', opacity: 0.8, transition: 'opacity 0.3s' },"
}
```

**Output:**
```
Edit applied successfully.
```

---

## Assistant (Build · Big Pickle · 5.5s)

_Thinking:_

Let me also add a hover effect on the PesananKasir menu cards - add a CSS transition inline. Let me also add a hover effect on the filter pills. Let me also update the `pillActive` and `pillInactive` in PesananKasir and the tabs in LaporanPenjualan.

Actually, the filter pills already work. Let me add transitions to them.

**Tool: edit**

**Input:**
```json
{
  "filePath": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend\\src\\pages\\kasir\\PesananKasir.jsx",
  "oldString": "  pillActive: {\n    padding: '7px 16px',\n    borderRadius: '50px',\n    fontSize: '12px',\n    fontWeight: '800',\n    border: 'none',\n    cursor: 'pointer',\n    whiteSpace: 'nowrap',\n    background: '#1D9E75',\n    color: '#fff',\n  },\n  pillInactive: {\n    padding: '7px 16px',\n    borderRadius: '50px',\n    fontSize: '12px',\n    fontWeight: '800',\n    border: '1.5px solid #D3D1C7',\n    cursor: 'pointer',\n    whiteSpace: 'nowrap',\n    background: '#fff',\n    color: '#5F5E5A',\n  },",
  "newString": "  pillActive: {\n    padding: '7px 16px',\n    borderRadius: '50px',\n    fontSize: '12px',\n    fontWeight: '800',\n    border: 'none',\n    cursor: 'pointer',\n    whiteSpace: 'nowrap',\n    background: '#1D9E75',\n    color: '#fff',\n    transition: 'all 0.2s ease',\n  },\n  pillInactive: {\n    padding: '7px 16px',\n    borderRadius: '50px',\n    fontSize: '12px',\n    fontWeight: '800',\n    border: '1.5px solid #D3D1C7',\n    cursor: 'pointer',\n    whiteSpace: 'nowrap',\n    background: '#fff',\n    color: '#5F5E5A',\n    transition: 'all 0.2s ease',\n  },"
}
```

**Output:**
```
Edit applied successfully.
```

---

## Assistant (Build · Big Pickle · 3.5s)

_Thinking:_

Now let me update the todo list and verify the build works.

**Tool: todowrite**

**Input:**
```json
{
  "todos": [
    {
      "priority": "high",
      "content": "Create src/animations.css with global animation classes",
      "status": "completed"
    },
    {
      "priority": "high",
      "content": "Import animations.css in main.jsx",
      "status": "completed"
    },
    {
      "priority": "high",
      "content": "Update Login.jsx with page/card/button animations",
      "status": "completed"
    },
    {
      "priority": "high",
      "content": "Update all kasir pages with animations",
      "status": "completed"
    },
    {
      "priority": "high",
      "content": "Update all pemilik pages with animations",
      "status": "completed"
    },
    {
      "priority": "high",
      "content": "Update shared pages and components with animations",
      "status": "completed"
    },
    {
      "priority": "medium",
      "content": "Verify build succeeds",
      "status": "in_progress"
    }
  ]
}
```

**Output:**
```
[
  {
    "content": "Create src/animations.css with global animation classes",
    "status": "completed",
    "priority": "high"
  },
  {
    "content": "Import animations.css in main.jsx",
    "status": "completed",
    "priority": "high"
  },
  {
    "content": "Update Login.jsx with page/card/button animations",
    "status": "completed",
    "priority": "high"
  },
  {
    "content": "Update all kasir pages with animations",
    "status": "completed",
    "priority": "high"
  },
  {
    "content": "Update all pemilik pages with animations",
    "status": "completed",
    "priority": "high"
  },
  {
    "content": "Update shared pages and components with animations",
    "status": "completed",
    "priority": "high"
  },
  {
    "content": "Verify build succeeds",
    "status": "in_progress",
    "priority": "medium"
  }
]
```

---

## Assistant (Build · Big Pickle · 6.7s)

_Thinking:_

Let me check if there's a build script to verify the project compiles correctly.

**Tool: bash**

**Input:**
```json
{
  "command": "npm run build 2>&1",
  "workdir": "E:\\UDIN\\Kuliah\\Mata Kuliah\\Rekayasa Perangkat Lunak\\Tugas 6\\wdms-app\\wdms-frontend",
  "timeout": 60000
}
```

**Output:**
```

> wdms-app@0.0.0 build
> vite build

[36mvite v8.1.3 [32mbuilding client environment for production...[36m[39m
[2Ktransforming...✓ 6242 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                   0.55 kB │ gzip:   0.33 kB
dist/assets/logo-BGqu-PBy.png   638.39 kB
dist/assets/index-eIsbWARP.css    3.97 kB │ gzip:   1.23 kB
dist/assets/index-CWFqYsdt.js   360.36 kB │ gzip: 108.76 kB

[32m✓ built in 1.57s[39m

```

---

## Assistant (Build · Big Pickle · 3.4s)

_Thinking:_

The build succeeded. Let me update the todos.

**Tool: todowrite**

**Input:**
```json
{
  "todos": [
    {
      "priority": "high",
      "content": "Create src/animations.css with global animation classes",
      "status": "completed"
    },
    {
      "priority": "high",
      "content": "Import animations.css in main.jsx",
      "status": "completed"
    },
    {
      "priority": "high",
      "content": "Update Login.jsx with page/card/button animations",
      "status": "completed"
    },
    {
      "priority": "high",
      "content": "Update all kasir pages with animations",
      "status": "completed"
    },
    {
      "priority": "high",
      "content": "Update all pemilik pages with animations",
      "status": "completed"
    },
    {
      "priority": "high",
      "content": "Update shared pages and components with animations",
      "status": "completed"
    },
    {
      "priority": "medium",
      "content": "Verify build succeeds",
      "status": "completed"
    }
  ]
}
```

**Output:**
```
[
  {
    "content": "Create src/animations.css with global animation classes",
    "status": "completed",
    "priority": "high"
  },
  {
    "content": "Import animations.css in main.jsx",
    "status": "completed",
    "priority": "high"
  },
  {
    "content": "Update Login.jsx with page/card/button animations",
    "status": "completed",
    "priority": "high"
  },
  {
    "content": "Update all kasir pages with animations",
    "status": "completed",
    "priority": "high"
  },
  {
    "content": "Update all pemilik pages with animations",
    "status": "completed",
    "priority": "high"
  },
  {
    "content": "Update shared pages and components with animations",
    "status": "completed",
    "priority": "high"
  },
  {
    "content": "Verify build succeeds",
    "status": "completed",
    "priority": "medium"
  }
]
```

---

## Assistant (Build · Big Pickle · 7.1s)

_Thinking:_

All done. Let me provide a summary.

Semua animasi sudah diterapkan. Berikut ringkasan perubahannya:

**File baru:**
- `src/animations.css` — file CSS global berisi ~20 keyframes dan utility classes (`fade-in-up`, `fade-in-scale`, `slide-in-right`, `hover-lift`, `btn-press`, `bar-fill`, `stagger-1` s/d `stagger-8`, dll.)

**Perubahan pada halaman/komponen (11 file):**

| File | Animasi |
|---|---|
| `main.jsx` | import `animations.css` |
| `Login.jsx` | `page-enter`, `bounce-in` (logo), `fade-in-up` (toggle, form, hint), `btn-press` + `hover-bright` (tombol) |
| `DashboardKasir.jsx` | `page-enter`, `header-enter`, `fade-in-scale` (stats), `quick-btn-enter` + `hover-lift` (tombol cepat) |
| `PesananKasir.jsx` | `page-enter`, `header-enter`, `menu-card-enter` + `hover-lift` (grid menu), filter pills `transition` |
| `ProsesPembayaran.jsx` | `page-enter`, `header-enter`, `fade-in-up` + staggered (summary, amount, metode), `btn-press` |
| `RiwayatTransaksi.jsx` | `page-enter`, `header-enter`, `list-item-enter` + `hover-lift` (card transaksi) |
| `StrukPembayaran.jsx` | `page-enter`, `header-enter`, `fade-in-scale` (struk), `btn-press` |
| `DashboardPemilik.jsx` | `page-enter`, `header-enter`, staggered cards, `bar-fill` (progress bar), `stat-enter` (angka), `hover-lift` (tombol cepat) |
| `KelolaMenu.jsx` | `page-enter`, `header-enter`, `menu-card-enter` staggered, `pulse-anim` (FAB), modal pakai `modal-overlay-enter`/`modal-content-enter` |
| `LaporanPenjualan.jsx` | `page-enter`, staggered cards, `chart-bar` (grafik batang), `hover-glow` (export), preview modal animasi |
| `ManajemenStok.jsx` | `page-enter`, `header-enter`, `menu-card-enter`, `hover-glow` (reset) |
| `Pengaturan.jsx` | `page-enter`, `header-enter`, staggered profile/menu, `hover-lift` (menu items) |
| `BottomNav.jsx` | `nav-enter`, `btn-press` (nav items), `transition` warna |

---

