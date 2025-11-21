'use client';

import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'medium',
  children,
  style,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles: React.CSSProperties = {
    border: 'none',
    borderRadius: 'var(--border-radius-md)',
    fontWeight: 'var(--typography-label-font-weight)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease',
    fontFamily: 'var(--font-family-base)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: disabled ? 0.5 : 1,
  };

  const sizeStyles: Record<string, React.CSSProperties> = {
    small: {
      padding: 'var(--spacing-2) var(--spacing-3)',
      fontSize: 'var(--typography-detail-font-size)',
      lineHeight: 'var(--typography-detail-line-height)',
    },
    medium: {
      padding: 'var(--spacing-3) var(--spacing-4)',
      fontSize: 'var(--typography-label-font-size)',
      lineHeight: 'var(--typography-label-line-height)',
    },
    large: {
      padding: 'var(--spacing-4) var(--spacing-6)',
      fontSize: 'var(--typography-body-font-size)',
      lineHeight: 'var(--typography-body-line-height)',
    },
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: 'var(--color-primary-500)',
      color: 'var(--color-text-inverse)',
    },
    secondary: {
      backgroundColor: 'transparent',
      color: 'var(--color-primary-500)',
      border: '2px solid var(--color-primary-500)',
    },
    text: {
      backgroundColor: 'transparent',
      color: 'var(--color-primary-500)',
      padding: 'var(--spacing-2) var(--spacing-3)',
    },
  };

  const hoverStyles: Record<string, string> = {
    primary: disabled ? '' : 'var(--color-primary-600)',
    secondary: disabled ? '' : 'var(--color-primary-50)',
    text: disabled ? '' : 'var(--color-primary-50)',
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && variant === 'primary') {
      e.currentTarget.style.backgroundColor = hoverStyles[variant];
    } else if (!disabled && (variant === 'secondary' || variant === 'text')) {
      e.currentTarget.style.backgroundColor = hoverStyles[variant];
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (variant === 'primary') {
      e.currentTarget.style.backgroundColor = 'var(--color-primary-500)';
    } else if (variant === 'secondary' || variant === 'text') {
      e.currentTarget.style.backgroundColor = 'transparent';
    }
  };

  return (
    <button
      style={{
        ...baseStyles,
        ...sizeStyles[size],
        ...variantStyles[variant],
        ...style,
      }}
      disabled={disabled}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </button>
  );
}
