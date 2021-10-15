import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import * as React from 'react';
import styled from 'styled-components';

const CardStyle = styled.article`
  //TODO: appropiate styling when data is available
`;

interface cardProps {
  image: IGatsbyImageData;
  alt: string;
  children: React.ReactNode;
}

export const Card = (props: cardProps) => (
  <CardStyle>
    <GatsbyImage image={props.image} alt={props.alt} />
    {props.children}
  </CardStyle>
);
