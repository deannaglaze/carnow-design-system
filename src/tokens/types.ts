export interface ColorShades {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

export interface StateColors {
  50: string;
  100: string;
  500: string;
  700: string;
  900: string;
}

export interface SurfaceColors {
  background: string;
  paper: string;
  elevated: string;
  border: string;
}

export interface TextColors {
  primary: string;
  secondary: string;
  disabled: string;
  inverse: string;
}

export interface Colors {
  primary: ColorShades;
  secondary: ColorShades;
  tertiary: ColorShades;
  success: StateColors;
  warning: StateColors;
  error: StateColors;
  surface: SurfaceColors;
  text: TextColors;
}

export interface TypographyStyle {
  fontSize: string;
  lineHeight: string;
  fontWeight: string;
  letterSpacing: string;
}

export interface TypographyScale {
  h1: TypographyStyle;
  h2: TypographyStyle;
  h3: TypographyStyle;
  body: TypographyStyle;
  label: TypographyStyle;
  detail: TypographyStyle;
}

export interface Typography {
  fontFamily: {
    base: string;
    mono: string;
  };
  scale: TypographyScale;
}

export interface Spacing {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  8: string;
  10: string;
  12: string;
  16: string;
  20: string;
  24: string;
}

export interface BorderRadius {
  none: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  full: string;
}

export interface DesignTokens {
  name: string;
  colors: Colors;
  typography: Typography;
  spacing: Spacing;
  borderRadius: BorderRadius;
}

export type BrandName = 'carnow' | 'toyota' | 'ford';
