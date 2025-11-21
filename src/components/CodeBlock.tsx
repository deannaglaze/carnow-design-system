'use client';

import React, { useState } from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = 'tsx' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      style={{
        position: 'relative',
        backgroundColor: 'var(--color-surface-paper)',
        border: '1px solid var(--color-surface-border)',
        borderRadius: 'var(--border-radius-md)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 'var(--spacing-2) var(--spacing-4)',
          borderBottom: '1px solid var(--color-surface-border)',
          backgroundColor: 'var(--color-surface-background)',
        }}
      >
        <span
          style={{
            fontSize: 'var(--typography-detail-font-size)',
            color: 'var(--color-text-secondary)',
            fontFamily: 'var(--font-family-mono)',
          }}
        >
          {language}
        </span>
        <button
          onClick={handleCopy}
          style={{
            padding: 'var(--spacing-1) var(--spacing-3)',
            fontSize: 'var(--typography-detail-font-size)',
            backgroundColor: copied ? 'var(--color-success-500)' : 'transparent',
            color: copied ? 'var(--color-text-inverse)' : 'var(--color-text-secondary)',
            border: copied ? 'none' : '1px solid var(--color-surface-border)',
            borderRadius: 'var(--border-radius-sm)',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre
        style={{
          padding: 'var(--spacing-4)',
          margin: 0,
          overflow: 'auto',
          fontFamily: 'var(--font-family-mono)',
          fontSize: 'var(--typography-detail-font-size)',
          lineHeight: '1.6',
        }}
      >
        <code style={{ color: 'var(--color-text-primary)' }}>{code}</code>
      </pre>
    </div>
  );
}
