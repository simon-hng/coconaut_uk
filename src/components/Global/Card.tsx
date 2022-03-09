import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import * as React from 'react';
import { Typography } from '@components/Global';
import styled from 'styled-components';

const CardStyle = styled.article`
  border-radius: 15px;
  background: ${(props) => props.theme.background};
  min-height: 32rem;
  margin: 2rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  overflow: hidden;
`;

const Text = styled.div`
  padding: 1rem;

  p, a {
    font-family: 'montserrat';
    font-size: 1rem;
    line-height: 1.2rem;
  }
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
