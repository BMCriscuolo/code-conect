'use client';
import '@/styles/colors.css';
import { useState } from 'react';

export default function Home() {
  const [theme, setTheme] = useState('gray');
  return (
    <div
      className={`${theme}`}
      style={{
        backgroundColor: 'var(--color-primary-700)',
        minHeight: '100vh',
      }}
    >
      <h1 style={{ color: 'var(--color-primary-900)' }}>Título</h1>
      <button onClick={() => setTheme(theme === 'gray' ? 'error' : 'gray')}>
        Alternar Tema
      </button>
    </div>
  );
}
