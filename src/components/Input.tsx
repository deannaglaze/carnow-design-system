'use client';

import React, { forwardRef } from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, fullWidth = false, style, disabled, ...props }, ref) => {
    const hasError = Boolean(error);

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-2)',
          width: fullWidth ? '100%' : 'auto',
          ...style,
        }}
      >
        {label && (
          <label
            style={{
              fontSize: 'var(--typography-label-font-size)',
              fontWeight: 'var(--typography-label-font-weight)',
              color: hasError ? 'var(--color-error-500)' : 'var(--color-text-primary)',
            }}
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          disabled={disabled}
          style={{
            padding: 'var(--spacing-3) var(--spacing-4)',
            fontSize: 'var(--typography-body-font-size)',
            lineHeight: 'var(--typography-body-line-height)',
            fontFamily: 'var(--font-family-base)',
            color: 'var(--color-text-primary)',
            backgroundColor: disabled ? 'var(--color-surface-paper)' : 'var(--color-surface-background)',
            border: `1px solid ${
              hasError ? 'var(--color-error-500)' : 'var(--color-surface-border)'
            }`,
            borderRadius: 'var(--border-radius-md)',
            outline: 'none',
            transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
            cursor: disabled ? 'not-allowed' : 'text',
            opacity: disabled ? 0.6 : 1,
          }}
          onFocus={(e) => {
            if (!hasError && !disabled) {
              e.target.style.borderColor = 'var(--color-primary-500)';
              e.target.style.boxShadow = '0 0 0 3px var(--color-primary-100)';
            }
          }}
          onBlur={(e) => {
            if (!hasError) {
              e.target.style.borderColor = 'var(--color-surface-border)';
              e.target.style.boxShadow = 'none';
            }
          }}
          {...props}
        />
        {(error || helperText) && (
          <span
            style={{
              fontSize: 'var(--typography-detail-font-size)',
              color: hasError ? 'var(--color-error-500)' : 'var(--color-text-secondary)',
            }}
          >
            {error || helperText}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
