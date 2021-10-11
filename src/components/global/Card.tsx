import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import * as React from "react";
import styled from "styled-components";

const Main = styled.article`
  //TODO: appropiate styling when data is available
`;

interface CardProps {
  image: IGatsbyImageData;
  alt: string;
  children: React.ReactNode;
}

const Card = (props: CardProps): JSX.Element => (
  <Main>
    <GatsbyImage image={props.image} alt={props.alt} />
    {props.children}
  </Main>
);

export default Card;
