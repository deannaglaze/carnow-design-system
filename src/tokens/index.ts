import { DesignTokens, BrandName } from './types';
import carnowTokens from './carnow.json';
import toyotaTokens from './toyota.json';
import fordTokens from './ford.json';

export const tokens: Record<BrandName, DesignTokens> = {
  carnow: carnowTokens as DesignTokens,
  toyota: toyotaTokens as DesignTokens,
  ford: fordTokens as DesignTokens,
};

export { carnowTokens, toyotaTokens, fordTokens };
export * from './types';
