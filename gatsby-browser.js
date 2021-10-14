import { WindowWidthProvider } from '@context/WindowWidth';
import '@styles/global.css';
import '@styles/reset.css';
import * as React from 'react';

export const wrapRootElement = ({ element }) => (
  <WindowWidthProvider>{element}</WindowWidthProvider>
);
