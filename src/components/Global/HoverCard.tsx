import * as React from 'react';
import styled from 'styled-components';
import { motion, useCycle } from 'framer-motion';

const HoverCardStyle = styled(motion.article)`
  position: relative;
  border-radius: 15px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  overflow: hidden;
  margin-bottom: 2rem;

  .gatsby-image-wrapper {
    height: 100%;
    z-index: -1;
    position: absolute;
  }
`;

const HoverCardContent = styled(motion.div)`
  min-height: 22rem;
  color: white;
  background: rgba(0, 0, 0, 0.7);

  > div {
    padding: 2rem;
  }
`;
const hoverCardContentVariants = {
  hidden: {
    opacity: 0,
  },
  shown: {
    opacity: 1,
  },
};
interface hoverCardProps {
  image: React.ReactNode;
  children: React.ReactNode;
}
export const HoverCard = ({ image, children }: hoverCardProps) => {
  const [isShown, toggleIsShown] = useCycle(false, true);

  return (
    <HoverCardStyle
      whileHover='shown'
      animate={isShown ? 'shown' : 'hidden'}
      onTap={() => toggleIsShown()}
    >
      {image}
      <HoverCardContent variants={hoverCardContentVariants}>
        <div>{children}</div>
      </HoverCardContent>
    </HoverCardStyle>
  );
};
