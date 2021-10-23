import { SectionWrapper } from './SectionWrapper';
import * as React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SectionTwoColStyle = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 900px) {
    flex-direction: row;
  }
`;

const contentVariants = {
  shown: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const Content = styled(motion.div).attrs(() => ({
  variants: contentVariants,
}))`
  padding: 0 2rem;

  @media (min-width: 900px) {
    width: 50%;
  }
`;

const Left = styled(Content)`
  padding-bottom: 3rem;

  @media (min-width: 900px) {
    padding-bottom: 0;
  }
`;

const Right = styled(Content)``;

interface sectionTwoColProps {
  id?: string;
  left: React.ReactElement;
  right: React.ReactElement;
}

export const SectionTwoCol = (props: sectionTwoColProps) => {
  const [left, leftInView] = useInView();
  const [right, rightInView] = useInView();
  return (
    <SectionWrapper id={props.id}>
      <SectionTwoColStyle>
        <Left ref={left} animate={leftInView ? 'shown' : 'hidden'}>
          {props.left}
        </Left>
        <Right ref={right} animate={rightInView ? 'shown' : 'hidden'}>
          {props.right}
        </Right>
      </SectionTwoColStyle>
    </SectionWrapper>
  );
};
