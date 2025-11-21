'use client';

import { Card } from '@/components/Card';
import { CodeBlock } from '@/components/CodeBlock';

export default function TypographyPage() {
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
        <h1 style={{ marginBottom: 'var(--spacing-3)' }}>Typography</h1>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--typography-body-font-size)' }}>
          Our typography system uses Roboto for a clean, modern appearance. The type scale
          provides consistent hierarchy with two font weights (400 Regular and 700 Bold).
        </p>
      </div>

      {/* Font Family */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 style={{ marginBottom: 'var(--spacing-4)' }}>Font Family</h2>
        <div style={{ display: 'grid', gap: 'var(--spacing-4)', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <Card variant="outlined">
            <div style={{ marginBottom: 'var(--spacing-4)' }}>
              <div
                style={{
                  fontSize: 'var(--typography-label-font-size)',
                  fontWeight: '700',
                  color: 'var(--color-text-secondary)',
                  marginBottom: 'var(--spacing-3)',
                }}
              >
                Roboto
              </div>
              <div
                style={{
                  fontSize: '24px',
                  fontFamily: 'var(--font-family-base)',
                  marginBottom: 'var(--spacing-3)',
                }}
              >
                The quick brown fox jumps over the lazy dog
              </div>
              <div
                style={{
                  fontSize: 'var(--typography-body-font-size)',
                  fontFamily: 'var(--font-family-base)',
                  color: 'var(--color-text-secondary)',
                }}
              >
                ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                abcdefghijklmnopqrstuvwxyz<br />
                0123456789
              </div>
            </div>
            <div
              style={{
                padding: 'var(--spacing-3)',
                backgroundColor: 'var(--color-surface-paper)',
                borderRadius: 'var(--border-radius-sm)',
                fontFamily: 'var(--font-family-mono)',
                fontSize: 'var(--typography-detail-font-size)',
                color: 'var(--color-text-secondary)',
              }}
            >
              font-family: 'Roboto', sans-serif
            </div>
          </Card>

          <Card variant="outlined">
            <div style={{ marginBottom: 'var(--spacing-4)' }}>
              <div
                style={{
                  fontSize: 'var(--typography-label-font-size)',
                  fontWeight: '700',
                  color: 'var(--color-text-secondary)',
                  marginBottom: 'var(--spacing-3)',
                }}
              >
                Roboto Mono (Code)
              </div>
              <div
                style={{
                  fontSize: '18px',
                  fontFamily: 'var(--font-family-mono)',
                  marginBottom: 'var(--spacing-3)',
                }}
              >
                const hello = "world";
              </div>
              <div
                style={{
                  fontSize: 'var(--typography-body-font-size)',
                  fontFamily: 'var(--font-family-mono)',
                  color: 'var(--color-text-secondary)',
                }}
              >
                Used for code snippets,<br />
                technical documentation,<br />
                and monospaced content
              </div>
            </div>
            <div
              style={{
                padding: 'var(--spacing-3)',
                backgroundColor: 'var(--color-surface-paper)',
                borderRadius: 'var(--border-radius-sm)',
                fontFamily: 'var(--font-family-mono)',
                fontSize: 'var(--typography-detail-font-size)',
                color: 'var(--color-text-secondary)',
              }}
            >
              font-family: 'Roboto Mono', monospace
            </div>
          </Card>
        </div>
      </section>

      {/* Type Scale */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 style={{ marginBottom: 'var(--spacing-4)' }}>Type Scale</h2>
        <Card variant="outlined" padding="none">
          {/* H1 */}
          <div
            style={{
              padding: 'var(--spacing-6)',
              borderBottom: '1px solid var(--color-surface-border)',
            }}
          >
            <div style={{ marginBottom: 'var(--spacing-4)' }}>
              <div
                style={{
                  fontSize: 'var(--typography-label-font-size)',
                  color: 'var(--color-text-secondary)',
                  marginBottom: 'var(--spacing-2)',
                }}
              >
                Heading 1
              </div>
              <div
                style={{
                  fontSize: '32px',
                  lineHeight: '40px',
                  fontWeight: '700',
                }}
              >
                The quick brown fox jumps over the lazy dog
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                gap: 'var(--spacing-6)',
                fontSize: 'var(--typography-detail-font-size)',
                fontFamily: 'var(--font-family-mono)',
                color: 'var(--color-text-secondary)',
                flexWrap: 'wrap',
              }}
            >
              <div>Size: 32px</div>
              <div>Line Height: 40px</div>
              <div>Weight: 700 (Bold)</div>
            </div>
          </div>

          {/* H2 */}
          <div
            style={{
              padding: 'var(--spacing-6)',
              borderBottom: '1px solid var(--color-surface-border)',
            }}
          >
            <div style={{ marginBottom: 'var(--spacing-4)' }}>
              <div
                style={{
                  fontSize: 'var(--typography-label-font-size)',
                  color: 'var(--color-text-secondary)',
                  marginBottom: 'var(--spacing-2)',
                }}
              >
                Heading 2
              </div>
              <div
                style={{
                  fontSize: '24px',
                  lineHeight: '32px',
                  fontWeight: '700',
                }}
              >
                The quick brown fox jumps over the lazy dog
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                gap: 'var(--spacing-6)',
                fontSize: 'var(--typography-detail-font-size)',
                fontFamily: 'var(--font-family-mono)',
                color: 'var(--color-text-secondary)',
                flexWrap: 'wrap',
              }}
            >
              <div>Size: 24px</div>
              <div>Line Height: 32px</div>
              <div>Weight: 700 (Bold)</div>
            </div>
          </div>

          {/* H3 */}
          <div
            style={{
              padding: 'var(--spacing-6)',
              borderBottom: '1px solid var(--color-surface-border)',
            }}
          >
            <div style={{ marginBottom: 'var(--spacing-4)' }}>
              <div
                style={{
                  fontSize: 'var(--typography-label-font-size)',
                  color: 'var(--color-text-secondary)',
                  marginBottom: 'var(--spacing-2)',
                }}
              >
                Heading 3
              </div>
              <div
                style={{
                  fontSize: '16px',
                  lineHeight: '24px',
                  fontWeight: '700',
                }}
              >
                The quick brown fox jumps over the lazy dog
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                gap: 'var(--spacing-6)',
                fontSize: 'var(--typography-detail-font-size)',
                fontFamily: 'var(--font-family-mono)',
                color: 'var(--color-text-secondary)',
                flexWrap: 'wrap',
              }}
            >
              <div>Size: 16px</div>
              <div>Line Height: 24px</div>
              <div>Weight: 700 (Bold)</div>
            </div>
          </div>

          {/* Body */}
          <div
            style={{
              padding: 'var(--spacing-6)',
              borderBottom: '1px solid var(--color-surface-border)',
            }}
          >
            <div style={{ marginBottom: 'var(--spacing-4)' }}>
              <div
                style={{
                  fontSize: 'var(--typography-label-font-size)',
                  color: 'var(--color-text-secondary)',
                  marginBottom: 'var(--spacing-2)',
                }}
              >
                Body
              </div>
              <div
                style={{
                  fontSize: '16px',
                  lineHeight: '24px',
                  fontWeight: '400',
                }}
              >
                The quick brown fox jumps over the lazy dog. Body text is used for paragraphs,
                descriptions, and main content. It should be comfortable to read at length and
                maintain good legibility across different devices.
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                gap: 'var(--spacing-6)',
                fontSize: 'var(--typography-detail-font-size)',
                fontFamily: 'var(--font-family-mono)',
                color: 'var(--color-text-secondary)',
                flexWrap: 'wrap',
              }}
            >
              <div>Size: 16px</div>
              <div>Line Height: 24px</div>
              <div>Weight: 400 (Regular)</div>
            </div>
          </div>

          {/* Label */}
          <div
            style={{
              padding: 'var(--spacing-6)',
              borderBottom: '1px solid var(--color-surface-border)',
            }}
          >
            <div style={{ marginBottom: 'var(--spacing-4)' }}>
              <div
                style={{
                  fontSize: 'var(--typography-label-font-size)',
                  color: 'var(--color-text-secondary)',
                  marginBottom: 'var(--spacing-2)',
                }}
              >
                Label
              </div>
              <div
                style={{
                  fontSize: '14px',
                  lineHeight: '20px',
                  fontWeight: '400',
                }}
              >
                The quick brown fox jumps over the lazy dog. Label text is used for form labels,
                button text, navigation items, and other UI elements.
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                gap: 'var(--spacing-6)',
                fontSize: 'var(--typography-detail-font-size)',
                fontFamily: 'var(--font-family-mono)',
                color: 'var(--color-text-secondary)',
                flexWrap: 'wrap',
              }}
            >
              <div>Size: 14px</div>
              <div>Line Height: 20px</div>
              <div>Weight: 400 (Regular)</div>
            </div>
          </div>

          {/* Detail */}
          <div
            style={{
              padding: 'var(--spacing-6)',
            }}
          >
            <div style={{ marginBottom: 'var(--spacing-4)' }}>
              <div
                style={{
                  fontSize: 'var(--typography-label-font-size)',
                  color: 'var(--color-text-secondary)',
                  marginBottom: 'var(--spacing-2)',
                }}
              >
                Detail
              </div>
              <div
                style={{
                  fontSize: '12px',
                  lineHeight: '16px',
                  fontWeight: '400',
                }}
              >
                The quick brown fox jumps over the lazy dog. Detail text is used for captions,
                helper text, metadata, and supplementary information.
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                gap: 'var(--spacing-6)',
                fontSize: 'var(--typography-detail-font-size)',
                fontFamily: 'var(--font-family-mono)',
                color: 'var(--color-text-secondary)',
                flexWrap: 'wrap',
              }}
            >
              <div>Size: 12px</div>
              <div>Line Height: 16px</div>
              <div>Weight: 400 (Regular)</div>
            </div>
          </div>
        </Card>
      </section>

      {/* Font Weights */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 style={{ marginBottom: 'var(--spacing-4)' }}>Font Weights</h2>
        <div style={{ display: 'grid', gap: 'var(--spacing-4)', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <Card variant="outlined">
            <div style={{ marginBottom: 'var(--spacing-3)' }}>
              <div
                style={{
                  fontSize: 'var(--typography-label-font-size)',
                  fontWeight: '700',
                  color: 'var(--color-text-secondary)',
                  marginBottom: 'var(--spacing-2)',
                }}
              >
                Regular (400)
              </div>
              <div
                style={{
                  fontSize: '24px',
                  fontWeight: '400',
                  marginBottom: 'var(--spacing-2)',
                }}
              >
                The quick brown fox
              </div>
              <div
                style={{
                  fontSize: 'var(--typography-body-font-size)',
                  color: 'var(--color-text-secondary)',
                }}
              >
                Used for body text, labels, and detail text
              </div>
            </div>
            <div
              style={{
                padding: 'var(--spacing-2)',
                backgroundColor: 'var(--color-surface-paper)',
                borderRadius: 'var(--border-radius-sm)',
                fontFamily: 'var(--font-family-mono)',
                fontSize: 'var(--typography-detail-font-size)',
                color: 'var(--color-text-secondary)',
              }}
            >
              font-weight: 400
            </div>
          </Card>

          <Card variant="outlined">
            <div style={{ marginBottom: 'var(--spacing-3)' }}>
              <div
                style={{
                  fontSize: 'var(--typography-label-font-size)',
                  fontWeight: '700',
                  color: 'var(--color-text-secondary)',
                  marginBottom: 'var(--spacing-2)',
                }}
              >
                Bold (700)
              </div>
              <div
                style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  marginBottom: 'var(--spacing-2)',
                }}
              >
                The quick brown fox
              </div>
              <div
                style={{
                  fontSize: 'var(--typography-body-font-size)',
                  color: 'var(--color-text-secondary)',
                }}
              >
                Used for all headings (H1, H2, H3)
              </div>
            </div>
            <div
              style={{
                padding: 'var(--spacing-2)',
                backgroundColor: 'var(--color-surface-paper)',
                borderRadius: 'var(--border-radius-sm)',
                fontFamily: 'var(--font-family-mono)',
                fontSize: 'var(--typography-detail-font-size)',
                color: 'var(--color-text-secondary)',
              }}
            >
              font-weight: 700
            </div>
          </Card>
        </div>
      </section>

      {/* CSS Variable Reference */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 style={{ marginBottom: 'var(--spacing-4)' }}>CSS Variable Reference</h2>
        <CodeBlock
          code={`/* Typography CSS Variables */

/* Font Families */
--font-family-base: 'Roboto', sans-serif
--font-family-mono: 'Roboto Mono', monospace

/* Heading 1 */
--typography-h1-font-size: 32px
--typography-h1-line-height: 40px
--typography-h1-font-weight: 700

/* Heading 2 */
--typography-h2-font-size: 24px
--typography-h2-line-height: 32px
--typography-h2-font-weight: 700

/* Heading 3 */
--typography-h3-font-size: 16px
--typography-h3-line-height: 24px
--typography-h3-font-weight: 700

/* Body */
--typography-body-font-size: 16px
--typography-body-line-height: 24px
--typography-body-font-weight: 400

/* Label */
--typography-label-font-size: 14px
--typography-label-line-height: 20px
--typography-label-font-weight: 400

/* Detail */
--typography-detail-font-size: 12px
--typography-detail-line-height: 16px
--typography-detail-font-weight: 400`}
          language="css"
        />
      </section>

      {/* Code Examples */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 style={{ marginBottom: 'var(--spacing-4)' }}>Code Examples</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
          <div>
            <h3 style={{ marginBottom: 'var(--spacing-3)', fontSize: '16px' }}>Using CSS Variables</h3>
            <CodeBlock
              code={`/* Apply heading styles */
.page-title {
  font-size: var(--typography-h1-font-size);
  line-height: var(--typography-h1-line-height);
  font-weight: var(--typography-h1-font-weight);
}

/* Apply body text styles */
.description {
  font-size: var(--typography-body-font-size);
  line-height: var(--typography-body-line-height);
  font-weight: var(--typography-body-font-weight);
}

/* Apply label styles */
.form-label {
  font-size: var(--typography-label-font-size);
  line-height: var(--typography-label-line-height);
}`}
              language="css"
            />
          </div>

          <div>
            <h3 style={{ marginBottom: 'var(--spacing-3)', fontSize: '16px' }}>React/JSX Inline Styles</h3>
            <CodeBlock
              code={`// Heading 1
<h1 style={{
  fontSize: 'var(--typography-h1-font-size)',
  lineHeight: 'var(--typography-h1-line-height)',
  fontWeight: 'var(--typography-h1-font-weight)'
}}>
  Page Title
</h1>

// Body text
<p style={{
  fontSize: 'var(--typography-body-font-size)',
  lineHeight: 'var(--typography-body-line-height)'
}}>
  Main content goes here
</p>

// Detail text
<span style={{
  fontSize: 'var(--typography-detail-font-size)',
  color: 'var(--color-text-secondary)'
}}>
  Helper text
</span>`}
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
            <h3 style={{ marginBottom: 'var(--spacing-3)', fontSize: '16px' }}>Heading 1 (32px)</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>
              Use for page titles and primary headings. Should appear once per page at the top
              of the content hierarchy.
            </p>
          </Card>

          <Card variant="filled">
            <h3 style={{ marginBottom: 'var(--spacing-3)', fontSize: '16px' }}>Heading 2 (24px)</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>
              Use for major section headings. Creates clear content organization and helps users
              scan the page structure.
            </p>
          </Card>

          <Card variant="filled">
            <h3 style={{ marginBottom: 'var(--spacing-3)', fontSize: '16px' }}>Heading 3 (16px)</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>
              Use for subsection headings within major sections. Same size as body but bold for
              subtle hierarchy.
            </p>
          </Card>

          <Card variant="filled">
            <h3 style={{ marginBottom: 'var(--spacing-3)', fontSize: '16px' }}>Body (16px)</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>
              Use for all paragraphs, descriptions, and main content. Optimal size for readability
              with good line height.
            </p>
          </Card>

          <Card variant="filled">
            <h3 style={{ marginBottom: 'var(--spacing-3)', fontSize: '16px' }}>Label (14px)</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>
              Use for form labels, button text, navigation items, and UI controls. Slightly smaller
              for compact interfaces.
            </p>
          </Card>

          <Card variant="filled">
            <h3 style={{ marginBottom: 'var(--spacing-3)', fontSize: '16px' }}>Detail (12px)</h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>
              Use for captions, helper text, timestamps, and metadata. Smallest size that maintains
              legibility.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}
