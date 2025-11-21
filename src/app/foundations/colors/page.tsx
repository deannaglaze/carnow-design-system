'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { tokens } from '@/tokens';
import { Card } from '@/components/Card';

export default function ColorsPage() {
  const { brand } = useTheme();
  const brandTokens = tokens[brand];

  const ColorSwatch = ({
    name,
    value,
    textColor = 'var(--color-text-primary)',
  }: {
    name: string;
    value: string;
    textColor?: string;
  }) => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--spacing-3)',
        padding: 'var(--spacing-2)',
      }}
    >
      <div
        style={{
          width: '48px',
          height: '48px',
          borderRadius: 'var(--border-radius-md)',
          backgroundColor: value,
          border: '1px solid var(--color-surface-border)',
          flexShrink: 0,
        }}
      />
      <div style={{ flex: 1 }}>
        <div
          style={{
            fontSize: 'var(--typography-label-font-size)',
            fontWeight: 'var(--typography-label-font-weight)',
            color: textColor,
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontSize: 'var(--typography-detail-font-size)',
            color: 'var(--color-text-secondary)',
            fontFamily: 'var(--font-family-mono)',
          }}
        >
          {value}
        </div>
      </div>
    </div>
  );

  const ColorScale = ({
    title,
    colors,
  }: {
    title: string;
    colors: any;
  }) => (
    <div>
      <h3 style={{ marginBottom: 'var(--spacing-4)' }}>{title}</h3>
      <Card variant="outlined" padding="small">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: 'var(--spacing-2)',
          }}
        >
          {Object.entries(colors).map(([shade, value]) => (
            <ColorSwatch key={shade} name={shade} value={value as string} />
          ))}
        </div>
      </Card>
    </div>
  );

  return (
    <div
      style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: 'var(--spacing-8) var(--spacing-6)',
      }}
    >
      <div style={{ marginBottom: 'var(--spacing-8)' }}>
        <h1 style={{ marginBottom: 'var(--spacing-3)' }}>Color System</h1>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--typography-body-font-size)' }}>
          Our color system is designed to work across multiple brands with a consistent
          structure while allowing each brand to express its unique identity. Use the brand
          switcher in the header to see how colors change.
        </p>
      </div>

      {/* Brand Colors */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 style={{ marginBottom: 'var(--spacing-4)' }}>Brand Colors</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
          <ColorScale title="Primary" colors={brandTokens.colors.primary} />
          <ColorScale title="Secondary" colors={brandTokens.colors.secondary} />
          <ColorScale title="Tertiary" colors={brandTokens.colors.tertiary} />
        </div>
      </section>

      {/* State Colors */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 style={{ marginBottom: 'var(--spacing-4)' }}>State Colors</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
          <ColorScale title="Success" colors={brandTokens.colors.success} />
          <ColorScale title="Warning" colors={brandTokens.colors.warning} />
          <ColorScale title="Error" colors={brandTokens.colors.error} />
        </div>
      </section>

      {/* Surface Colors */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 style={{ marginBottom: 'var(--spacing-4)' }}>Surface Colors</h2>
        <Card variant="outlined" padding="small">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: 'var(--spacing-2)',
            }}
          >
            {Object.entries(brandTokens.colors.surface).map(([name, value]) => (
              <ColorSwatch key={name} name={name} value={value} />
            ))}
          </div>
        </Card>
      </section>

      {/* Text Colors */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 style={{ marginBottom: 'var(--spacing-4)' }}>Text Colors</h2>
        <Card variant="outlined" padding="small">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: 'var(--spacing-2)',
            }}
          >
            {Object.entries(brandTokens.colors.text).map(([name, value]) => (
              <ColorSwatch key={name} name={name} value={value} />
            ))}
          </div>
        </Card>
      </section>

      {/* Usage Guidelines */}
      <section>
        <h2 style={{ marginBottom: 'var(--spacing-4)' }}>Usage Guidelines</h2>
        <div style={{ display: 'grid', gap: 'var(--spacing-6)', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <Card variant="filled">
            <h3 style={{ marginBottom: 'var(--spacing-3)' }}>Primary Colors</h3>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-2)' }}>
              Use primary colors for main actions, links, and key brand elements.
            </p>
            <ul style={{ paddingLeft: 'var(--spacing-5)', color: 'var(--color-text-secondary)' }}>
              <li>500: Default primary actions</li>
              <li>600-700: Hover/active states</li>
              <li>100-200: Light backgrounds</li>
            </ul>
          </Card>

          <Card variant="filled">
            <h3 style={{ marginBottom: 'var(--spacing-3)' }}>Secondary Colors</h3>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-2)' }}>
              Use secondary colors for secondary actions and supporting elements.
            </p>
            <ul style={{ paddingLeft: 'var(--spacing-5)', color: 'var(--color-text-secondary)' }}>
              <li>500: Secondary buttons</li>
              <li>100-200: Subtle backgrounds</li>
              <li>700-900: Dark accents</li>
            </ul>
          </Card>

          <Card variant="filled">
            <h3 style={{ marginBottom: 'var(--spacing-3)' }}>State Colors</h3>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-2)' }}>
              Use state colors to communicate status and feedback.
            </p>
            <ul style={{ paddingLeft: 'var(--spacing-5)', color: 'var(--color-text-secondary)' }}>
              <li>Success: Confirmations, completions</li>
              <li>Warning: Cautions, alerts</li>
              <li>Error: Errors, destructive actions</li>
            </ul>
          </Card>

          <Card variant="filled">
            <h3 style={{ marginBottom: 'var(--spacing-3)' }}>CSS Variables</h3>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-2)' }}>
              Access colors using CSS variables for automatic theme switching.
            </p>
            <div
              style={{
                fontFamily: 'var(--font-family-mono)',
                fontSize: 'var(--typography-detail-font-size)',
                color: 'var(--color-text-secondary)',
              }}
            >
              <div>var(--color-primary-500)</div>
              <div>var(--color-text-primary)</div>
              <div>var(--color-surface-paper)</div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
