'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { BrandName, ThemeMode, tokens } from '@/tokens';
import { tokensToCSSVariables, applyCSSVariables } from '@/lib/theme-utils';

interface ThemeContextType {
  brand: BrandName;
  setBrand: (brand: BrandName) => void;
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
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
  defaultMode?: ThemeMode;
}

export function ThemeProvider({
  children,
  defaultBrand = 'carnow',
  defaultMode = 'light',
}: ThemeProviderProps) {
  const [brand, setBrand] = useState<BrandName>(defaultBrand);
  const [mode, setMode] = useState<ThemeMode>(defaultMode);
  const availableBrands: BrandName[] = ['carnow', 'toyota', 'ford'];

  useEffect(() => {
    // Apply CSS variables to the document root
    const themeTokens = tokens[brand][mode];
    const cssVariables = tokensToCSSVariables(themeTokens);
    applyCSSVariables(document.documentElement, cssVariables);

    // Store the current brand and mode in localStorage
    localStorage.setItem('brand', brand);
    localStorage.setItem('mode', mode);
  }, [brand, mode]);

  // Load brand and mode from localStorage on mount
  useEffect(() => {
    const storedBrand = localStorage.getItem('brand') as BrandName | null;
    const storedMode = localStorage.getItem('mode') as ThemeMode | null;

    if (storedBrand && availableBrands.includes(storedBrand)) {
      setBrand(storedBrand);
    }

    if (storedMode && (storedMode === 'light' || storedMode === 'dark')) {
      setMode(storedMode);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ brand, setBrand, mode, setMode, availableBrands }}>
      {children}
    </ThemeContext.Provider>
  );
}
