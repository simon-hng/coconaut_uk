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
import { useInView } from 'react-intersection-observer';

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

export const Nutrition = () => {
  const { ref, inView } = useInView();

  return (
    <SectionTwoCol
      id='nutrition'
      left={
        <>
          <Headline sub='Coconut Water' gutterBottom>
            Pure Young
          </Headline>
          <Typography>
            Coconaut is an energising drink with a rare combination. It
            refreshes, activates and regenerates. It only contains pure young
            coconut water from premium young Vietnamese coconuts. No additives.
            No extra sugar. Just the full load of coconut power. Want to know
            more?
          </Typography>

          <Button margin='3rem 0 0 0' to='/#shop'>
            Shop now!
          </Button>
        </>
      }
      right={
        <>
          <Centered>
            <StaticImage
              width={350}
              src='../../images/CoconutAndCan.png'
              alt='coconut and can'
            />
          </Centered>

          <Subheadline gutterBottom>What's in it?</Subheadline>

          <FactsList ref={ref}>
            {nutritionalFacts.map((fact, i) => (
              <Fact key={i} delay={i * 0.15} {...fact} inView={inView} />
            ))}
          </FactsList>
        </>
      }
    />
  );
};
