import { Fact } from './Fact';
import {
  SectionTwoCol,
  Headline,
  Button,
  Subheadline,
  Typography,
  Centered,
} from '@components/Global';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import styled from 'styled-components';

const nutritionalFacts = [
  { name: 'Energy', value: 95, unit: 'kJ' },
  { name: 'Carbohydrates', value: 5.5, unit: 'kJ' },
  { name: 'Fats', value: 0, unit: 'g' },
  { name: 'Protein', value: 0, unit: 'g' },
  { name: 'Salt', value: 50, unit: 'mg' },
  { name: 'Calcium', value: 1.8, unit: 'kJ' },
  { name: 'Potas', value: 124, unit: 'kJ' },
  { name: 'Vitamin C', value: 56, unit: 'mg' },
];

const FactsList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Nutrition = () => (
  <SectionTwoCol
    id='nutrition'
    left={
      <>
        <Headline sub='young coconuts' gutterBottom>
          100 percent
        </Headline>
        <Typography>
          Coconaut is an energising drink with a rare combination. It refreshes,
          activates and regenerates. It contains 100% pure young coconut water
          from premium young vietnamese coconuts. No additives. No extra sugar,
          just the full load of coconut power. Want to know more?​
        </Typography>

        <Button margin='5rem 0 0 0' to='/#shop'>
          Shop now!
        </Button>
      </>
    }
    right={
      <>
        <Centered onMobile>
          <StaticImage
            src='../../images/Coconut_and_can_01.png'
            alt='coconut and can'
          />
        </Centered>

        <Subheadline gutterBottom>Whats in it?</Subheadline>

        <FactsList>
          {nutritionalFacts.map((fact, i) => (
            <Fact key={i} delay={i * 0.4} {...fact} />
          ))}
        </FactsList>
      </>
    }
  />
);
