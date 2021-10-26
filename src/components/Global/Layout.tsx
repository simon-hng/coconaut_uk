import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import '@styles/reset.css';
import '@styles/global.css';
import 'swiper/css';
import { SEO, seoProps } from '@components/SEO';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';

const mainTheme = {
  background: '#fff',
  foreground: '#000',
  grey: '#747474',
  accentLight: '#53C1A6',
  accent: '#39B54A',
  accentDark: '#195200',
  maxWidth: '1400px',
};

const StyledChildren = styled.div`
  min-height: 100vh;
`;

interface layoutProps extends seoProps {
  children: React.ReactNode;
}

export const Layout = ({
  children,
  title,
  description,
  image,
}: layoutProps) => (
  <ThemeProvider theme={mainTheme}>
    <SEO title={title} description={description} image={image} />
    <Header />
    <StyledChildren>{children}</StyledChildren>
    <Footer />
  </ThemeProvider>
);
