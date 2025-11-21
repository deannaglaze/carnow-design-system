'use client';

import { Typography, TypographyScale } from '@/tokens';

interface TypographyEditorProps {
  typography: Typography;
  onChange: (typography: Typography) => void;
}

export function TypographyEditor({ typography, onChange }: TypographyEditorProps) {
  const updateFontFamily = (type: 'base' | 'mono', value: string) => {
    onChange({
      ...typography,
      fontFamily: {
        ...typography.fontFamily,
        [type]: value,
      },
    });
  };

  const updateTypographyScale = (level: keyof TypographyScale, property: string, value: string) => {
    onChange({
      ...typography,
      scale: {
        ...typography.scale,
        [level]: {
          ...typography.scale[level],
          [property]: value,
        },
      },
    });
  };

  const TypographyScaleEditor = ({ level, label }: { level: keyof TypographyScale; label: string }) => {
    const style = typography.scale[level];

    return (
      <div style={{ marginBottom: 'var(--spacing-6)', padding: 'var(--spacing-4)', backgroundColor: 'var(--color-surface-paper)', borderRadius: 'var(--border-radius-md)' }}>
        <h4 style={{ marginBottom: 'var(--spacing-4)', fontSize: 'var(--typography-body-font-size)', fontWeight: '700' }}>
          {label}
        </h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--spacing-4)' }}>
          <div>
            <label style={{ display: 'block', fontSize: 'var(--typography-label-font-size)', fontWeight: '600', marginBottom: 'var(--spacing-2)' }}>
              Font Size
            </label>
            <input
              type="text"
              value={style.fontSize}
              onChange={(e) => updateTypographyScale(level, 'fontSize', e.target.value)}
              style={{
                width: '100%',
                padding: 'var(--spacing-2)',
                fontSize: 'var(--typography-label-font-size)',
                fontFamily: 'var(--font-family-mono)',
                border: '1px solid var(--color-surface-border)',
                borderRadius: 'var(--border-radius-sm)',
                backgroundColor: 'var(--color-surface-background)',
                color: 'var(--color-text-primary)',
              }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: 'var(--typography-label-font-size)', fontWeight: '600', marginBottom: 'var(--spacing-2)' }}>
              Line Height
            </label>
            <input
              type="text"
              value={style.lineHeight}
              onChange={(e) => updateTypographyScale(level, 'lineHeight', e.target.value)}
              style={{
                width: '100%',
                padding: 'var(--spacing-2)',
                fontSize: 'var(--typography-label-font-size)',
                fontFamily: 'var(--font-family-mono)',
                border: '1px solid var(--color-surface-border)',
                borderRadius: 'var(--border-radius-sm)',
                backgroundColor: 'var(--color-surface-background)',
                color: 'var(--color-text-primary)',
              }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: 'var(--typography-label-font-size)', fontWeight: '600', marginBottom: 'var(--spacing-2)' }}>
              Font Weight
            </label>
            <input
              type="text"
              value={style.fontWeight}
              onChange={(e) => updateTypographyScale(level, 'fontWeight', e.target.value)}
              style={{
                width: '100%',
                padding: 'var(--spacing-2)',
                fontSize: 'var(--typography-label-font-size)',
                fontFamily: 'var(--font-family-mono)',
                border: '1px solid var(--color-surface-border)',
                borderRadius: 'var(--border-radius-sm)',
                backgroundColor: 'var(--color-surface-background)',
                color: 'var(--color-text-primary)',
              }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: 'var(--typography-label-font-size)', fontWeight: '600', marginBottom: 'var(--spacing-2)' }}>
              Letter Spacing
            </label>
            <input
              type="text"
              value={style.letterSpacing}
              onChange={(e) => updateTypographyScale(level, 'letterSpacing', e.target.value)}
              style={{
                width: '100%',
                padding: 'var(--spacing-2)',
                fontSize: 'var(--typography-label-font-size)',
                fontFamily: 'var(--font-family-mono)',
                border: '1px solid var(--color-surface-border)',
                borderRadius: 'var(--border-radius-sm)',
                backgroundColor: 'var(--color-surface-background)',
                color: 'var(--color-text-primary)',
              }}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* Font Families */}
      <div style={{ marginBottom: 'var(--spacing-8)' }}>
        <h3 style={{ marginBottom: 'var(--spacing-4)', fontSize: 'var(--typography-h3-font-size)' }}>
          Font Families
        </h3>
        <div style={{ display: 'grid', gap: 'var(--spacing-4)' }}>
          <div>
            <label style={{ display: 'block', fontSize: 'var(--typography-label-font-size)', fontWeight: '600', marginBottom: 'var(--spacing-2)' }}>
              Base Font
            </label>
            <input
              type="text"
              value={typography.fontFamily.base}
              onChange={(e) => updateFontFamily('base', e.target.value)}
              style={{
                width: '100%',
                padding: 'var(--spacing-2) var(--spacing-3)',
                fontSize: 'var(--typography-label-font-size)',
                fontFamily: 'var(--font-family-mono)',
                border: '1px solid var(--color-surface-border)',
                borderRadius: 'var(--border-radius-md)',
                backgroundColor: 'var(--color-surface-background)',
                color: 'var(--color-text-primary)',
              }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: 'var(--typography-label-font-size)', fontWeight: '600', marginBottom: 'var(--spacing-2)' }}>
              Monospace Font
            </label>
            <input
              type="text"
              value={typography.fontFamily.mono}
              onChange={(e) => updateFontFamily('mono', e.target.value)}
              style={{
                width: '100%',
                padding: 'var(--spacing-2) var(--spacing-3)',
                fontSize: 'var(--typography-label-font-size)',
                fontFamily: 'var(--font-family-mono)',
                border: '1px solid var(--color-surface-border)',
                borderRadius: 'var(--border-radius-md)',
                backgroundColor: 'var(--color-surface-background)',
                color: 'var(--color-text-primary)',
              }}
            />
          </div>
        </div>
      </div>

      {/* Typography Scale */}
      <div>
        <h3 style={{ marginBottom: 'var(--spacing-4)', fontSize: 'var(--typography-h3-font-size)' }}>
          Typography Scale
        </h3>
        <TypographyScaleEditor level="h1" label="Heading 1" />
        <TypographyScaleEditor level="h2" label="Heading 2" />
        <TypographyScaleEditor level="h3" label="Heading 3" />
        <TypographyScaleEditor level="body" label="Body" />
        <TypographyScaleEditor level="label" label="Label" />
        <TypographyScaleEditor level="detail" label="Detail" />
      </div>
    </div>
  );
}
