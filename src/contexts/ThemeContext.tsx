'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { BrandName, tokens } from '@/tokens';
import { tokensToCSSVariables, applyCSSVariables } from '@/lib/theme-utils';

interface ThemeContextType {
  brand: BrandName;
  setBrand: (brand: BrandName) => void;
  availableBrands: BrandName[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultBrand?: BrandName;
}

export function ThemeProvider({ children, defaultBrand = 'carnow' }: ThemeProviderProps) {
  const [brand, setBrand] = useState<BrandName>(defaultBrand);
  const availableBrands: BrandName[] = ['carnow', 'toyota', 'ford'];

  useEffect(() => {
    // Apply CSS variables to the document root
    const brandTokens = tokens[brand];
    const cssVariables = tokensToCSSVariables(brandTokens);
    applyCSSVariables(document.documentElement, cssVariables);

    // Store the current brand in localStorage
    localStorage.setItem('brand', brand);
  }, [brand]);

  // Load brand from localStorage on mount
  useEffect(() => {
    const storedBrand = localStorage.getItem('brand') as BrandName | null;
    if (storedBrand && availableBrands.includes(storedBrand)) {
      setBrand(storedBrand);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ brand, setBrand, availableBrands }}>
      {children}
    </ThemeContext.Provider>
  );
}
