import * as React from 'react';
import styled from 'styled-components';
import { motion, useCycle } from 'framer-motion';

const HoverCardStyle = styled.article`
  position: relative;
  border-radius: 15px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  overflow: hidden;
  margin-bottom: 2rem;
`;
const HoverCardContent = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: white;
  background: rgba(0, 0, 0, 0.6);

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
    <HoverCardStyle>
      {image}
      <HoverCardContent
        variants={hoverCardContentVariants}
        whileHover='shown'
        animate={isShown ? 'shown' : 'hidden'}
        onTap={() => toggleIsShown()}
      >
        <div>{children}</div>
      </HoverCardContent>
    </HoverCardStyle>
  );
};
