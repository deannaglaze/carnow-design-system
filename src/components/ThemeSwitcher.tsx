'use client';

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { tokens } from '@/tokens';

export function ThemeSwitcher() {
  const { brand, setBrand, availableBrands } = useTheme();

  return (
    <div style={{ display: 'flex', gap: 'var(--spacing-2)', alignItems: 'center' }}>
      <span style={{
        fontSize: 'var(--typography-label-font-size)',
        fontWeight: 'var(--typography-label-font-weight)',
        color: 'var(--color-text-secondary)'
      }}>
        Brand:
      </span>
      <select
        value={brand}
        onChange={(e) => setBrand(e.target.value as any)}
        style={{
          padding: 'var(--spacing-2) var(--spacing-3)',
          fontSize: 'var(--typography-label-font-size)',
          fontWeight: 'var(--typography-label-font-weight)',
          border: '1px solid var(--color-surface-border)',
          borderRadius: 'var(--border-radius-md)',
          backgroundColor: 'var(--color-surface-background)',
          color: 'var(--color-text-primary)',
          cursor: 'pointer',
          outline: 'none',
        }}
      >
        {availableBrands.map((brandName) => (
          <option key={brandName} value={brandName}>
            {tokens[brandName]['light'].name}
          </option>
        ))}
      </select>
    </div>
  );
}
