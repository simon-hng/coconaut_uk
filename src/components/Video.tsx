import * as React from 'react';
import styled from 'styled-components';
import { SectionWrapper } from './Global';

const StyledVideo = styled.video`
  object-fit: fill;
  width: 100%;
`;

export const Video = () => {
  return (
    <SectionWrapper cover>
      <StyledVideo poster='https://dummyimage.com/1900x1250/000/fff'>
        <source src='https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4' />
      </StyledVideo>
    </SectionWrapper>
  );
};
