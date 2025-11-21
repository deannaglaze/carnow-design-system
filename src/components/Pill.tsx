'use client';

import React from 'react';

export interface PillProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  onRemove?: () => void;
  style?: React.CSSProperties;
}

export function Pill({ children, variant = 'primary', onRemove, style }: PillProps) {
  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: 'var(--color-primary-100)',
      color: 'var(--color-primary-700)',
    },
    secondary: {
      backgroundColor: 'var(--color-secondary-100)',
      color: 'var(--color-secondary-700)',
    },
    success: {
      backgroundColor: 'var(--color-success-100)',
      color: 'var(--color-success-700)',
    },
    warning: {
      backgroundColor: 'var(--color-warning-100)',
      color: 'var(--color-warning-700)',
    },
    error: {
      backgroundColor: 'var(--color-error-100)',
      color: 'var(--color-error-700)',
    },
  };

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--spacing-2)',
        padding: 'var(--spacing-1) var(--spacing-3)',
        borderRadius: 'var(--border-radius-full)',
        fontSize: 'var(--typography-detail-font-size)',
        fontWeight: 'var(--typography-label-font-weight)',
        lineHeight: 'var(--typography-detail-line-height)',
        ...variantStyles[variant],
        ...style,
      }}
    >
      {children}
      {onRemove && (
        <button
          onClick={onRemove}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '14px',
            height: '14px',
            padding: 0,
            border: 'none',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            color: 'inherit',
            fontSize: '12px',
            marginLeft: 'var(--spacing-1)',
          }}
          aria-label="Remove"
        >
          ×
        </button>
      )}
    </span>
  );
}
