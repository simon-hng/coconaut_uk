import * as React from 'react';
import { WindowWidthProvider } from '@context/WindowWidth';
import { StoreProvider } from '@context/StoreContext';

export const wrapRootElement = ({ element }) => (
  <WindowWidthProvider>
    <StoreProvider>{element}</StoreProvider>
  </WindowWidthProvider>
);
