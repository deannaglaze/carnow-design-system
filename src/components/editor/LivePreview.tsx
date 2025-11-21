'use client';

import { Button } from '../Button';
import { Card } from '../Card';
import { Input } from '../Input';
import { Toggle } from '../Toggle';
import { Pill } from '../Pill';

export function LivePreview() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
      {/* Buttons */}
      <div>
        <h4 style={{ marginBottom: 'var(--spacing-3)', fontSize: 'var(--typography-body-font-size)', fontWeight: '700' }}>
          Buttons
        </h4>
        <div style={{ display: 'flex', gap: 'var(--spacing-3)', flexWrap: 'wrap' }}>
          <Button variant="primary" size="small">Primary</Button>
          <Button variant="secondary" size="small">Secondary</Button>
          <Button variant="text" size="small">Text</Button>
        </div>
      </div>

      {/* Card */}
      <div>
        <h4 style={{ marginBottom: 'var(--spacing-3)', fontSize: 'var(--typography-body-font-size)', fontWeight: '700' }}>
          Cards
        </h4>
        <div style={{ display: 'grid', gap: 'var(--spacing-3)' }}>
          <Card variant="elevated" padding="small">
            <p style={{ fontSize: 'var(--typography-label-font-size)' }}>Elevated Card</p>
          </Card>
          <Card variant="outlined" padding="small">
            <p style={{ fontSize: 'var(--typography-label-font-size)' }}>Outlined Card</p>
          </Card>
          <Card variant="filled" padding="small">
            <p style={{ fontSize: 'var(--typography-label-font-size)' }}>Filled Card</p>
          </Card>
        </div>
      </div>

      {/* Input */}
      <div>
        <h4 style={{ marginBottom: 'var(--spacing-3)', fontSize: 'var(--typography-body-font-size)', fontWeight: '700' }}>
          Input
        </h4>
        <Input
          label="Email"
          placeholder="Enter your email"
          helperText="We'll never share your email"
        />
      </div>

      {/* Toggle */}
      <div>
        <h4 style={{ marginBottom: 'var(--spacing-3)', fontSize: 'var(--typography-body-font-size)', fontWeight: '700' }}>
          Toggle
        </h4>
        <div style={{ display: 'flex', gap: 'var(--spacing-3)', alignItems: 'center' }}>
          <Toggle checked={false} onChange={() => {}} />
          <Toggle checked={true} onChange={() => {}} />
        </div>
      </div>

      {/* Pills */}
      <div>
        <h4 style={{ marginBottom: 'var(--spacing-3)', fontSize: 'var(--typography-body-font-size)', fontWeight: '700' }}>
          Pills
        </h4>
        <div style={{ display: 'flex', gap: 'var(--spacing-2)', flexWrap: 'wrap' }}>
          <Pill variant="primary">Primary</Pill>
          <Pill variant="secondary">Secondary</Pill>
          <Pill variant="success">Success</Pill>
          <Pill variant="warning">Warning</Pill>
          <Pill variant="error">Error</Pill>
        </div>
      </div>

      {/* Typography */}
      <div>
        <h4 style={{ marginBottom: 'var(--spacing-3)', fontSize: 'var(--typography-body-font-size)', fontWeight: '700' }}>
          Typography
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <p style={{ fontSize: 'var(--typography-body-font-size)' }}>Body text</p>
          <p style={{ fontSize: 'var(--typography-label-font-size)' }}>Label text</p>
          <p style={{ fontSize: 'var(--typography-detail-font-size)' }}>Detail text</p>
        </div>
      </div>

      {/* Colors */}
      <div>
        <h4 style={{ marginBottom: 'var(--spacing-3)', fontSize: 'var(--typography-body-font-size)', fontWeight: '700' }}>
          Colors
        </h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 'var(--spacing-2)' }}>
          {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
            <div
              key={shade}
              style={{
                height: '48px',
                backgroundColor: `var(--color-primary-${shade})`,
                borderRadius: 'var(--border-radius-sm)',
                border: '1px solid var(--color-surface-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'var(--typography-detail-font-size)',
                fontWeight: '700',
                color: shade > 400 ? '#fff' : '#000',
              }}
            >
              {shade}
            </div>
          ))}
        </div>
      </div>

      {/* Spacing */}
      <div>
        <h4 style={{ marginBottom: 'var(--spacing-3)', fontSize: 'var(--typography-body-font-size)', fontWeight: '700' }}>
          Spacing Scale
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
          {['1', '2', '3', '4', '6', '8'].map((space) => (
            <div key={space} style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
              <div
                style={{
                  width: `var(--spacing-${space})`,
                  height: '16px',
                  backgroundColor: 'var(--color-primary-500)',
                  borderRadius: 'var(--border-radius-sm)',
                }}
              />
              <span style={{ fontSize: 'var(--typography-detail-font-size)', color: 'var(--color-text-secondary)' }}>
                spacing-{space}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Border Radius */}
      <div>
        <h4 style={{ marginBottom: 'var(--spacing-3)', fontSize: 'var(--typography-body-font-size)', fontWeight: '700' }}>
          Border Radius
        </h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--spacing-3)' }}>
          {['sm', 'md', 'lg', 'xl'].map((radius) => (
            <div
              key={radius}
              style={{
                height: '64px',
                backgroundColor: 'var(--color-primary-500)',
                borderRadius: `var(--border-radius-${radius})`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 'var(--typography-label-font-size)',
                fontWeight: '600',
                color: '#fff',
              }}
            >
              {radius}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
