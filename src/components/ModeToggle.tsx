'use client';

import { useTheme } from '@/contexts/ThemeContext';

export function ModeToggle() {
  const { mode, setMode } = useTheme();

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleMode}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--spacing-2)',
        padding: 'var(--spacing-2) var(--spacing-4)',
        backgroundColor: 'var(--color-surface-paper)',
        border: '1px solid var(--color-surface-border)',
        borderRadius: 'var(--border-radius-md)',
        fontSize: 'var(--typography-label-font-size)',
        fontWeight: '500',
        color: 'var(--color-text-primary)',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--color-surface-elevated)';
        e.currentTarget.style.borderColor = 'var(--color-primary-500)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--color-surface-paper)';
        e.currentTarget.style.borderColor = 'var(--color-surface-border)';
      }}
      aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
    >
      <span style={{ fontSize: '18px' }}>{mode === 'light' ? '☀️' : '🌙'}</span>
      <span>{mode === 'light' ? 'Light' : 'Dark'}</span>
    </button>
  );
}
