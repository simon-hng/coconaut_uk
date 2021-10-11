import * as React from "react";
import { ThemeProvider } from "styled-components";

import Hero from "@components/Hero";
import Nutrition from "@components/Nutrition";
import ShopTeaser from "@components/ShopTeaser";
import Events from "@components/Events";
import OurMission from "@components/OurMission";

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
        <OurMission />
      </ThemeProvider>
    </main>
  );
};

export default Index;
