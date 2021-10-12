import * as React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import {
  SectionTwoCol,
  Headline,
  Typography,
  CenteredOnMobile,
} from '@components/Global';

export default () => (
  <SectionTwoCol
    left={
      <>
        <Headline main='Our Mission' sub='Lorem Dolor sit Amet' />
        <Typography bold>
          Coconauts mission: a new coconut water that is better than anything
          the big companies have to offer. No sooner said than done.
        </Typography>
        <br />
        <Typography>
          Inspired by the functional drink from Vietnam, Coconaut was created.
          As a natural isotonic drink, it is now enjoyed by consumers in over 5
          countries to keep them refreshed and active throughout the day.​
          Coconaut empowers and inspires people to do their beswork. To unlock
          everyones full potential we beliefe in collaboration and communication
          with our consumers, stakeholders, workforce and suppliers. ​
        </Typography>
      </>
    }
    right={
      <CenteredOnMobile>
        <StaticImage
          src='../images/Coconaut_Illu_Still.png'
          alt='Coconaut illustration'
        />
      </CenteredOnMobile>
    }
  />
);
