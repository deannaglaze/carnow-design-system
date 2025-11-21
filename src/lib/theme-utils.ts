import { DesignTokens } from '@/tokens/types';

/**
 * Converts design tokens to CSS custom properties
 */
export function tokensToCSSVariables(tokens: DesignTokens): Record<string, string> {
  const cssVars: Record<string, string> = {};

  // Primary colors
  Object.entries(tokens.colors.primary).forEach(([shade, value]) => {
    cssVars[`--color-primary-${shade}`] = value;
  });

  // Secondary colors
  Object.entries(tokens.colors.secondary).forEach(([shade, value]) => {
    cssVars[`--color-secondary-${shade}`] = value;
  });

  // Tertiary colors
  Object.entries(tokens.colors.tertiary).forEach(([shade, value]) => {
    cssVars[`--color-tertiary-${shade}`] = value;
  });

  // Success colors
  Object.entries(tokens.colors.success).forEach(([shade, value]) => {
    cssVars[`--color-success-${shade}`] = value;
  });

  // Warning colors
  Object.entries(tokens.colors.warning).forEach(([shade, value]) => {
    cssVars[`--color-warning-${shade}`] = value;
  });

  // Error colors
  Object.entries(tokens.colors.error).forEach(([shade, value]) => {
    cssVars[`--color-error-${shade}`] = value;
  });

  // Surface colors
  Object.entries(tokens.colors.surface).forEach(([key, value]) => {
    cssVars[`--color-surface-${key}`] = value;
  });

  // Text colors
  Object.entries(tokens.colors.text).forEach(([key, value]) => {
    cssVars[`--color-text-${key}`] = value;
  });

  // Typography
  cssVars['--font-family-base'] = tokens.typography.fontFamily.base;
  cssVars['--font-family-mono'] = tokens.typography.fontFamily.mono;

  Object.entries(tokens.typography.scale).forEach(([scale, styles]) => {
    cssVars[`--typography-${scale}-font-size`] = styles.fontSize;
    cssVars[`--typography-${scale}-line-height`] = styles.lineHeight;
    cssVars[`--typography-${scale}-font-weight`] = styles.fontWeight;
    cssVars[`--typography-${scale}-letter-spacing`] = styles.letterSpacing;
  });

  // Spacing
  Object.entries(tokens.spacing).forEach(([key, value]) => {
    cssVars[`--spacing-${key}`] = value;
  });

  // Border radius
  Object.entries(tokens.borderRadius).forEach(([key, value]) => {
    cssVars[`--border-radius-${key}`] = value;
  });

  return cssVars;
}

/**
 * Applies CSS variables to a DOM element
 */
export function applyCSSVariables(
  element: HTMLElement,
  variables: Record<string, string>
): void {
  Object.entries(variables).forEach(([key, value]) => {
    element.style.setProperty(key, value);
  });
}
