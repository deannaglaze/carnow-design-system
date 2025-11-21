'use client';

import { BorderRadius } from '@/tokens';

interface BorderRadiusEditorProps {
  borderRadius: BorderRadius;
  onChange: (borderRadius: BorderRadius) => void;
}

export function BorderRadiusEditor({ borderRadius, onChange }: BorderRadiusEditorProps) {
  const updateBorderRadius = (key: keyof BorderRadius, value: string) => {
    onChange({
      ...borderRadius,
      [key]: value,
    });
  };

  // Convert rem to pixels for slider (assuming 1rem = 16px)
  const remToPx = (value: string): number => {
    if (value === '0') return 0;
    if (value === '9999px') return 100; // Full/pill shape
    return parseFloat(value.replace('rem', '')) * 16;
  };

  const pxToRem = (px: number, key: string): string => {
    if (px === 0) return '0';
    if (key === 'full') return '9999px';
    return `${(px / 16).toFixed(2)}rem`;
  };

  const BorderRadiusControl = ({ label, radiusKey }: { label: string; radiusKey: keyof BorderRadius }) => {
    const value = borderRadius[radiusKey];
    const pxValue = remToPx(value);
    const maxValue = radiusKey === 'full' ? 100 : 64;

    return (
      <div style={{ marginBottom: 'var(--spacing-6)', padding: 'var(--spacing-4)', backgroundColor: 'var(--color-surface-paper)', borderRadius: 'var(--border-radius-md)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-3)' }}>
          <label style={{ fontSize: 'var(--typography-label-font-size)', fontWeight: '600' }}>
            {label}
          </label>
          <div style={{ display: 'flex', gap: 'var(--spacing-2)', alignItems: 'center' }}>
            <span style={{ fontSize: 'var(--typography-detail-font-size)', color: 'var(--color-text-secondary)' }}>
              {radiusKey === 'full' && pxValue === 100 ? 'Full' : `${Math.round(pxValue)}px`}
            </span>
            <input
              type="text"
              value={value}
              onChange={(e) => updateBorderRadius(radiusKey, e.target.value)}
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
          max={maxValue}
          step="1"
          value={pxValue}
          onChange={(e) => updateBorderRadius(radiusKey, pxToRem(Number(e.target.value), radiusKey))}
          style={{
            width: '100%',
            height: '6px',
            borderRadius: '3px',
            outline: 'none',
            appearance: 'none',
            WebkitAppearance: 'none',
            background: `linear-gradient(to right, var(--color-primary-500) 0%, var(--color-primary-500) ${(pxValue / maxValue) * 100}%, var(--color-surface-border) ${(pxValue / maxValue) * 100}%, var(--color-surface-border) 100%)`,
            cursor: 'pointer',
          }}
        />
        {/* Visual representation */}
        <div style={{ marginTop: 'var(--spacing-3)', display: 'flex', alignItems: 'center', gap: 'var(--spacing-4)' }}>
          <div
            style={{
              width: '80px',
              height: '80px',
              backgroundColor: 'var(--color-primary-500)',
              borderRadius: value,
              transition: 'border-radius 0.2s ease',
            }}
          />
          <div>
            <div style={{ fontSize: 'var(--typography-label-font-size)', fontWeight: '600', marginBottom: 'var(--spacing-1)' }}>
              {label}
            </div>
            <div style={{ fontSize: 'var(--typography-detail-font-size)', color: 'var(--color-text-secondary)' }}>
              {value}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const borderRadiusKeys: Array<{ key: keyof BorderRadius; label: string }> = [
    { key: 'none', label: 'None' },
    { key: 'sm', label: 'Small' },
    { key: 'md', label: 'Medium' },
    { key: 'lg', label: 'Large' },
    { key: 'xl', label: 'Extra Large' },
    { key: 'full', label: 'Full (Pill)' },
  ];

  return (
    <div>
      <div style={{ marginBottom: 'var(--spacing-6)' }}>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--typography-body-font-size)' }}>
          Adjust border radius values using the sliders. Values are in rem units (1rem = 16px by default).
        </p>
      </div>

      {borderRadiusKeys.map(({ key, label }) => (
        <BorderRadiusControl key={key} label={label} radiusKey={key} />
      ))}
    </div>
  );
}
