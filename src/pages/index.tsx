import * as React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import { ThemeProvider } from "styled-components";

import '../styles/reset.css';
import '../styles/global.css';

const mainTheme = {
  background: "#fff",
  foreground: "#000",
  accent: "#39B54A",
};

const Index = () => {
  return (
    <main>
      <ThemeProvider theme={mainTheme}>
        <Hero />
        <About />
      </ThemeProvider>
    </main>
  );
};

export default Index;
