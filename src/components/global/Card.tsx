import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import * as React from 'react';
import styled from 'styled-components';

const Card = styled.article`
  //TODO: appropiate styling when data is available
`;

interface CardProps {
  image: IGatsbyImageData;
  alt: string;
  children: React.ReactNode;
}

export default (props: CardProps): JSX.Element => (
  <Card>
    <GatsbyImage image={props.image} alt={props.alt} />
    {props.children}
  </Card>
);
