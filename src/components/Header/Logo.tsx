import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
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
    <AnchorLink to='/#hero'>
      <LogoMobile>
        <img src='/logo/logoMobile.svg' width={120} alt='Go to start' />
      </LogoMobile>
      <LogoDesktop>
        <img src='/logo/logoDesktop.svg' width={200} alt='Go to start' />
      </LogoDesktop>
    </AnchorLink>
  );
};
