import Link from 'next/link';

export default function Home() {
  return (
    <div
      style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: 'var(--spacing-12) var(--spacing-6)',
      }}
    >
      <div style={{ marginBottom: 'var(--spacing-12)' }}>
        <h1 style={{ marginBottom: 'var(--spacing-4)' }}>
          CarNow Design System
        </h1>
        <p
          style={{
            fontSize: 'var(--typography-body-font-size)',
            color: 'var(--color-text-secondary)',
            maxWidth: '600px',
          }}
        >
          A comprehensive multi-brand design system for CarNow automotive retail
          platform. Built with Next.js, TypeScript, and token-based theming for
          seamless brand switching.
        </p>
      </div>

      <div style={{ display: 'grid', gap: 'var(--spacing-8)', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        <section>
          <h3 style={{ marginBottom: 'var(--spacing-4)' }}>Foundations</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
            <Link
              href="/foundations/colors"
              style={{
                padding: 'var(--spacing-3)',
                borderRadius: 'var(--border-radius-md)',
                border: '1px solid var(--color-surface-border)',
                backgroundColor: 'var(--color-surface-paper)',
              }}
            >
              <div style={{ fontWeight: '600' }}>Colors</div>
              <div
                style={{
                  fontSize: 'var(--typography-detail-font-size)',
                  color: 'var(--color-text-secondary)',
                }}
              >
                Brand color palettes and usage guidelines
              </div>
            </Link>
            <Link
              href="/foundations/typography"
              style={{
                padding: 'var(--spacing-3)',
                borderRadius: 'var(--border-radius-md)',
                border: '1px solid var(--color-surface-border)',
                backgroundColor: 'var(--color-surface-paper)',
              }}
            >
              <div style={{ fontWeight: '600' }}>Typography</div>
              <div
                style={{
                  fontSize: 'var(--typography-detail-font-size)',
                  color: 'var(--color-text-secondary)',
                }}
              >
                Font families, scales, and text styles
              </div>
            </Link>
            <Link
              href="/foundations/spacing"
              style={{
                padding: 'var(--spacing-3)',
                borderRadius: 'var(--border-radius-md)',
                border: '1px solid var(--color-surface-border)',
                backgroundColor: 'var(--color-surface-paper)',
              }}
            >
              <div style={{ fontWeight: '600' }}>Spacing</div>
              <div
                style={{
                  fontSize: 'var(--typography-detail-font-size)',
                  color: 'var(--color-text-secondary)',
                }}
              >
                Spacing scale and layout guidelines
              </div>
            </Link>
          </div>
        </section>

        <section>
          <h3 style={{ marginBottom: 'var(--spacing-4)' }}>Components</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
            <Link
              href="/components/button"
              style={{
                padding: 'var(--spacing-3)',
                borderRadius: 'var(--border-radius-md)',
                border: '1px solid var(--color-surface-border)',
                backgroundColor: 'var(--color-surface-paper)',
              }}
            >
              <div style={{ fontWeight: '600' }}>Button</div>
              <div
                style={{
                  fontSize: 'var(--typography-detail-font-size)',
                  color: 'var(--color-text-secondary)',
                }}
              >
                Primary, secondary, and text button variants
              </div>
            </Link>
            <Link
              href="/components/pill"
              style={{
                padding: 'var(--spacing-3)',
                borderRadius: 'var(--border-radius-md)',
                border: '1px solid var(--color-surface-border)',
                backgroundColor: 'var(--color-surface-paper)',
              }}
            >
              <div style={{ fontWeight: '600' }}>Pill</div>
              <div
                style={{
                  fontSize: 'var(--typography-detail-font-size)',
                  color: 'var(--color-text-secondary)',
                }}
              >
                Tag-style component for labels and categories
              </div>
            </Link>
            <Link
              href="/components/input"
              style={{
                padding: 'var(--spacing-3)',
                borderRadius: 'var(--border-radius-md)',
                border: '1px solid var(--color-surface-border)',
                backgroundColor: 'var(--color-surface-paper)',
              }}
            >
              <div style={{ fontWeight: '600' }}>Input</div>
              <div
                style={{
                  fontSize: 'var(--typography-detail-font-size)',
                  color: 'var(--color-text-secondary)',
                }}
              >
                Text input field with validation states
              </div>
            </Link>
            <Link
              href="/components/toggle"
              style={{
                padding: 'var(--spacing-3)',
                borderRadius: 'var(--border-radius-md)',
                border: '1px solid var(--color-surface-border)',
                backgroundColor: 'var(--color-surface-paper)',
              }}
            >
              <div style={{ fontWeight: '600' }}>Toggle</div>
              <div
                style={{
                  fontSize: 'var(--typography-detail-font-size)',
                  color: 'var(--color-text-secondary)',
                }}
              >
                Switch component for boolean states
              </div>
            </Link>
            <Link
              href="/components/card"
              style={{
                padding: 'var(--spacing-3)',
                borderRadius: 'var(--border-radius-md)',
                border: '1px solid var(--color-surface-border)',
                backgroundColor: 'var(--color-surface-paper)',
              }}
            >
              <div style={{ fontWeight: '600' }}>Card</div>
              <div
                style={{
                  fontSize: 'var(--typography-detail-font-size)',
                  color: 'var(--color-text-secondary)',
                }}
              >
                Container component for content grouping
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
