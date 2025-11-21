'use client';

import { useState, useEffect } from 'react';
import { Colors } from '@/tokens';

interface ColorEditorProps {
  colors: Colors;
  onChange: (colors: Colors) => void;
}

export function ColorEditor({ colors, onChange }: ColorEditorProps) {
  const updateColor = (category: keyof Colors, shade: string, value: string) => {
    const newColors = { ...colors };
    (newColors[category] as any)[shade] = value;
    onChange(newColors);
  };

  const ColorPicker = ({
    label,
    value,
    onChange: onColorChange,
  }: {
    label: string;
    value: string;
    onChange: (value: string) => void;
  }) => {
    // Local state for text input to prevent focus loss
    const [localValue, setLocalValue] = useState(value);

    // Sync local state when parent value changes (e.g., brand/mode switch)
    useEffect(() => {
      setLocalValue(value);
    }, [value]);

    // Update parent state on blur
    const handleBlur = () => {
      if (localValue !== value) {
        onColorChange(localValue);
      }
    };

    // Update parent state on Enter key
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        if (localValue !== value) {
          onColorChange(localValue);
        }
        e.currentTarget.blur(); // Remove focus after Enter
      }
    };

    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)', marginBottom: 'var(--spacing-3)' }}>
        <input
          type="color"
          value={value}
          onChange={(e) => onColorChange(e.target.value)}
          style={{
            width: '48px',
            height: '48px',
            border: '1px solid var(--color-surface-border)',
            borderRadius: 'var(--border-radius-md)',
            cursor: 'pointer',
          }}
        />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 'var(--typography-label-font-size)', fontWeight: '600', marginBottom: 'var(--spacing-1)' }}>
            {label}
          </div>
          <input
            type="text"
            value={localValue}
            onChange={(e) => setLocalValue(e.target.value)}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            style={{
              width: '100%',
              padding: 'var(--spacing-2)',
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
    );
  };

  const ColorScale = ({ title, category, shades }: { title: string; category: keyof Colors; shades: string[] }) => (
    <div style={{ marginBottom: 'var(--spacing-8)' }}>
      <h3 style={{ marginBottom: 'var(--spacing-4)', fontSize: 'var(--typography-h3-font-size)' }}>{title}</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 'var(--spacing-4)' }}>
        {shades.map((shade) => (
          <ColorPicker
            key={shade}
            label={shade}
            value={(colors[category] as any)[shade]}
            onChange={(value) => updateColor(category, shade, value)}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <ColorScale title="Primary" category="primary" shades={['50', '100', '200', '300', '400', '500', '600', '700', '800', '900']} />
      <ColorScale title="Secondary" category="secondary" shades={['50', '100', '200', '300', '400', '500', '600', '700', '800', '900']} />
      <ColorScale title="Tertiary" category="tertiary" shades={['50', '100', '200', '300', '400', '500', '600', '700', '800', '900']} />
      <ColorScale title="Success" category="success" shades={['50', '100', '500', '700', '900']} />
      <ColorScale title="Warning" category="warning" shades={['50', '100', '500', '700', '900']} />
      <ColorScale title="Error" category="error" shades={['50', '100', '500', '700', '900']} />
      <ColorScale title="Surface" category="surface" shades={['background', 'paper', 'elevated', 'border']} />
      <ColorScale title="Text" category="text" shades={['primary', 'secondary', 'disabled', 'inverse']} />
    </div>
  );
}
