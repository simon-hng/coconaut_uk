import * as React from 'react';
import {
  Button,
  Centered,
  Headline,
  SectionTwoCol,
  Typography,
} from '@components/Global';
import { StaticImage } from 'gatsby-plugin-image';

export const Contact = () => (
  <SectionTwoCol
    id='contact'
    left={
      <Centered>
        <StaticImage src='../images/contact.jpg' />
      </Centered>
    }
    right={
      <>
        <Headline gutterBottom>Contact us</Headline>
        <Typography>
          We encourage you to contact us and add Coconaut® products to your
          offering. Consumers are choosing coconut water more and more often
          because it's a hydrating beverage which provides a delicious source of
          natural electrolytes. With its natural sweetness it works great as a
          healthy refreshment drink or a mixer for cocktails. Coconaut® is
          simply delicious and refreshing.
        </Typography>
        <Button href='mailto: Info@coconaut.co.uk' margin='3rem 0 0 0'>
          Contact us!
        </Button>
      </>
    }
  />
);
