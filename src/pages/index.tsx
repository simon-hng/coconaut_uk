import * as React from "react";
import { Reset, Styles } from "../components/global/Styles";
import Hero from "../components/Hero";
import About from "../components/About";
import { ThemeProvider } from "styled-components";

const mainTheme = {
  background: "#fff",
  foreground: "#000",
  accent: "#39B54A",
};

const Index = () => {
  return (
    <main>
      <Reset />
      <ThemeProvider theme={mainTheme}>
        <Styles />
        <Hero />
        <About />
      </ThemeProvider>
    </main>
  );
};

export default Index;
