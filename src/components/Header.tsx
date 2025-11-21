'use client';

import React from 'react';
import Link from 'next/link';
import { ThemeSwitcher } from './ThemeSwitcher';
import { ModeToggle } from './ModeToggle';

export function Header() {
  return (
    <header
      style={{
        borderBottom: '1px solid var(--color-surface-border)',
        backgroundColor: 'var(--color-surface-elevated)',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: 'var(--spacing-4) var(--spacing-6)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-8)' }}>
          <Link href="/">
            <h2 style={{ margin: 0 }}>CarNow Design System</h2>
          </Link>
          <nav style={{ display: 'flex', gap: 'var(--spacing-6)' }}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <Link
                href="/foundations/colors"
                style={{
                  fontSize: 'var(--typography-body-font-size)',
                  color: 'var(--color-text-secondary)',
                  fontWeight: '500',
                }}
              >
                Foundations
              </Link>
            </div>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <Link
                href="/components/button"
                style={{
                  fontSize: 'var(--typography-body-font-size)',
                  color: 'var(--color-text-secondary)',
                  fontWeight: '500',
                }}
              >
                Components
              </Link>
            </div>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <Link
                href="/editor"
                style={{
                  fontSize: 'var(--typography-body-font-size)',
                  color: 'var(--color-text-secondary)',
                  fontWeight: '500',
                }}
              >
                Token Editor
              </Link>
            </div>
          </nav>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-4)' }}>
          <ModeToggle />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
