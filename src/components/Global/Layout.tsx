import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import '@styles/reset.css';
import '@styles/global.css';

const mainTheme = {
  background: '#fff',
  foreground: '#000',
  accentLight: '#53C1A6',
  accent: '#39B54A',
  accentDark: '#195200',
};

interface layoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children: element }: layoutProps) => (
  <ThemeProvider theme={mainTheme}>{element}</ThemeProvider>
);
