import * as React from "react";
import { WindowWidthProvider } from "@context/WindowWidth";
import "@styles/reset.css";
import "@styles/global.css";

export const wrapRootElement = ({ element }) => (
  <WindowWidthProvider>{element}</WindowWidthProvider>
);
