'use client';

import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  variant?: 'elevated' | 'outlined' | 'filled';
  padding?: 'none' | 'small' | 'medium' | 'large';
  onClick?: () => void;
  style?: React.CSSProperties;
}

export function Card({
  children,
  variant = 'elevated',
  padding = 'medium',
  onClick,
  style,
}: CardProps) {
  const paddingStyles = {
    none: '0',
    small: 'var(--spacing-4)',
    medium: 'var(--spacing-6)',
    large: 'var(--spacing-8)',
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    elevated: {
      backgroundColor: 'var(--color-surface-elevated)',
      border: 'none',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
    },
    outlined: {
      backgroundColor: 'var(--color-surface-background)',
      border: '1px solid var(--color-surface-border)',
      boxShadow: 'none',
    },
    filled: {
      backgroundColor: 'var(--color-surface-paper)',
      border: 'none',
      boxShadow: 'none',
    },
  };

  const hoverStyle: React.CSSProperties = onClick
    ? {
        cursor: 'pointer',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      }
    : {};

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (onClick) {
      e.currentTarget.style.transform = 'translateY(-2px)';
      if (variant === 'elevated') {
        e.currentTarget.style.boxShadow =
          '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)';
      }
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (onClick) {
      e.currentTarget.style.transform = 'translateY(0)';
      if (variant === 'elevated') {
        e.currentTarget.style.boxShadow =
          '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)';
      }
    }
  };

  return (
    <div
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        borderRadius: 'var(--border-radius-lg)',
        padding: paddingStyles[padding],
        ...variantStyles[variant],
        ...hoverStyle,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
