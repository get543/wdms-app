import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAppContext } from '../../context/AppContext';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Pemilik');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAppContext();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Harap isi username dan password');
      return;
    }
    setIsLoading(true);
    setError('');
    const result = await login(username, password);
    setIsLoading(false);
    if (result.success) {
      navigate(result.user.role === 'Pemilik' ? '/dashboard-pemilik' : '/dashboard-kasir');
    } else {
      setError(result.message || 'Login gagal.');
    }
  };

  return (
    <div className="page-enter" style={styles.container}>
      <div className="bounce-in" style={styles.logoWrap}>
        <div style={styles.logo}>WDMS</div>
        <div style={styles.subtitle}>Warteg Digital Management System</div>
      </div>

      <div className="fade-in-up stagger-1" style={styles.roleToggle}>
        <button
          className="btn-press hover-bright"
          style={{
            ...styles.toggleBtn,
            ...(role === 'Pemilik' ? styles.activeRole : styles.inactiveRole),
          }}
          onClick={() => setRole('Pemilik')}
        >
          👨‍🍳 Pemilik
        </button>
        <button
          className="btn-press hover-bright"
          style={{
            ...styles.toggleBtn,
            ...(role === 'Kasir' ? styles.activeRole : styles.inactiveRole),
          }}
          onClick={() => setRole('Kasir')}
        >
          👩‍🍳 Kasir
        </button>
      </div>

      <form onSubmit={handleLogin} className="fade-in-up stagger-2" style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Username</label>
          <input
            style={styles.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Masukkan Username"
            autoCapitalize="none"
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Password</label>
          <input
            type="password"
            style={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Masukkan Password"
          />
        </div>

        {error && <div style={styles.error}>⚠ {error}</div>}

        <button
          type="submit"
          className="btn-press hover-bright"
          style={{ ...styles.submitBtn, opacity: isLoading ? 0.7 : 1 }}
          disabled={isLoading}
        >
          {isLoading ? 'Memverifikasi...' : 'Masuk'}
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    padding: '40px 24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    background: '#fff',
  },
  logoWrap: { textAlign: 'center', marginBottom: '32px' },
  logo: { fontSize: '40px', fontWeight: '800', color: '#C94040', letterSpacing: '-1px' },
  subtitle: { fontSize: '12px', color: '#888780', fontWeight: '600', marginTop: '4px' },
  roleToggle: {
    display: 'flex',
    background: '#F1EFE8',
    borderRadius: '14px',
    padding: '4px',
    width: '100%',
    marginBottom: '24px',
  },
  toggleBtn: {
    flex: 1,
    padding: '12px 0',
    borderRadius: '10px',
    border: 'none',
    fontWeight: '700',
    fontSize: '13px',
    cursor: 'pointer',
    transition: 'all 0.25s ease',
    fontFamily: 'inherit',
  },
  activeRole: { background: '#fff', color: '#C94040', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' },
  inactiveRole: { background: 'transparent', color: '#888780' },
  form: { width: '100%', display: 'flex', flexDirection: 'column', gap: '16px' },
  inputGroup: { display: 'flex', flexDirection: 'column', gap: '6px' },
  label: { fontSize: '12px', fontWeight: '700', color: '#5F5E5A' },
  input: {
    padding: '14px',
    borderRadius: '12px',
    border: '1.5px solid #EAE5DA',
    background: '#FAFAFA',
    fontSize: '14px',
    outline: 'none',
    fontFamily: 'inherit',
  },
  submitBtn: {
    padding: '16px',
    background: '#C94040',
    color: '#fff',
    border: 'none',
    borderRadius: '16px',
    fontSize: '15px',
    fontWeight: '800',
    cursor: 'pointer',
    marginTop: '8px',
    fontFamily: 'inherit',
  },
  error: {
    color: '#C94040',
    fontSize: '12px',
    textAlign: 'center',
    fontWeight: '600',
    background: '#FFF0F0',
    padding: '10px',
    borderRadius: '10px',
  },
  hint: {
    marginTop: '24px',
    background: '#F5F0E8',
    padding: '14px',
    borderRadius: '12px',
    width: '100%',
    textAlign: 'center',
  },
  hintTitle: { fontSize: '11px', fontWeight: '800', color: '#5F5E5A', marginBottom: '6px' },
  hintText: { fontSize: '12px', color: '#888780', marginBottom: '2px' },
};
