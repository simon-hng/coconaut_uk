import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import BackgroundImage from "@images/ButtonBackground.svg";

interface ButtonProps {
  to: string;
  children: React.ReactNode;
}

const Button = styled.div`
  padding: 3rem 0;
  text-align: center;

  @media (min-width: 900px) {
    text-align: left;
  }
`;

const StyledLink = styled(Link)`
  padding: 2em;
  background-image: url(${BackgroundImage});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.4rem;
  color: #fff;

  :hover {
    transform: scale(2);
  }
`;

export default (props: ButtonProps) => {
  return (
    <Button>
      <StyledLink to={props.to}>{props.children}</StyledLink>
    </Button>
  );
};
