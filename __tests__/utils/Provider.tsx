import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../src/theme';

type ProviderProps = {
  children: React.ReactNode;
};

export function AppProvider({ children }: ProviderProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
