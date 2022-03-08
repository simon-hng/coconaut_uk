import * as React from 'react';
import styled from 'styled-components';

import BackgroundImage from '@images/hero/skyline.svg';
import { Clouds } from './Clouds';
import { Cans } from './Cans';

const HeroStyle = styled.div`
  height: 120vh;
  background-size: 2000px;
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-position-y: bottom;
  background-position-x: -20px;

  @media (min-width: 900px) {
    background-size: 100%;
    background-position-x: 0;
  }
`;

const Caption = styled.h1`
  padding-top: 19vh;
  text-align: center;
  font-family: 'Hermes';
  color: ${(props) => props.theme.accentLight};
`;

export const Hero = () => (
  <HeroStyle id='hero'>
    <Caption>GoHigher!</Caption>
    <Clouds />
    <Cans />
  </HeroStyle>
);
