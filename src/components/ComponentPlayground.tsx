'use client';

import React, { useState, useEffect } from 'react';
import { Card } from './Card';
import { CodeBlock } from './CodeBlock';

interface ControlDefinition {
  type: 'select' | 'boolean' | 'text';
  options?: string[];
  default: string | boolean;
  label?: string;
}

interface ComponentPlaygroundProps {
  component: React.ComponentType<any>;
  controls: Record<string, ControlDefinition>;
  codeTemplate: (props: Record<string, any>) => string;
  title?: string;
  description?: string;
}

export function ComponentPlayground({
  component: Component,
  controls,
  codeTemplate,
  title = 'Interactive Playground',
  description = 'Customize the component properties and see live changes',
}: ComponentPlaygroundProps) {
  // Initialize state with default values
  const [props, setProps] = useState<Record<string, any>>(() => {
    const initialProps: Record<string, any> = {};
    Object.entries(controls).forEach(([key, control]) => {
      initialProps[key] = control.default;
    });
    return initialProps;
  });

  const [generatedCode, setGeneratedCode] = useState('');

  // Update generated code when props change
  useEffect(() => {
    const code = codeTemplate(props);
    setGeneratedCode(code.trim());
  }, [props, codeTemplate]);

  const updateProp = (key: string, value: any) => {
    setProps((prev) => ({ ...prev, [key]: value }));
  };

  const renderControl = (key: string, control: ControlDefinition) => {
    const label = control.label || key.charAt(0).toUpperCase() + key.slice(1);

    switch (control.type) {
      case 'select':
        return (
          <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
            <label
              style={{
                fontSize: 'var(--typography-label-font-size)',
                fontWeight: '600',
                color: 'var(--color-text-primary)',
              }}
            >
              {label}
            </label>
            <select
              value={props[key]}
              onChange={(e) => updateProp(key, e.target.value)}
              style={{
                padding: 'var(--spacing-2) var(--spacing-3)',
                fontSize: 'var(--typography-label-font-size)',
                border: '1px solid var(--color-surface-border)',
                borderRadius: 'var(--border-radius-md)',
                backgroundColor: 'var(--color-surface-background)',
                color: 'var(--color-text-primary)',
                cursor: 'pointer',
                outline: 'none',
              }}
            >
              {control.options?.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        );

      case 'boolean':
        return (
          <div
            key={key}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-2)',
            }}
          >
            <input
              type="checkbox"
              id={`control-${key}`}
              checked={props[key]}
              onChange={(e) => updateProp(key, e.target.checked)}
              style={{
                width: '18px',
                height: '18px',
                cursor: 'pointer',
              }}
            />
            <label
              htmlFor={`control-${key}`}
              style={{
                fontSize: 'var(--typography-label-font-size)',
                fontWeight: '600',
                color: 'var(--color-text-primary)',
                cursor: 'pointer',
              }}
            >
              {label}
            </label>
          </div>
        );

      case 'text':
        return (
          <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2)' }}>
            <label
              style={{
                fontSize: 'var(--typography-label-font-size)',
                fontWeight: '600',
                color: 'var(--color-text-primary)',
              }}
            >
              {label}
            </label>
            <input
              type="text"
              value={props[key]}
              onChange={(e) => updateProp(key, e.target.value)}
              style={{
                padding: 'var(--spacing-2) var(--spacing-3)',
                fontSize: 'var(--typography-body-font-size)',
                border: '1px solid var(--color-surface-border)',
                borderRadius: 'var(--border-radius-md)',
                backgroundColor: 'var(--color-surface-background)',
                color: 'var(--color-text-primary)',
                outline: 'none',
              }}
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div style={{ marginBottom: 'var(--spacing-12)' }}>
      {/* Header */}
      <div style={{ marginBottom: 'var(--spacing-4)' }}>
        <h2 style={{ marginBottom: 'var(--spacing-2)' }}>{title}</h2>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--typography-body-font-size)' }}>
          {description}
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: 'var(--spacing-6)',
        }}
      >
        {/* Controls Panel */}
        <Card variant="outlined" padding="medium">
          <h3 style={{ marginBottom: 'var(--spacing-4)', fontSize: 'var(--typography-h3-font-size)' }}>
            Controls
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)' }}>
            {Object.entries(controls).map(([key, control]) => renderControl(key, control))}
          </div>
        </Card>

        {/* Preview and Code Panel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
          {/* Live Preview */}
          <Card variant="filled" padding="large">
            <h3 style={{ marginBottom: 'var(--spacing-4)', fontSize: 'var(--typography-h3-font-size)' }}>
              Preview
            </h3>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 'var(--spacing-8)',
                backgroundColor: 'var(--color-surface-background)',
                borderRadius: 'var(--border-radius-md)',
                border: '1px solid var(--color-surface-border)',
              }}
            >
              <Component {...props} />
            </div>
          </Card>

          {/* Generated Code */}
          <div>
            <h3 style={{ marginBottom: 'var(--spacing-4)', fontSize: 'var(--typography-h3-font-size)' }}>
              Code
            </h3>
            <CodeBlock language="tsx" code={generatedCode} />
          </div>
        </div>
      </div>
    </div>
  );
}
