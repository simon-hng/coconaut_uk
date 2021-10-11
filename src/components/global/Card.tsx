import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import styled from "styled-components";

const Main = styled.article`
  //TODO: appropiate styling when data is available
`;

interface CardProps {
  src: "string";
  children: React.ReactNode;
}

const Card = (props: CardProps): JSX.Element => (
  <Main>
    <StaticImage src={props.src} />
    {props.children}
  </Main>
);

export default Card;
