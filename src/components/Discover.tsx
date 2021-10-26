import * as React from 'react';
import styled from 'styled-components';

import { Card, Headline, SectionWrapper } from '@components/Global';
import BackgroundImage from '@images/hero/Coconaut_Skyline@1694x-100.jpg';
import { graphql, useStaticQuery } from 'gatsby';

const Background = styled.section`
  width: 100vh;
  background-image: url(${BackgroundImage});
`;

const Events = styled.ul`
  width: 100%;
  display: flex;
  overflow-x: scroll;
`;

export const Discover = () => {
  const data = useStaticQuery(
    graphql`
      {
        allContentfulEvent {
          edges {
            node {
              id
              thumbnail {
                gatsbyImageData
                title
              }
              description {
                description
              }
            }
          }
        }
      }
    `
  );

  const events = data.allContentfulEvent.edges;

  return (
    <SectionWrapper cover id='discover'>
      <Headline centered>Discover the world of Coconaut</Headline>
      <Background>
        {data && (
          <Events>
            {events.map(({ node: event }) => (
              <li>
                <Card
                  image={event.thumbnail.gatsbyImageData}
                  alt={event.thumbnail.title}
                >
                  {event.description.description}
                </Card>
              </li>
            ))}
          </Events>
        )}
      </Background>
    </SectionWrapper>
  );
};
