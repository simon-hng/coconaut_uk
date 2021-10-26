import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import * as React from 'react';
import styled from 'styled-components';

const CardStyle = styled.article`
  border-radius: 10px;
  background: ${(props) => props.theme.background};
`;

const Text = styled.div`
  padding: 1rem;
`;

interface cardProps {
  image: IGatsbyImageData;
  alt: string;
  children: React.ReactNode;
}

export const Card = (props: cardProps) => (
  <CardStyle>
    <GatsbyImage image={props.image} alt={props.alt} />
    <Text>{props.children}</Text>
  </CardStyle>
);
