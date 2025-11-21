'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface ComponentItem {
  name: string;
  href: string;
  available: boolean;
}

const components: ComponentItem[] = [
  { name: 'Button', href: '/components/button', available: true },
  { name: 'Card', href: '/components/card', available: true },
  { name: 'Input', href: '/components/input', available: true },
  { name: 'Pill', href: '/components/pill', available: true },
  { name: 'Toggle', href: '/components/toggle', available: true },
];

export function ComponentSidebar() {
  const pathname = usePathname();

  return (
    <aside
      style={{
        width: '240px',
        flexShrink: 0,
        position: 'sticky',
        top: '73px', // Height of header
        height: 'calc(100vh - 73px)',
        overflowY: 'auto',
        borderRight: '1px solid var(--color-surface-border)',
        backgroundColor: 'var(--color-surface-background)',
      }}
    >
      <nav style={{ padding: 'var(--spacing-6) 0' }}>
        <div
          style={{
            padding: '0 var(--spacing-6)',
            marginBottom: 'var(--spacing-4)',
          }}
        >
          <h3
            style={{
              fontSize: 'var(--typography-detail-font-size)',
              fontWeight: '700',
              color: 'var(--color-text-secondary)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              margin: 0,
            }}
          >
            Components
          </h3>
        </div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {components.map((component) => {
            const isActive = pathname === component.href;

            return (
              <li key={component.href} style={{ margin: 0 }}>
                {component.available ? (
                  <Link
                    href={component.href}
                    style={{
                      display: 'block',
                      padding: 'var(--spacing-3) var(--spacing-6)',
                      fontSize: 'var(--typography-body-font-size)',
                      color: isActive
                        ? 'var(--color-primary-500)'
                        : 'var(--color-text-primary)',
                      fontWeight: isActive ? '600' : '400',
                      backgroundColor: isActive
                        ? 'var(--color-primary-50)'
                        : 'transparent',
                      borderLeft: isActive
                        ? '3px solid var(--color-primary-500)'
                        : '3px solid transparent',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor =
                          'var(--color-surface-paper)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    {component.name}
                  </Link>
                ) : (
                  <div
                    style={{
                      display: 'block',
                      padding: 'var(--spacing-3) var(--spacing-6)',
                      fontSize: 'var(--typography-body-font-size)',
                      color: 'var(--color-text-disabled)',
                      borderLeft: '3px solid transparent',
                      cursor: 'not-allowed',
                    }}
                  >
                    {component.name}
                    <span
                      style={{
                        marginLeft: 'var(--spacing-2)',
                        fontSize: 'var(--typography-detail-font-size)',
                        fontStyle: 'italic',
                      }}
                    >
                      (coming soon)
                    </span>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
