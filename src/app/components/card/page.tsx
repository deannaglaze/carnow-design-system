'use client';

import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { Pill } from '@/components/Pill';
import { CodeBlock } from '@/components/CodeBlock';

export default function CardPage() {
  return (
    <div
      style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: 'var(--spacing-8) var(--spacing-6)',
      }}
    >
      <div style={{ marginBottom: 'var(--spacing-8)' }}>
        <h1 style={{ marginBottom: 'var(--spacing-3)' }}>Card</h1>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--typography-body-font-size)' }}>
          Cards are containers for grouping related content and actions. They come in three
          variants (elevated, outlined, filled) and support multiple padding options.
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
          <div style={{ display: 'grid', gap: 'var(--spacing-6)', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            <Card variant="elevated">
              <h3 style={{ marginBottom: 'var(--spacing-2)' }}>Elevated Card</h3>
              <p style={{ color: 'var(--color-text-secondary)' }}>
                Uses shadow to create depth and separation from the background.
              </p>
            </Card>
            <Card variant="outlined">
              <h3 style={{ marginBottom: 'var(--spacing-2)' }}>Outlined Card</h3>
              <p style={{ color: 'var(--color-text-secondary)' }}>
                Uses a border to define boundaries.
              </p>
            </Card>
            <Card variant="filled">
              <h3 style={{ marginBottom: 'var(--spacing-2)' }}>Filled Card</h3>
              <p style={{ color: 'var(--color-text-secondary)' }}>
                Uses a background color for subtle separation.
              </p>
            </Card>
          </div>
        </div>
        <CodeBlock
          code={`import { Card } from '@/components/Card';

<Card variant="elevated">
  <h3>Elevated Card</h3>
  <p>Uses shadow to create depth and separation.</p>
</Card>

<Card variant="outlined">
  <h3>Outlined Card</h3>
  <p>Uses a border to define boundaries.</p>
</Card>

<Card variant="filled">
  <h3>Filled Card</h3>
  <p>Uses a background color for subtle separation.</p>
</Card>`}
        />
      </section>

      {/* Padding Options */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 style={{ marginBottom: 'var(--spacing-4)' }}>Padding Options</h2>
        <div
          style={{
            padding: 'var(--spacing-8)',
            backgroundColor: 'var(--color-surface-paper)',
            borderRadius: 'var(--border-radius-lg)',
            border: '1px solid var(--color-surface-border)',
            marginBottom: 'var(--spacing-4)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
            <Card variant="outlined" padding="small">
              <div>Small Padding</div>
            </Card>
            <Card variant="outlined" padding="medium">
              <div>Medium Padding (default)</div>
            </Card>
            <Card variant="outlined" padding="large">
              <div>Large Padding</div>
            </Card>
            <Card variant="outlined" padding="none">
              <div style={{ padding: 'var(--spacing-4)' }}>No Padding (custom padding applied)</div>
            </Card>
          </div>
        </div>
        <CodeBlock
          code={`import { Card } from '@/components/Card';

<Card variant="outlined" padding="small">Small Padding</Card>
<Card variant="outlined" padding="medium">Medium Padding</Card>
<Card variant="outlined" padding="large">Large Padding</Card>
<Card variant="outlined" padding="none">No Padding</Card>`}
        />
      </section>

      {/* Interactive Cards */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 style={{ marginBottom: 'var(--spacing-4)' }}>Interactive Cards</h2>
        <div
          style={{
            padding: 'var(--spacing-8)',
            backgroundColor: 'var(--color-surface-paper)',
            borderRadius: 'var(--border-radius-lg)',
            border: '1px solid var(--color-surface-border)',
            marginBottom: 'var(--spacing-4)',
          }}
        >
          <div style={{ display: 'grid', gap: 'var(--spacing-6)', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            <Card
              variant="elevated"
              onClick={() => alert('Card clicked!')}
            >
              <h3 style={{ marginBottom: 'var(--spacing-2)' }}>Clickable Card</h3>
              <p style={{ color: 'var(--color-text-secondary)' }}>
                Hover over this card to see the interactive effect.
              </p>
            </Card>
            <Card
              variant="outlined"
              onClick={() => alert('Another click!')}
            >
              <h3 style={{ marginBottom: 'var(--spacing-2)' }}>Another Clickable</h3>
              <p style={{ color: 'var(--color-text-secondary)' }}>
                Cards with onClick props have hover effects.
              </p>
            </Card>
          </div>
        </div>
        <CodeBlock
          code={`import { Card } from '@/components/Card';

<Card
  variant="elevated"
  onClick={() => alert('Card clicked!')}
>
  <h3>Clickable Card</h3>
  <p>Hover over this card to see the interactive effect.</p>
</Card>`}
        />
      </section>

      {/* Complex Example */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 style={{ marginBottom: 'var(--spacing-4)' }}>Vehicle Card Example</h2>
        <div
          style={{
            padding: 'var(--spacing-8)',
            backgroundColor: 'var(--color-surface-paper)',
            borderRadius: 'var(--border-radius-lg)',
            border: '1px solid var(--color-surface-border)',
            marginBottom: 'var(--spacing-4)',
          }}
        >
          <div style={{ display: 'grid', gap: 'var(--spacing-6)', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
            <Card variant="elevated">
              <div
                style={{
                  width: '100%',
                  height: '180px',
                  backgroundColor: 'var(--color-surface-border)',
                  borderRadius: 'var(--border-radius-md)',
                  marginBottom: 'var(--spacing-4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-text-secondary)',
                }}
              >
                Vehicle Image
              </div>
              <div style={{ marginBottom: 'var(--spacing-2)' }}>
                <h3 style={{ marginBottom: 'var(--spacing-1)' }}>2023 Toyota Camry</h3>
                <div
                  style={{
                    fontSize: 'var(--typography-body-font-size)',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  XLE • 25,000 miles
                </div>
              </div>
              <div style={{ display: 'flex', gap: 'var(--spacing-2)', marginBottom: 'var(--spacing-4)' }}>
                <Pill variant="success">Available</Pill>
                <Pill variant="primary">Certified</Pill>
              </div>
              <div
                style={{
                  fontSize: 'var(--typography-h3-font-size)',
                  fontWeight: 'var(--typography-h3-font-weight)',
                  color: 'var(--color-primary-500)',
                  marginBottom: 'var(--spacing-4)',
                }}
              >
                $28,995
              </div>
              <div style={{ display: 'flex', gap: 'var(--spacing-3)' }}>
                <Button variant="primary" style={{ flex: 1 }}>
                  View Details
                </Button>
                <Button variant="secondary">
                  Save
                </Button>
              </div>
            </Card>

            <Card variant="elevated">
              <div
                style={{
                  width: '100%',
                  height: '180px',
                  backgroundColor: 'var(--color-surface-border)',
                  borderRadius: 'var(--border-radius-md)',
                  marginBottom: 'var(--spacing-4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-text-secondary)',
                }}
              >
                Vehicle Image
              </div>
              <div style={{ marginBottom: 'var(--spacing-2)' }}>
                <h3 style={{ marginBottom: 'var(--spacing-1)' }}>2024 Ford F-150</h3>
                <div
                  style={{
                    fontSize: 'var(--typography-body-font-size)',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  Lariat • 12,000 miles
                </div>
              </div>
              <div style={{ display: 'flex', gap: 'var(--spacing-2)', marginBottom: 'var(--spacing-4)' }}>
                <Pill variant="success">Available</Pill>
                <Pill variant="secondary">4WD</Pill>
              </div>
              <div
                style={{
                  fontSize: 'var(--typography-h3-font-size)',
                  fontWeight: 'var(--typography-h3-font-weight)',
                  color: 'var(--color-primary-500)',
                  marginBottom: 'var(--spacing-4)',
                }}
              >
                $52,900
              </div>
              <div style={{ display: 'flex', gap: 'var(--spacing-3)' }}>
                <Button variant="primary" style={{ flex: 1 }}>
                  View Details
                </Button>
                <Button variant="secondary">
                  Save
                </Button>
              </div>
            </Card>
          </div>
        </div>
        <CodeBlock
          code={`import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { Pill } from '@/components/Pill';

<Card variant="elevated">
  <div>Vehicle Image</div>
  <h3>2023 Toyota Camry</h3>
  <div>XLE • 25,000 miles</div>
  <div>
    <Pill variant="success">Available</Pill>
    <Pill variant="primary">Certified</Pill>
  </div>
  <div>$28,995</div>
  <div>
    <Button variant="primary">View Details</Button>
    <Button variant="secondary">Save</Button>
  </div>
</Card>`}
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
                  'elevated' | 'outlined' | 'filled'
                </td>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)', borderBottom: '1px solid var(--color-surface-border)' }}>
                  'elevated'
                </td>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)', borderBottom: '1px solid var(--color-surface-border)' }}>
                  The visual style of the card
                </td>
              </tr>
              <tr>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)', borderBottom: '1px solid var(--color-surface-border)', fontFamily: 'var(--font-family-mono)', fontSize: 'var(--typography-detail-font-size)' }}>
                  padding
                </td>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)', borderBottom: '1px solid var(--color-surface-border)', fontFamily: 'var(--font-family-mono)', fontSize: 'var(--typography-detail-font-size)' }}>
                  'none' | 'small' | 'medium' | 'large'
                </td>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)', borderBottom: '1px solid var(--color-surface-border)' }}>
                  'medium'
                </td>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)', borderBottom: '1px solid var(--color-surface-border)' }}>
                  The padding inside the card
                </td>
              </tr>
              <tr>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)', fontFamily: 'var(--font-family-mono)', fontSize: 'var(--typography-detail-font-size)' }}>
                  onClick
                </td>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)', fontFamily: 'var(--font-family-mono)', fontSize: 'var(--typography-detail-font-size)' }}>
                  () =&gt; void
                </td>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)' }}>
                  undefined
                </td>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)' }}>
                  Optional click handler (makes card interactive)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
