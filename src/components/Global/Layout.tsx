import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import '@styles/reset.css';
import '@styles/global.css';
import 'swiper/css';
import { SEO, seoProps } from '@components/SEO';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import CookieBot from 'react-cookiebot/lib/CookieBot';
import { useScript } from '@hooks/useScript';

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

const domainGroupId = '8fa35052-f00c-4eba-92df-627d4fe66ba2';

interface layoutProps extends seoProps {
  children: React.ReactNode;
}

export const Layout = ({ children, title, description }: layoutProps) => {
  useScript('https://js.convertflow.co/production/websites/33695.js');

  return (
    <ThemeProvider theme={mainTheme}>
      <CookieBot domainGroupId={domainGroupId} />
      <SEO title={title} description={description} />
      <Header />
      <StyledChildren>{children}</StyledChildren>
      <Footer />
    </ThemeProvider>
  );
};
