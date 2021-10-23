import * as React from 'react';
import styled from 'styled-components';

import { Headline, SectionWrapper } from '@components/Global';
import BackgroundImage from '@images/hero/Coconaut_Skyline@1694x-100.jpg';

const Background = styled.section`
  width: 100vh;
  background-image: url(${BackgroundImage});
`;

export const Discover = () => {
  //TODO: implement contentful cms
  const data = {};
  return (
    <SectionWrapper cover id='discover'>
      <Headline centered>Discover the world of Coconaut</Headline>
      <Background>{data && <ul></ul>}</Background>
    </SectionWrapper>
  );
};
