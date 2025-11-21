'use client';

import { Spacing } from '@/tokens';

interface SpacingEditorProps {
  spacing: Spacing;
  onChange: (spacing: Spacing) => void;
}

export function SpacingEditor({ spacing, onChange }: SpacingEditorProps) {
  const updateSpacing = (key: keyof Spacing, value: string) => {
    onChange({
      ...spacing,
      [key]: value,
    });
  };

  // Convert rem to pixels for slider (assuming 1rem = 16px)
  const remToPx = (rem: string): number => {
    if (rem === '0') return 0;
    return parseFloat(rem.replace('rem', '')) * 16;
  };

  const pxToRem = (px: number): string => {
    if (px === 0) return '0';
    return `${(px / 16).toFixed(2)}rem`;
  };

  const SpacingControl = ({ label, spacingKey }: { label: string; spacingKey: keyof Spacing }) => {
    const value = spacing[spacingKey];
    const pxValue = remToPx(value);

    return (
      <div style={{ marginBottom: 'var(--spacing-6)', padding: 'var(--spacing-4)', backgroundColor: 'var(--color-surface-paper)', borderRadius: 'var(--border-radius-md)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-3)' }}>
          <label style={{ fontSize: 'var(--typography-label-font-size)', fontWeight: '600' }}>
            {label}
          </label>
          <div style={{ display: 'flex', gap: 'var(--spacing-2)', alignItems: 'center' }}>
            <span style={{ fontSize: 'var(--typography-detail-font-size)', color: 'var(--color-text-secondary)' }}>
              {Math.round(pxValue)}px
            </span>
            <input
              type="text"
              value={value}
              onChange={(e) => updateSpacing(spacingKey, e.target.value)}
              style={{
                width: '80px',
                padding: 'var(--spacing-1) var(--spacing-2)',
                fontSize: 'var(--typography-detail-font-size)',
                fontFamily: 'var(--font-family-mono)',
                border: '1px solid var(--color-surface-border)',
                borderRadius: 'var(--border-radius-sm)',
                backgroundColor: 'var(--color-surface-background)',
                color: 'var(--color-text-primary)',
              }}
            />
          </div>
        </div>
        <input
          type="range"
          min="0"
          max="160"
          step="4"
          value={pxValue}
          onChange={(e) => updateSpacing(spacingKey, pxToRem(Number(e.target.value)))}
          style={{
            width: '100%',
            height: '6px',
            borderRadius: '3px',
            outline: 'none',
            appearance: 'none',
            WebkitAppearance: 'none',
            background: `linear-gradient(to right, var(--color-primary-500) 0%, var(--color-primary-500) ${(pxValue / 160) * 100}%, var(--color-surface-border) ${(pxValue / 160) * 100}%, var(--color-surface-border) 100%)`,
            cursor: 'pointer',
          }}
        />
        {/* Visual representation */}
        <div style={{ marginTop: 'var(--spacing-3)', display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
          <div
            style={{
              width: `${pxValue}px`,
              height: '24px',
              backgroundColor: 'var(--color-primary-500)',
              borderRadius: 'var(--border-radius-sm)',
              transition: 'width 0.2s ease',
            }}
          />
          <span style={{ fontSize: 'var(--typography-detail-font-size)', color: 'var(--color-text-secondary)' }}>
            {Math.round(pxValue)}px
          </span>
        </div>
      </div>
    );
  };

  const spacingKeys: Array<{ key: keyof Spacing; label: string }> = [
    { key: 'xs', label: 'XS (4px)' },
    { key: 'sm', label: 'SM (8px)' },
    { key: 'md', label: 'MD (16px)' },
    { key: 'lg', label: 'LG (24px)' },
    { key: 'xl', label: 'XL (32px)' },
    { key: 'xxl', label: 'XXL (48px)' },
  ];

  return (
    <div>
      <div style={{ marginBottom: 'var(--spacing-6)' }}>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--typography-body-font-size)' }}>
          Adjust spacing values using the sliders. Values are in rem units (1rem = 16px by default).
        </p>
      </div>

      {spacingKeys.map(({ key, label }) => (
        <SpacingControl key={key} label={label} spacingKey={key} />
      ))}
    </div>
  );
}
