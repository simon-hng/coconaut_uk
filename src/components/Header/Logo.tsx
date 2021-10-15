import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

interface logoProps {
  windowWidth: number;
}

export const Logo = ({ windowWidth }: logoProps) => {
  const InnerLogo = () =>
    windowWidth < 900 ? (
      <StaticImage
        src='../../images/logoMobile.svg'
        width={120}
        layout='fixed'
      />
    ) : (
      <StaticImage
        src='../../images/logoDesktop.svg'
        width={200}
        layout='fixed'
      />
    );

  return (
    <Link to='/'>
      <InnerLogo />
    </Link>
  );
};
