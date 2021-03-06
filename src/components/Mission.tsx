import * as React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import {
  SectionTwoCol,
  Headline,
  Typography,
  Centered,
  Subheadline,
} from '@components/Global';

export const Mission = () => (
  <SectionTwoCol
    id='mission'
    left={
      <>
        <Headline>Our Mission</Headline>
        <Subheadline gutterBottom>The Drink for your Everyday Adventures.</Subheadline>
        <br />
        <Typography>
          Inspired by the functional drink from Vietnam, Coconaut was created.
          As a natural isotonic drink, it is now enjoyed by consumers in over 5
          countries to keep them refreshed and active throughout the day.​
          Coconaut empowers and inspires people to do their best work. To unlock
          everyone's full potential we believe in collaboration and
          communication with our consumers, stakeholders, workforce and
          suppliers. ​
        </Typography>
      </>
    }
    right={
      <Centered>
        <StaticImage
          src='../images/Coconaut_Illu_Still.png'
          alt='Coconaut illustration'
        />
      </Centered>
    }
  />
);
