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
      <StyledVideo id='video' controls poster='/video/poster.jpg'>
        <source src='/video/video.mp4' />
      </StyledVideo>
    </SectionWrapper>
  );
};
