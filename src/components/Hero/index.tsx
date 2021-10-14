import BackgroundImage from '@images/hero/Coconaut_Skyline@1694x-100.jpg';
import { Cans } from './Cans';
import { Clouds } from './Clouds';
import * as React from 'react';
import styled from 'styled-components';

const HeroStyle = styled.div`
  height: 90vh;
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
  margin-top: 15vh;
  text-align: center;
  font-family: 'HermesBold';
  color: ${(props) => props.theme.accentLight};
`;

export const Hero = () => (
  <HeroStyle>
    <Caption>GoHigher!</Caption>
    <Clouds />
    <Cans />
  </HeroStyle>
);
