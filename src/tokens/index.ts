import { DesignTokens, BrandName, ThemeMode } from './types';
import carnowTokens from './carnow.json';
import toyotaTokens from './toyota.json';
import fordTokens from './ford.json';
import carnowDarkTokens from './carnow-dark.json';
import toyotaDarkTokens from './toyota-dark.json';
import fordDarkTokens from './ford-dark.json';

export const tokens: Record<BrandName, Record<ThemeMode, DesignTokens>> = {
  carnow: {
    light: carnowTokens as DesignTokens,
    dark: carnowDarkTokens as DesignTokens,
  },
  toyota: {
    light: toyotaTokens as DesignTokens,
    dark: toyotaDarkTokens as DesignTokens,
  },
  ford: {
    light: fordTokens as DesignTokens,
    dark: fordDarkTokens as DesignTokens,
  },
};

export {
  carnowTokens,
  toyotaTokens,
  fordTokens,
  carnowDarkTokens,
  toyotaDarkTokens,
  fordDarkTokens,
};
export * from './types';
