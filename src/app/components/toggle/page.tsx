'use client';

import { useState } from 'react';
import { Toggle } from '@/components/Toggle';
import { CodeBlock } from '@/components/CodeBlock';

export default function TogglePage() {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [emailUpdates, setEmailUpdates] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: 'var(--spacing-8) var(--spacing-6)',
      }}
    >
      <div style={{ marginBottom: 'var(--spacing-8)' }}>
        <h1 style={{ marginBottom: 'var(--spacing-3)' }}>Toggle</h1>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--typography-body-font-size)' }}>
          Toggle switches are used for binary on/off states. They provide immediate feedback
          and are commonly used for settings and preferences.
        </p>
      </div>

      {/* Basic */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 style={{ marginBottom: 'var(--spacing-4)' }}>Basic Toggle</h2>
        <div
          style={{
            padding: 'var(--spacing-8)',
            backgroundColor: 'var(--color-surface-paper)',
            borderRadius: 'var(--border-radius-lg)',
            border: '1px solid var(--color-surface-border)',
            marginBottom: 'var(--spacing-4)',
          }}
        >
          <div style={{ display: 'flex', gap: 'var(--spacing-6)', flexWrap: 'wrap' }}>
            <Toggle checked={toggle1} onChange={setToggle1} />
            <Toggle checked={toggle2} onChange={setToggle2} />
          </div>
        </div>
        <CodeBlock
          code={`import { Toggle } from '@/components/Toggle';
import { useState } from 'react';

function Example() {
  const [checked, setChecked] = useState(false);

  return (
    <Toggle checked={checked} onChange={setChecked} />
  );
}`}
        />
      </section>

      {/* With Labels */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 style={{ marginBottom: 'var(--spacing-4)' }}>With Labels</h2>
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
            <Toggle
              checked={notifications}
              onChange={setNotifications}
              label="Enable notifications"
            />
            <Toggle
              checked={emailUpdates}
              onChange={setEmailUpdates}
              label="Receive email updates"
            />
            <Toggle
              checked={darkMode}
              onChange={setDarkMode}
              label="Dark mode"
            />
          </div>
        </div>
        <CodeBlock
          code={`import { Toggle } from '@/components/Toggle';
import { useState } from 'react';

function Example() {
  const [notifications, setNotifications] = useState(true);

  return (
    <Toggle
      checked={notifications}
      onChange={setNotifications}
      label="Enable notifications"
    />
  );
}`}
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
            <Toggle
              checked={true}
              onChange={() => {}}
              label="Small toggle"
              size="small"
            />
            <Toggle
              checked={true}
              onChange={() => {}}
              label="Medium toggle (default)"
              size="medium"
            />
          </div>
        </div>
        <CodeBlock
          code={`import { Toggle } from '@/components/Toggle';

<Toggle checked={true} onChange={() => {}} label="Small toggle" size="small" />
<Toggle checked={true} onChange={() => {}} label="Medium toggle" size="medium" />`}
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
            <Toggle
              checked={false}
              onChange={() => {}}
              label="Disabled (off)"
              disabled
            />
            <Toggle
              checked={true}
              onChange={() => {}}
              label="Disabled (on)"
              disabled
            />
          </div>
        </div>
        <CodeBlock
          code={`import { Toggle } from '@/components/Toggle';

<Toggle checked={false} onChange={() => {}} label="Disabled (off)" disabled />
<Toggle checked={true} onChange={() => {}} label="Disabled (on)" disabled />`}
        />
      </section>

      {/* Settings Example */}
      <section style={{ marginBottom: 'var(--spacing-12)' }}>
        <h2 style={{ marginBottom: 'var(--spacing-4)' }}>Settings Panel Example</h2>
        <div
          style={{
            padding: 'var(--spacing-8)',
            backgroundColor: 'var(--color-surface-paper)',
            borderRadius: 'var(--border-radius-lg)',
            border: '1px solid var(--color-surface-border)',
            marginBottom: 'var(--spacing-4)',
          }}
        >
          <div
            style={{
              backgroundColor: 'var(--color-surface-background)',
              borderRadius: 'var(--border-radius-md)',
              padding: 'var(--spacing-6)',
              maxWidth: '500px',
            }}
          >
            <h3 style={{ marginBottom: 'var(--spacing-5)' }}>Preferences</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-5)' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingBottom: 'var(--spacing-4)',
                  borderBottom: '1px solid var(--color-surface-border)',
                }}
              >
                <div>
                  <div style={{ fontWeight: '600', marginBottom: 'var(--spacing-1)' }}>
                    Push Notifications
                  </div>
                  <div
                    style={{
                      fontSize: 'var(--typography-detail-font-size)',
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    Receive push notifications on your device
                  </div>
                </div>
                <Toggle checked={notifications} onChange={setNotifications} />
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingBottom: 'var(--spacing-4)',
                  borderBottom: '1px solid var(--color-surface-border)',
                }}
              >
                <div>
                  <div style={{ fontWeight: '600', marginBottom: 'var(--spacing-1)' }}>
                    Email Updates
                  </div>
                  <div
                    style={{
                      fontSize: 'var(--typography-detail-font-size)',
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    Get weekly updates via email
                  </div>
                </div>
                <Toggle checked={emailUpdates} onChange={setEmailUpdates} />
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <div style={{ fontWeight: '600', marginBottom: 'var(--spacing-1)' }}>
                    Dark Mode
                  </div>
                  <div
                    style={{
                      fontSize: 'var(--typography-detail-font-size)',
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    Use dark theme across the app
                  </div>
                </div>
                <Toggle checked={darkMode} onChange={setDarkMode} />
              </div>
            </div>
          </div>
        </div>
        <CodeBlock
          code={`import { Toggle } from '@/components/Toggle';

<div>
  <div>
    <div>Push Notifications</div>
    <div>Receive push notifications on your device</div>
  </div>
  <Toggle checked={notifications} onChange={setNotifications} />
</div>`}
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
                  checked
                </td>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)', borderBottom: '1px solid var(--color-surface-border)', fontFamily: 'var(--font-family-mono)', fontSize: 'var(--typography-detail-font-size)' }}>
                  boolean
                </td>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)', borderBottom: '1px solid var(--color-surface-border)' }}>
                  -
                </td>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)', borderBottom: '1px solid var(--color-surface-border)' }}>
                  Whether the toggle is checked
                </td>
              </tr>
              <tr>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)', borderBottom: '1px solid var(--color-surface-border)', fontFamily: 'var(--font-family-mono)', fontSize: 'var(--typography-detail-font-size)' }}>
                  onChange
                </td>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)', borderBottom: '1px solid var(--color-surface-border)', fontFamily: 'var(--font-family-mono)', fontSize: 'var(--typography-detail-font-size)' }}>
                  (checked: boolean) =&gt; void
                </td>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)', borderBottom: '1px solid var(--color-surface-border)' }}>
                  -
                </td>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)', borderBottom: '1px solid var(--color-surface-border)' }}>
                  Callback when toggle state changes
                </td>
              </tr>
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
                  Optional label text
                </td>
              </tr>
              <tr>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)', borderBottom: '1px solid var(--color-surface-border)', fontFamily: 'var(--font-family-mono)', fontSize: 'var(--typography-detail-font-size)' }}>
                  size
                </td>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)', borderBottom: '1px solid var(--color-surface-border)', fontFamily: 'var(--font-family-mono)', fontSize: 'var(--typography-detail-font-size)' }}>
                  'small' | 'medium'
                </td>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)', borderBottom: '1px solid var(--color-surface-border)' }}>
                  'medium'
                </td>
                <td style={{ padding: 'var(--spacing-3) var(--spacing-4)', borderBottom: '1px solid var(--color-surface-border)' }}>
                  The size of the toggle
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
                  Whether the toggle is disabled
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
