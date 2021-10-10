import * as React from "react";
import { ThemeProvider } from "styled-components";

import Hero from "@components/Hero/Hero";
import Nutrition from "@components/Nutrition/Nutrition";
import ShopTeaser from "@components/ShopTeaser";
import Events from "@components/Events";

import "../styles/reset.css";
import "../styles/global.css";

const mainTheme = {
  background: "#fff",
  foreground: "#000",
  accentLight: "#53C1A6",
  accent: "#39B54A",
  accentDark: "#195200",
};

const Index = () => {
  return (
    <main>
      <ThemeProvider theme={mainTheme}>
        <Hero />
        <Nutrition />
        <ShopTeaser />
        <Events />
      </ThemeProvider>
    </main>
  );
};

export default Index;
