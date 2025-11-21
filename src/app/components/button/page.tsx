'use client';

import { Button } from '@/components/Button';
import { CodeBlock } from '@/components/CodeBlock';

export default function ButtonPage() {
  return (
    <div
      style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: 'var(--spacing-8) var(--spacing-6)',
      }}
    >
      <div style={{ marginBottom: 'var(--spacing-8)' }}>
        <h1 style={{ marginBottom: 'var(--spacing-3)' }}>Button</h1>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--typography-body-font-size)' }}>
          Buttons are used to trigger actions. They come in three variants (primary, secondary, text)
          and three sizes (small, medium, large).
        </p>
      </div>

      {/* Variants */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 style={{ marginBottom: 'var(--spacing-4)' }}>Variants</h2>
        <div
          style={{
            padding: 'var(--spacing-8)',
            backgroundColor: 'var(--color-surface-paper)',
            borderRadius: 'var(--border-radius-lg)',
            border: '1px solid var(--color-surface-border)',
            marginBottom: 'var(--spacing-4)',
          }}
        >
          <div style={{ display: 'flex', gap: 'var(--spacing-4)', flexWrap: 'wrap' }}>
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="text">Text Button</Button>
          </div>
        </div>
        <CodeBlock
          code={`import { Button } from '@/components/Button';

<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="text">Text Button</Button>`}
        />
      </section>

      {/* Sizes */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 style={{ marginBottom: 'var(--spacing-4)' }}>Sizes</h2>
        <div
          style={{
            padding: 'var(--spacing-8)',
            backgroundColor: 'var(--color-surface-paper)',
            borderRadius: 'var(--border-radius-lg)',
            border: '1px solid var(--color-surface-border)',
            marginBottom: 'var(--spacing-4)',
          }}
        >
          <div style={{ display: 'flex', gap: 'var(--spacing-4)', alignItems: 'center', flexWrap: 'wrap' }}>
            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
          </div>
        </div>
        <CodeBlock
          code={`import { Button } from '@/components/Button';

<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>`}
        />
      </section>

      {/* Disabled State */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 style={{ marginBottom: 'var(--spacing-4)' }}>Disabled State</h2>
        <div
          style={{
            padding: 'var(--spacing-8)',
            backgroundColor: 'var(--color-surface-paper)',
            borderRadius: 'var(--border-radius-lg)',
            border: '1px solid var(--color-surface-border)',
            marginBottom: 'var(--spacing-4)',
          }}
        >
          <div style={{ display: 'flex', gap: 'var(--spacing-4)', flexWrap: 'wrap' }}>
            <Button variant="primary" disabled>
              Disabled Primary
            </Button>
            <Button variant="secondary" disabled>
              Disabled Secondary
            </Button>
            <Button variant="text" disabled>
              Disabled Text
            </Button>
          </div>
        </div>
        <CodeBlock
          code={`import { Button } from '@/components/Button';

<Button variant="primary" disabled>Disabled Primary</Button>
<Button variant="secondary" disabled>Disabled Secondary</Button>
<Button variant="text" disabled>Disabled Text</Button>`}
        />
      </section>

      {/* Props */}
      <section>
        <h2 style={{ marginBottom: 'var(--spacing-4)' }}>Props</h2>
        <div
          style={{
            backgroundColor: 'var(--color-surface-paper)',
            border: '1px solid var(--color-surface-border)',
            borderRadius: 'var(--border-radius-lg)',
            overflow: 'hidden',
          }}
        >
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--color-surface-background)' }}>
                <th style={{ padding: 'var(--spacing-3) var(--spacing-4)', textAlign: 'left', borderBottom: '1px solid var(--color-surface-border)' }}>
                  Prop
                </th>
                <th style={{ padding: 'var(--spacing-3) var(--spacing-4)', textAlign: 'left', borderBottom: '1px solid var(--color-surface-border)' }}>
                  Type
                </th>
                <th style={{ padding: 'var(--spacing-3) var(--spacing-4)', textAlign: 'left', borderBottom: '1px solid var(--color-surface-border)' }}>
                  Default
                </th>
                <th style={{ padding: 'var(--spacing-3) var(--spacing-4)', textAlign: 'left', borderBottom: '1px solid var(--color-surface-border)' }}>
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)', borderBottom: '1px solid var(--color-surface-border)', fontFamily: 'var(--font-family-mono)', fontSize: 'var(--typography-detail-font-size)' }}>
                  variant
                </td>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)', borderBottom: '1px solid var(--color-surface-border)', fontFamily: 'var(--font-family-mono)', fontSize: 'var(--typography-detail-font-size)' }}>
                  'primary' | 'secondary' | 'text'
                </td>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)', borderBottom: '1px solid var(--color-surface-border)' }}>
                  'primary'
                </td>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)', borderBottom: '1px solid var(--color-surface-border)' }}>
                  The visual style of the button
                </td>
              </tr>
              <tr>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)', borderBottom: '1px solid var(--color-surface-border)', fontFamily: 'var(--font-family-mono)', fontSize: 'var(--typography-detail-font-size)' }}>
                  size
                </td>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)', borderBottom: '1px solid var(--color-surface-border)', fontFamily: 'var(--font-family-mono)', fontSize: 'var(--typography-detail-font-size)' }}>
                  'small' | 'medium' | 'large'
                </td>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)', borderBottom: '1px solid var(--color-surface-border)' }}>
                  'medium'
                </td>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)', borderBottom: '1px solid var(--color-surface-border)' }}>
                  The size of the button
                </td>
              </tr>
              <tr>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)', fontFamily: 'var(--font-family-mono)', fontSize: 'var(--typography-detail-font-size)' }}>
                  disabled
                </td>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)', fontFamily: 'var(--font-family-mono)', fontSize: 'var(--typography-detail-font-size)' }}>
                  boolean
                </td>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)' }}>
                  false
                </td>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)' }}>
                  Whether the button is disabled
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
