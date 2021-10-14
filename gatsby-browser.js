import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { WindowWidthProvider } from '@context/WindowWidth';
import { StoreProvider } from '@context/StoreContext';
import '@styles/reset.css';
import '@styles/global.css';

const mainTheme = {
  background: '#fff',
  foreground: '#000',
  accentLight: '#53C1A6',
  accent: '#39B54A',
  accentDark: '#195200',
};

export const wrapRootElement = ({ element }) => (
  <WindowWidthProvider>
    <StoreProvider>
      <ThemeProvider theme={mainTheme}>
        {element}
      </ThemeProvider>
    </StoreProvider>
  </WindowWidthProvider>
);
