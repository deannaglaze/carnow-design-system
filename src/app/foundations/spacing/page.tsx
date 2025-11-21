'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { tokens } from '@/tokens';
import { Card } from '@/components/Card';
import { CodeBlock } from '@/components/CodeBlock';

export default function SpacingPage() {
  const { brand, mode } = useTheme();
  const brandTokens = tokens[brand][mode];

  const spacingValues = [
    { name: 'xs (4px)', key: '1', value: '0.25rem', px: '4px', description: 'Extra small - tight spacing' },
    { name: 'sm (8px)', key: '2', value: '0.5rem', px: '8px', description: 'Small - base unit' },
    { name: 'md (16px)', key: '4', value: '1rem', px: '16px', description: 'Medium - standard spacing' },
    { name: 'lg (24px)', key: '6', value: '1.5rem', px: '24px', description: 'Large - section spacing' },
    { name: 'xl (32px)', key: '8', value: '2rem', px: '32px', description: 'Extra large - major sections' },
    { name: 'xxl (48px)', key: '12', value: '3rem', px: '48px', description: 'Double XL - page-level' },
  ];

  return (
    <div
      style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: 'var(--spacing-8) var(--spacing-6)',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 'var(--spacing-8)' }}>
        <h1 style={{ marginBottom: 'var(--spacing-3)' }}>Spacing System</h1>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--typography-body-font-size)' }}>
          Our spacing system is based on an 8px grid, providing consistent rhythm and alignment
          across the interface. The base unit of 8px ensures designs are balanced and scalable.
        </p>
      </div>

      {/* 8px Grid Explanation */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 style={{ marginBottom: 'var(--spacing-4)' }}>8px Grid System</h2>
        <Card variant="outlined">
          <div style={{ marginBottom: 'var(--spacing-6)' }}>
            <div style={{ fontSize: 'var(--typography-body-font-size)', marginBottom: 'var(--spacing-6)', lineHeight: 'var(--typography-body-line-height)' }}>
              The 8px grid system uses multiples of 8 as the foundation for all spacing decisions.
              This creates visual harmony and makes it easier to maintain consistency across
              different screen sizes.
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-4)' }}>
              <div>
                <div style={{ fontSize: 'var(--typography-label-font-size)', fontWeight: '700', color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-2)' }}>
                  Base Unit
                </div>
                <div style={{ fontSize: '32px', fontWeight: '700', color: 'var(--color-primary-500)' }}>
                  8px
                </div>
              </div>
              <div>
                <div style={{ fontSize: 'var(--typography-label-font-size)', fontWeight: '700', color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-2)' }}>
                  Scale Range
                </div>
                <div style={{ fontSize: '24px', fontWeight: '700' }}>
                  4px - 48px
                </div>
              </div>
              <div>
                <div style={{ fontSize: 'var(--typography-label-font-size)', fontWeight: '700', color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-2)' }}>
                  Pattern
                </div>
                <div style={{ fontSize: 'var(--typography-body-font-size)', fontFamily: 'var(--font-family-mono)' }}>
                  0.5× • 1× • 2× • 3× • 4× • 6×
                </div>
              </div>
            </div>
          </div>
          <div style={{ padding: 'var(--spacing-4)', backgroundColor: 'var(--color-primary-50)', borderRadius: 'var(--border-radius-md)', borderLeft: '4px solid var(--color-primary-500)' }}>
            <div style={{ fontSize: 'var(--typography-label-font-size)', fontWeight: '700', marginBottom: 'var(--spacing-1)' }}>
              Why 8px?
            </div>
            <div style={{ fontSize: 'var(--typography-label-font-size)', color: 'var(--color-text-secondary)' }}>
              Most screen dimensions are divisible by 8, making it ideal for responsive design.
              It's large enough to create noticeable spacing differences but small enough for fine-tuned control.
            </div>
          </div>
        </Card>
      </section>

      {/* Spacing Scale */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 style={{ marginBottom: 'var(--spacing-4)' }}>Spacing Scale</h2>
        <Card variant="outlined" padding="none">
          {spacingValues.map((item, index) => (
            <div
              key={item.key}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: 'var(--spacing-6)',
                borderBottom: index !== spacingValues.length - 1 ? '1px solid var(--color-surface-border)' : 'none',
                gap: 'var(--spacing-6)',
              }}
            >
              <div style={{ minWidth: '120px' }}>
                <div style={{ fontSize: 'var(--typography-body-font-size)', fontWeight: '700', fontFamily: 'var(--font-family-mono)', marginBottom: 'var(--spacing-1)' }}>
                  {item.name}
                </div>
                <div style={{ fontSize: 'var(--typography-detail-font-size)', color: 'var(--color-text-secondary)', fontFamily: 'var(--font-family-mono)' }}>
                  spacing-{item.key}
                </div>
              </div>
              <div style={{ flex: 1, minWidth: '200px' }}>
                <div
                  style={{
                    height: '32px',
                    width: item.px,
                    backgroundColor: 'var(--color-primary-500)',
                    borderRadius: 'var(--border-radius-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: 'var(--typography-detail-font-size)',
                    fontWeight: '700',
                  }}
                >
                  {item.px}
                </div>
              </div>
              <div style={{ flex: 2, fontSize: 'var(--typography-label-font-size)', color: 'var(--color-text-secondary)' }}>
                {item.description}
              </div>
            </div>
          ))}
        </Card>
      </section>

      {/* Visual Examples */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 style={{ marginBottom: 'var(--spacing-4)' }}>Visual Examples</h2>
        <div style={{ display: 'grid', gap: 'var(--spacing-6)', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <Card variant="outlined">
            <h3 style={{ marginBottom: 'var(--spacing-4)' }}>XS - 4px (spacing-1)</h3>
            <div style={{ display: 'flex', gap: '4px', padding: 'var(--spacing-4)', backgroundColor: 'var(--color-surface-paper)', borderRadius: 'var(--border-radius-md)', marginBottom: 'var(--spacing-3)' }}>
              <div style={{ flex: 1, height: '40px', backgroundColor: 'var(--color-primary-200)', borderRadius: 'var(--border-radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 'var(--typography-detail-font-size)' }}>
                Item
              </div>
              <div style={{ flex: 1, height: '40px', backgroundColor: 'var(--color-primary-200)', borderRadius: 'var(--border-radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 'var(--typography-detail-font-size)' }}>
                Item
              </div>
            </div>
            <div style={{ fontSize: 'var(--typography-detail-font-size)', color: 'var(--color-text-secondary)' }}>
              Very tight grouping, icon spacing
            </div>
          </Card>

          <Card variant="outlined">
            <h3 style={{ marginBottom: 'var(--spacing-4)' }}>SM - 8px (spacing-2)</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: 'var(--spacing-4)', backgroundColor: 'var(--color-surface-paper)', borderRadius: 'var(--border-radius-md)', marginBottom: 'var(--spacing-3)' }}>
              <div style={{ padding: 'var(--spacing-2)', backgroundColor: 'var(--color-primary-200)', borderRadius: 'var(--border-radius-sm)', fontSize: 'var(--typography-detail-font-size)' }}>
                List Item
              </div>
              <div style={{ padding: 'var(--spacing-2)', backgroundColor: 'var(--color-primary-200)', borderRadius: 'var(--border-radius-sm)', fontSize: 'var(--typography-detail-font-size)' }}>
                List Item
              </div>
            </div>
            <div style={{ fontSize: 'var(--typography-detail-font-size)', color: 'var(--color-text-secondary)' }}>
              Base unit, compact layouts
            </div>
          </Card>

          <Card variant="outlined">
            <h3 style={{ marginBottom: 'var(--spacing-4)' }}>MD - 16px (spacing-4)</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: 'var(--spacing-4)', backgroundColor: 'var(--color-surface-paper)', borderRadius: 'var(--border-radius-md)', marginBottom: 'var(--spacing-3)' }}>
              <div style={{ padding: 'var(--spacing-3)', backgroundColor: 'var(--color-primary-200)', borderRadius: 'var(--border-radius-sm)', fontSize: 'var(--typography-detail-font-size)' }}>
                Card Content
              </div>
              <div style={{ padding: 'var(--spacing-3)', backgroundColor: 'var(--color-primary-200)', borderRadius: 'var(--border-radius-sm)', fontSize: 'var(--typography-detail-font-size)' }}>
                Card Content
              </div>
            </div>
            <div style={{ fontSize: 'var(--typography-detail-font-size)', color: 'var(--color-text-secondary)' }}>
              Standard component spacing
            </div>
          </Card>

          <Card variant="outlined">
            <h3 style={{ marginBottom: 'var(--spacing-4)' }}>LG - 24px (spacing-6)</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: 'var(--spacing-4)', backgroundColor: 'var(--color-surface-paper)', borderRadius: 'var(--border-radius-md)', marginBottom: 'var(--spacing-3)' }}>
              <div style={{ padding: 'var(--spacing-4)', backgroundColor: 'var(--color-primary-200)', borderRadius: 'var(--border-radius-sm)', fontSize: 'var(--typography-detail-font-size)' }}>
                Section
              </div>
              <div style={{ padding: 'var(--spacing-4)', backgroundColor: 'var(--color-primary-200)', borderRadius: 'var(--border-radius-sm)', fontSize: 'var(--typography-detail-font-size)' }}>
                Section
              </div>
            </div>
            <div style={{ fontSize: 'var(--typography-detail-font-size)', color: 'var(--color-text-secondary)' }}>
              Section separation
            </div>
          </Card>

          <Card variant="outlined">
            <h3 style={{ marginBottom: 'var(--spacing-4)' }}>XL - 32px (spacing-8)</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: 'var(--spacing-4)', backgroundColor: 'var(--color-surface-paper)', borderRadius: 'var(--border-radius-md)', marginBottom: 'var(--spacing-3)' }}>
              <div style={{ padding: 'var(--spacing-4)', backgroundColor: 'var(--color-primary-200)', borderRadius: 'var(--border-radius-sm)', fontSize: 'var(--typography-detail-font-size)' }}>
                Major Section
              </div>
              <div style={{ padding: 'var(--spacing-4)', backgroundColor: 'var(--color-primary-200)', borderRadius: 'var(--border-radius-sm)', fontSize: 'var(--typography-detail-font-size)' }}>
                Major Section
              </div>
            </div>
            <div style={{ fontSize: 'var(--typography-detail-font-size)', color: 'var(--color-text-secondary)' }}>
              Major content separation
            </div>
          </Card>

          <Card variant="outlined">
            <h3 style={{ marginBottom: 'var(--spacing-4)' }}>XXL - 48px (spacing-12)</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', padding: 'var(--spacing-4)', backgroundColor: 'var(--color-surface-paper)', borderRadius: 'var(--border-radius-md)', marginBottom: 'var(--spacing-3)' }}>
              <div style={{ padding: 'var(--spacing-5)', backgroundColor: 'var(--color-primary-200)', borderRadius: 'var(--border-radius-sm)', fontSize: 'var(--typography-detail-font-size)' }}>
                Page Section
              </div>
              <div style={{ padding: 'var(--spacing-5)', backgroundColor: 'var(--color-primary-200)', borderRadius: 'var(--border-radius-sm)', fontSize: 'var(--typography-detail-font-size)' }}>
                Page Section
              </div>
            </div>
            <div style={{ fontSize: 'var(--typography-detail-font-size)', color: 'var(--color-text-secondary)' }}>
              Page-level spacing
            </div>
          </Card>
        </div>
      </section>

      {/* CSS Variable Reference */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 style={{ marginBottom: 'var(--spacing-4)' }}>CSS Variable Reference</h2>
        <CodeBlock
          code={`/* Spacing CSS Variables - 8px Grid System */

--spacing-1: 0.25rem   /* 4px - xs */
--spacing-2: 0.5rem    /* 8px - sm (base unit) */
--spacing-3: 0.75rem   /* 12px */
--spacing-4: 1rem      /* 16px - md */
--spacing-5: 1.25rem   /* 20px */
--spacing-6: 1.5rem    /* 24px - lg */
--spacing-8: 2rem      /* 32px - xl */
--spacing-10: 2.5rem   /* 40px */
--spacing-12: 3rem     /* 48px - xxl */

/* Usage Examples */
.component {
  padding: var(--spacing-4);
  gap: var(--spacing-2);
  margin-bottom: var(--spacing-6);
}`}
          language="css"
        />
      </section>

      {/* Code Examples */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 style={{ marginBottom: 'var(--spacing-4)' }}>Code Examples</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
          <div>
            <h3 style={{ marginBottom: 'var(--spacing-3)' }}>CSS</h3>
            <CodeBlock
              code={`/* Padding */
.card {
  padding: var(--spacing-4);
}

/* Margin */
.section {
  margin-bottom: var(--spacing-6);
}

/* Gap in Flexbox/Grid */
.container {
  display: flex;
  gap: var(--spacing-2);
}

/* Multiple values */
.header {
  padding: var(--spacing-4) var(--spacing-6);
  margin: var(--spacing-8) 0;
}`}
              language="css"
            />
          </div>

          <div>
            <h3 style={{ marginBottom: 'var(--spacing-3)' }}>React/JSX</h3>
            <CodeBlock
              code={`// Inline styles
<div style={{
  padding: 'var(--spacing-4)',
  gap: 'var(--spacing-2)',
  marginBottom: 'var(--spacing-6)'
}}>
  Content
</div>

// Grid layout with spacing
<div style={{
  display: 'grid',
  gap: 'var(--spacing-4)',
  padding: 'var(--spacing-6)'
}}>
  <Card />
  <Card />
</div>`}
              language="tsx"
            />
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section>
        <h2 style={{ marginBottom: 'var(--spacing-4)' }}>Usage Guidelines</h2>
        <div style={{ display: 'grid', gap: 'var(--spacing-6)', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          <Card variant="filled">
            <h3 style={{ marginBottom: 'var(--spacing-3)' }}>XS - 4px (spacing-1)</h3>
            <ul style={{ margin: 0, paddingLeft: 'var(--spacing-5)', color: 'var(--color-text-secondary)', fontSize: 'var(--typography-label-font-size)' }}>
              <li>Icon and text spacing</li>
              <li>Pill/badge gaps</li>
              <li>Very compact layouts</li>
            </ul>
          </Card>

          <Card variant="filled">
            <h3 style={{ marginBottom: 'var(--spacing-3)' }}>SM - 8px (spacing-2)</h3>
            <ul style={{ margin: 0, paddingLeft: 'var(--spacing-5)', color: 'var(--color-text-secondary)', fontSize: 'var(--typography-label-font-size)' }}>
              <li>List item spacing</li>
              <li>Form field groups</li>
              <li>Small component padding</li>
            </ul>
          </Card>

          <Card variant="filled">
            <h3 style={{ marginBottom: 'var(--spacing-3)' }}>MD - 16px (spacing-4)</h3>
            <ul style={{ margin: 0, paddingLeft: 'var(--spacing-5)', color: 'var(--color-text-secondary)', fontSize: 'var(--typography-label-font-size)' }}>
              <li>Standard card padding</li>
              <li>Component spacing</li>
              <li>Default gaps</li>
            </ul>
          </Card>

          <Card variant="filled">
            <h3 style={{ marginBottom: 'var(--spacing-3)' }}>LG - 24px (spacing-6)</h3>
            <ul style={{ margin: 0, paddingLeft: 'var(--spacing-5)', color: 'var(--color-text-secondary)', fontSize: 'var(--typography-label-font-size)' }}>
              <li>Section separation</li>
              <li>Content group spacing</li>
              <li>Large card padding</li>
            </ul>
          </Card>

          <Card variant="filled">
            <h3 style={{ marginBottom: 'var(--spacing-3)' }}>XL - 32px (spacing-8)</h3>
            <ul style={{ margin: 0, paddingLeft: 'var(--spacing-5)', color: 'var(--color-text-secondary)', fontSize: 'var(--typography-label-font-size)' }}>
              <li>Major section separation</li>
              <li>Page content padding</li>
              <li>Hero section spacing</li>
            </ul>
          </Card>

          <Card variant="filled">
            <h3 style={{ marginBottom: 'var(--spacing-3)' }}>XXL - 48px (spacing-12)</h3>
            <ul style={{ margin: 0, paddingLeft: 'var(--spacing-5)', color: 'var(--color-text-secondary)', fontSize: 'var(--typography-label-font-size)' }}>
              <li>Page top/bottom spacing</li>
              <li>Major layout sections</li>
              <li>Maximum separation</li>
            </ul>
          </Card>
        </div>
      </section>
    </div>
  );
}
