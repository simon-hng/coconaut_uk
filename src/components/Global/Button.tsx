import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import BackgroundImage from '@images/ButtonBackground.svg';

interface ButtonProps {
  onClick?: () => {};
  to?: string;
  children: React.ReactNode;
}

const Button = styled.button`
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

export default (props: ButtonProps) => {
  return (
    <Link to={props.to}>
      <Button onClick={props.onClick}>{props.children}</Button>
    </Link>
  );
};
