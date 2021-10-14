import * as React from 'react';
import { WindowWidthProvider } from '@context/WindowWidth';
import { StoreProvider } from '@context/StoreContext';
import '@styles/reset.css';
import '@styles/global.css';

export const wrapRootElement = ({ element }) => (
  <WindowWidthProvider>
    <StoreProvider>
      {element}
    </StoreProvider>
  </WindowWidthProvider>
);
