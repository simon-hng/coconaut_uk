import * as React from 'react';
import styled from 'styled-components';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import BackgroundImage from '@images/ButtonBackground.svg';
import { motion } from 'framer-motion';

interface buttonProps {
  onClick?: () => void;
  to?: string;
  children: React.ReactNode;
  margin?: string;
  padding?: string;
}

interface buttonStyleProps {
  margin: string;
  padding: string;
}

const ButtonStyle = styled(motion.button).attrs((props: buttonStyleProps) => {
  return {
    margin: props.margin || '0',
    padding: props.padding || '1.4rem 2rem',
  };
})`
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  background: none;
  background-image: url(${BackgroundImage});
  background-size: 100% 100%;
  width: fit-content;
  border: none;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.4rem;
  color: #fff;
  cursor: pointer;
`;

const buttonVariants = {
  hover: {
    scale: 1.2,
    transition: {
      duration: 0.2,
    },
  },
  tap: {
    rotate: [0, -20, 20, 0],
    transition: {
      duration: 0.3,
    },
  },
};

const Content = (props: buttonProps) => (
  <ButtonStyle
    variants={buttonVariants}
    whileHover='hover'
    whileTap='tap'
    {...props}
  >
    {props.children}
  </ButtonStyle>
);

export const Button = (props: buttonProps) => {
  return props.to ? (
    <AnchorLink to={props.to}>
      <Content {...props} />
    </AnchorLink>
  ) : (
    <Content {...props} />
  );
};
