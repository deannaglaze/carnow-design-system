'use client';

import React from 'react';

export interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  size?: 'small' | 'medium';
}

export function Toggle({
  checked,
  onChange,
  label,
  disabled = false,
  size = 'medium',
}: ToggleProps) {
  const dimensions = {
    small: {
      width: '36px',
      height: '20px',
      thumbSize: '14px',
      thumbOffset: '16px',
    },
    medium: {
      width: '44px',
      height: '24px',
      thumbSize: '18px',
      thumbOffset: '20px',
    },
  };

  const { width, height, thumbSize, thumbOffset } = dimensions[size];

  return (
    <label
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--spacing-3)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
      }}
    >
      <div
        style={{
          position: 'relative',
          width,
          height,
          backgroundColor: checked
            ? 'var(--color-primary-500)'
            : 'var(--color-surface-border)',
          borderRadius: 'var(--border-radius-full)',
          transition: 'background-color 0.2s ease',
        }}
        onClick={() => !disabled && onChange(!checked)}
      >
        <div
          style={{
            position: 'absolute',
            top: '3px',
            left: checked ? thumbOffset : '3px',
            width: thumbSize,
            height: thumbSize,
            backgroundColor: 'var(--color-text-inverse)',
            borderRadius: '50%',
            transition: 'left 0.2s ease',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
          }}
        />
      </div>
      {label && (
        <span
          style={{
            fontSize:
              size === 'small'
                ? 'var(--typography-detail-font-size)'
                : 'var(--typography-body-font-size)',
            color: 'var(--color-text-primary)',
          }}
        >
          {label}
        </span>
      )}
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        style={{
          position: 'absolute',
          opacity: 0,
          pointerEvents: 'none',
        }}
      />
    </label>
  );
}
