import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import * as React from 'react';
import { motion } from 'framer-motion';
import { propTypes } from 'gatsby-plugin-image/dist/src/components/gatsby-image.server';

interface sectionWrapperStyleProps {
  cover?: boolean;
  padded?: boolean;
}

export const SectionWrapperStyle = styled(motion.div).attrs(
  (props: sectionWrapperStyleProps) => ({
    cover: props.cover,
    padded: props.padded,
  })
)`
  margin: auto;
  padding: ${(props) => (props.padded ? '10rem 2rem' : '3rem 0')};
  ${(props) => !props.cover && `max-width:${props.theme.maxWidth}`};
`;

const sectionWrapperVariants = {
  shown: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  hidden: {
    opacity: 0,
  },
};

interface sectionWrapperProps {
  children: React.ReactNode;
  padded?: boolean;
  cover?: boolean;
  id?: string;
}

export const SectionWrapper = (props: sectionWrapperProps) => {
  const { ref, inView } = useInView();
  return (
    <SectionWrapperStyle
      ref={ref}
      variants={sectionWrapperVariants}
      animate={inView ? 'shown' : 'hidden'}
      {...props}
    >
      {props.children}
    </SectionWrapperStyle>
  );
};
