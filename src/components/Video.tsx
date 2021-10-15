import * as React from 'react';
import styled from 'styled-components';
import { SectionWrapper } from './Global';

const StyledVideo = styled.video`
  object-fit: fill;
  width: 100vw;
`;

export const Video = () => {
  return (
    <SectionWrapper cover>
      <StyledVideo poster='https://topparks.com.au/files/24234_dji_0166_003.jpg'>
        <source src='https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4' />
      </StyledVideo>
    </SectionWrapper>
  );
};
