'use client';

import { useState } from 'react';
import { Input } from '@/components/Input';
import { CodeBlock } from '@/components/CodeBlock';

export default function InputPage() {
  const [value, setValue] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (value: string) => {
    if (!value) {
      setEmailError('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  return (
    <div
      style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: 'var(--spacing-8) var(--spacing-6)',
      }}
    >
      <div style={{ marginBottom: 'var(--spacing-8)' }}>
        <h1 style={{ marginBottom: 'var(--spacing-3)' }}>Input</h1>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--typography-body-font-size)' }}>
          Input fields allow users to enter text. They support labels, helper text, error states,
          and validation.
        </p>
      </div>

      {/* Basic */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 style={{ marginBottom: 'var(--spacing-4)' }}>Basic Input</h2>
        <div
          style={{
            padding: 'var(--spacing-8)',
            backgroundColor: 'var(--color-surface-paper)',
            borderRadius: 'var(--border-radius-lg)',
            border: '1px solid var(--color-surface-border)',
            marginBottom: 'var(--spacing-4)',
          }}
        >
          <div style={{ maxWidth: '400px' }}>
            <Input placeholder="Enter text..." />
          </div>
        </div>
        <CodeBlock
          code={`import { Input } from '@/components/Input';

<Input placeholder="Enter text..." />`}
        />
      </section>

      {/* With Label */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 style={{ marginBottom: 'var(--spacing-4)' }}>With Label</h2>
        <div
          style={{
            padding: 'var(--spacing-8)',
            backgroundColor: 'var(--color-surface-paper)',
            borderRadius: 'var(--border-radius-lg)',
            border: '1px solid var(--color-surface-border)',
            marginBottom: 'var(--spacing-4)',
          }}
        >
          <div style={{ maxWidth: '400px' }}>
            <Input
              label="Full Name"
              placeholder="John Doe"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </div>
        <CodeBlock
          code={`import { Input } from '@/components/Input';

<Input
  label="Full Name"
  placeholder="John Doe"
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>`}
        />
      </section>

      {/* With Helper Text */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 style={{ marginBottom: 'var(--spacing-4)' }}>With Helper Text</h2>
        <div
          style={{
            padding: 'var(--spacing-8)',
            backgroundColor: 'var(--color-surface-paper)',
            borderRadius: 'var(--border-radius-lg)',
            border: '1px solid var(--color-surface-border)',
            marginBottom: 'var(--spacing-4)',
          }}
        >
          <div style={{ maxWidth: '400px' }}>
            <Input
              label="Username"
              placeholder="johndoe123"
              helperText="This will be visible to other users"
            />
          </div>
        </div>
        <CodeBlock
          code={`import { Input } from '@/components/Input';

<Input
  label="Username"
  placeholder="johndoe123"
  helperText="This will be visible to other users"
/>`}
        />
      </section>

      {/* Error State */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 style={{ marginBottom: 'var(--spacing-4)' }}>Error State</h2>
        <div
          style={{
            padding: 'var(--spacing-8)',
            backgroundColor: 'var(--color-surface-paper)',
            borderRadius: 'var(--border-radius-lg)',
            border: '1px solid var(--color-surface-border)',
            marginBottom: 'var(--spacing-4)',
          }}
        >
          <div style={{ maxWidth: '400px' }}>
            <Input
              label="Email"
              type="email"
              placeholder="john@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validateEmail(e.target.value);
              }}
              error={emailError}
            />
          </div>
        </div>
        <CodeBlock
          code={`import { Input } from '@/components/Input';
import { useState } from 'react';

function Example() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (value: string) => {
    if (!value) {
      setEmailError('Email is required');
    } else if (!/\\S+@\\S+\\.\\S+/.test(value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  return (
    <Input
      label="Email"
      type="email"
      placeholder="john@example.com"
      value={email}
      onChange={(e) => {
        setEmail(e.target.value);
        validateEmail(e.target.value);
      }}
      error={emailError}
    />
  );
}`}
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
          <div style={{ maxWidth: '400px' }}>
            <Input
              label="Disabled Input"
              value="Cannot edit this"
              disabled
            />
          </div>
        </div>
        <CodeBlock
          code={`import { Input } from '@/components/Input';

<Input
  label="Disabled Input"
  value="Cannot edit this"
  disabled
/>`}
        />
      </section>

      {/* Full Width */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 style={{ marginBottom: 'var(--spacing-4)' }}>Full Width</h2>
        <div
          style={{
            padding: 'var(--spacing-8)',
            backgroundColor: 'var(--color-surface-paper)',
            borderRadius: 'var(--border-radius-lg)',
            border: '1px solid var(--color-surface-border)',
            marginBottom: 'var(--spacing-4)',
          }}
        >
          <Input
            label="Full Width Input"
            placeholder="This input takes the full width of its container"
            fullWidth
          />
        </div>
        <CodeBlock
          code={`import { Input } from '@/components/Input';

<Input
  label="Full Width Input"
  placeholder="This input takes the full width of its container"
  fullWidth
/>`}
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
                  label
                </td>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)', borderBottom: '1px solid var(--color-surface-border)', fontFamily: 'var(--font-family-mono)', fontSize: 'var(--typography-detail-font-size)' }}>
                  string
                </td>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)', borderBottom: '1px solid var(--color-surface-border)' }}>
                  undefined
                </td>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)', borderBottom: '1px solid var(--color-surface-border)' }}>
                  Label text displayed above the input
                </td>
              </tr>
              <tr>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)', borderBottom: '1px solid var(--color-surface-border)', fontFamily: 'var(--font-family-mono)', fontSize: 'var(--typography-detail-font-size)' }}>
                  error
                </td>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)', borderBottom: '1px solid var(--color-surface-border)', fontFamily: 'var(--font-family-mono)', fontSize: 'var(--typography-detail-font-size)' }}>
                  string
                </td>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)', borderBottom: '1px solid var(--color-surface-border)' }}>
                  undefined
                </td>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)', borderBottom: '1px solid var(--color-surface-border)' }}>
                  Error message to display
                </td>
              </tr>
              <tr>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)', borderBottom: '1px solid var(--color-surface-border)', fontFamily: 'var(--font-family-mono)', fontSize: 'var(--typography-detail-font-size)' }}>
                  helperText
                </td>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)', borderBottom: '1px solid var(--color-surface-border)', fontFamily: 'var(--font-family-mono)', fontSize: 'var(--typography-detail-font-size)' }}>
                  string
                </td>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)', borderBottom: '1px solid var(--color-surface-border)' }}>
                  undefined
                </td>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)', borderBottom: '1px solid var(--color-surface-border)' }}>
                  Helper text displayed below the input
                </td>
              </tr>
              <tr>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)', borderBottom: '1px solid var(--color-surface-border)', fontFamily: 'var(--font-family-mono)', fontSize: 'var(--typography-detail-font-size)' }}>
                  fullWidth
                </td>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)', borderBottom: '1px solid var(--color-surface-border)', fontFamily: 'var(--font-family-mono)', fontSize: 'var(--typography-detail-font-size)' }}>
                  boolean
                </td>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)', borderBottom: '1px solid var(--color-surface-border)' }}>
                  false
                </td>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)', borderBottom: '1px solid var(--color-surface-border)' }}>
                  Whether the input should take full width
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
                  Whether the input is disabled
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
