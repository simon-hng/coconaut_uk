import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

interface LogoProps {
  windowWidth: number;
}

export const Logo = (props: LogoProps) => {
  return props.windowWidth < 900 ? (
    <StaticImage src='../../images/logoMobile.svg' width={120} layout='fixed' />
  ) : (
    <StaticImage
      src='../../images/logoDesktop.svg'
      width={200}
      layout='fixed'
    />
  );
};
