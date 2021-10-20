import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import styled from 'styled-components';

const LogoMobile = styled.div`
  @media (min-width: 900px) {
    display: none;
  }
`;

const LogoDesktop = styled.div`
  @media (max-width: 900px) {
    display: none;
  }
`;

export const Logo = () => {
  return (
    <Link to='/'>
      <LogoMobile>
        <StaticImage
          src='../../images/logoMobile.svg'
          width={120}
          layout='fixed'
          alt='Go to start'
        />
      </LogoMobile>
      <LogoDesktop>
        <StaticImage
          src='../../images/logoDesktop.svg'
          width={200}
          layout='fixed'
          alt='Go to start'
        />
      </LogoDesktop>
    </Link>
  );
};
