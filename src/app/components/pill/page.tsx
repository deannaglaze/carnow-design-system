'use client';

import { useState } from 'react';
import { Pill } from '@/components/Pill';
import { CodeBlock } from '@/components/CodeBlock';

export default function PillPage() {
  const [showPill1, setShowPill1] = useState(true);
  const [showPill2, setShowPill2] = useState(true);

  return (
    <div
      style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: 'var(--spacing-8) var(--spacing-6)',
      }}
    >
      <div style={{ marginBottom: 'var(--spacing-8)' }}>
        <h1 style={{ marginBottom: 'var(--spacing-3)' }}>Pill</h1>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--typography-body-font-size)' }}>
          Pills are tag-style components used for labels, categories, and removable items.
          They come in five variants matching the design system color palette.
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
          <div style={{ display: 'flex', gap: 'var(--spacing-3)', flexWrap: 'wrap' }}>
            <Pill variant="primary">Primary</Pill>
            <Pill variant="secondary">Secondary</Pill>
            <Pill variant="success">Success</Pill>
            <Pill variant="warning">Warning</Pill>
            <Pill variant="error">Error</Pill>
          </div>
        </div>
        <CodeBlock
          code={`import { Pill } from '@/components/Pill';

<Pill variant="primary">Primary</Pill>
<Pill variant="secondary">Secondary</Pill>
<Pill variant="success">Success</Pill>
<Pill variant="warning">Warning</Pill>
<Pill variant="error">Error</Pill>`}
        />
      </section>

      {/* With Remove Button */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 style={{ marginBottom: 'var(--spacing-4)' }}>With Remove Button</h2>
        <div
          style={{
            padding: 'var(--spacing-8)',
            backgroundColor: 'var(--color-surface-paper)',
            borderRadius: 'var(--border-radius-lg)',
            border: '1px solid var(--color-surface-border)',
            marginBottom: 'var(--spacing-4)',
          }}
        >
          <div style={{ display: 'flex', gap: 'var(--spacing-3)', flexWrap: 'wrap' }}>
            {showPill1 && (
              <Pill variant="primary" onRemove={() => setShowPill1(false)}>
                Removable Pill
              </Pill>
            )}
            {showPill2 && (
              <Pill variant="success" onRemove={() => setShowPill2(false)}>
                Click X to Remove
              </Pill>
            )}
            {(!showPill1 || !showPill2) && (
              <button
                onClick={() => {
                  setShowPill1(true);
                  setShowPill2(true);
                }}
                style={{
                  padding: 'var(--spacing-2) var(--spacing-3)',
                  fontSize: 'var(--typography-detail-font-size)',
                  color: 'var(--color-primary-500)',
                  backgroundColor: 'transparent',
                  border: '1px solid var(--color-surface-border)',
                  borderRadius: 'var(--border-radius-md)',
                  cursor: 'pointer',
                }}
              >
                Reset Pills
              </button>
            )}
          </div>
        </div>
        <CodeBlock
          code={`import { Pill } from '@/components/Pill';
import { useState } from 'react';

function Example() {
  const [showPill, setShowPill] = useState(true);

  return (
    <>
      {showPill && (
        <Pill variant="primary" onRemove={() => setShowPill(false)}>
          Removable Pill
        </Pill>
      )}
    </>
  );
}`}
        />
      </section>

      {/* Use Cases */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 style={{ marginBottom: 'var(--spacing-4)' }}>Use Cases</h2>
        <div
          style={{
            padding: 'var(--spacing-8)',
            backgroundColor: 'var(--color-surface-paper)',
            borderRadius: 'var(--border-radius-lg)',
            border: '1px solid var(--color-surface-border)',
            marginBottom: 'var(--spacing-4)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
            <div>
              <div style={{ marginBottom: 'var(--spacing-2)', color: 'var(--color-text-secondary)', fontSize: 'var(--typography-label-font-size)' }}>
                Status Labels:
              </div>
              <div style={{ display: 'flex', gap: 'var(--spacing-2)', flexWrap: 'wrap' }}>
                <Pill variant="success">Available</Pill>
                <Pill variant="warning">Pending</Pill>
                <Pill variant="error">Sold</Pill>
              </div>
            </div>
            <div>
              <div style={{ marginBottom: 'var(--spacing-2)', color: 'var(--color-text-secondary)', fontSize: 'var(--typography-label-font-size)' }}>
                Tags:
              </div>
              <div style={{ display: 'flex', gap: 'var(--spacing-2)', flexWrap: 'wrap' }}>
                <Pill variant="primary">SUV</Pill>
                <Pill variant="primary">AWD</Pill>
                <Pill variant="primary">Leather</Pill>
                <Pill variant="primary">Sunroof</Pill>
              </div>
            </div>
            <div>
              <div style={{ marginBottom: 'var(--spacing-2)', color: 'var(--color-text-secondary)', fontSize: 'var(--typography-label-font-size)' }}>
                Filters (removable):
              </div>
              <div style={{ display: 'flex', gap: 'var(--spacing-2)', flexWrap: 'wrap' }}>
                <Pill variant="secondary" onRemove={() => {}}>
                  Price: $20k-$30k
                </Pill>
                <Pill variant="secondary" onRemove={() => {}}>
                  Year: 2020+
                </Pill>
                <Pill variant="secondary" onRemove={() => {}}>
                  Make: Toyota
                </Pill>
              </div>
            </div>
          </div>
        </div>
        <CodeBlock
          code={`import { Pill } from '@/components/Pill';

// Status Labels
<Pill variant="success">Available</Pill>
<Pill variant="warning">Pending</Pill>
<Pill variant="error">Sold</Pill>

// Tags
<Pill variant="primary">SUV</Pill>
<Pill variant="primary">AWD</Pill>

// Filters (removable)
<Pill variant="secondary" onRemove={() => handleRemove()}>
  Price: $20k-$30k
</Pill>`}
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
                  'primary' | 'secondary' | 'success' | 'warning' | 'error'
                </td>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)', borderBottom: '1px solid var(--color-surface-border)' }}>
                  'primary'
                </td>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)', borderBottom: '1px solid var(--color-surface-border)' }}>
                  The visual style of the pill
                </td>
              </tr>
              <tr>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)', fontFamily: 'var(--font-family-mono)', fontSize: 'var(--typography-detail-font-size)' }}>
                  onRemove
                </td>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)', fontFamily: 'var(--font-family-mono)', fontSize: 'var(--typography-detail-font-size)' }}>
                  () =&gt; void
                </td>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)' }}>
                  undefined
                </td>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)' }}>
                  Optional callback when the remove button is clicked
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
