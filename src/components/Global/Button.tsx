import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import BackgroundImage from '@images/ButtonBackground.svg';
import { motion } from 'framer-motion';

interface ButtonProps {
  onClick?: () => {};
  to?: string;
  children: React.ReactNode;
}

const Button = styled(motion.button)`
  margin: 5rem 0;
  padding: 1.4rem 2rem;
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
  <Button
    onClick={props.onClick}
    whileHover={{
      scale: 1.1,
    }}
    transition={{ duration: 0.5 }}
  >
    {props.children}
  </Button>
);

export default (props: ButtonProps) => {
  return props.to ? (
    <Link to={props.to}>
      <Content {...props} />
    </Link>
  ) : (
    <Content {...props} />
  );
};
