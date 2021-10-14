import BackgroundImage from '@images/ButtonBackground.svg';
import * as React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import styled from 'styled-components';

interface ButtonProps {
  onClick?: () => void;
  to?: string;
  children: React.ReactNode;
  margin?: string;
  padding?: string;
}

const ButtonStyle = styled(motion.button).attrs(
  (props: { margin: string; padding: string }) => ({
    margin: props.margin || '0',
    padding: props.padding || '1.4rem 2rem',
  })
)`
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

const Content = (props: ButtonProps) => (
  <ButtonStyle
    whileHover={{
      scale: 1.1,
    }}
    transition={{ duration: 0.5 }}
    {...props}
  >
    {props.children}
  </ButtonStyle>
);

export const Button = (props: ButtonProps) => {
  return props.to ? (
    <Link to={props.to}>
      <Content {...props} />
    </Link>
  ) : (
    <Content {...props} />
  );
};
