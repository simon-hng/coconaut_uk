import * as React from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { SectionWrapper } from './Global';

const StyledVideo = styled.video`
  object-fit: fill;
  width: 100%;
`;

export const Video = () => {
  const videoRef = React.useRef(null);
  const { ref, inView } = useInView();

  React.useEffect(() => {
    inView ? videoRef.current.play() : videoRef.current.pause();
  }, [inView]);

  return (
    <SectionWrapper cover>
      <div ref={ref}>
        <StyledVideo ref={videoRef} id='video' playsInline muted controls>
          <source src='/video/video.mp4#t=0.001' type='video/mp4' />
        </StyledVideo>
      </div>
    </SectionWrapper>
  );
};
