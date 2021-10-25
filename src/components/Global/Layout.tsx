import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import '@styles/reset.css';
import '@styles/global.css';
import { SEO, seoProps } from '@components/SEO';

const mainTheme = {
  background: '#fff',
  foreground: '#000',
  grey: '#747474',
  accentLight: '#53C1A6',
  accent: '#39B54A',
  accentDark: '#195200',
};

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
    {children}
  </ThemeProvider>
);
