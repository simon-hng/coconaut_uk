import * as React from 'react';
import {
  Centered,
  Headline,
  SectionTwoCol,
  Typography,
} from '@components/Global';

export const Contact = () => (
  <SectionTwoCol
    id='contact'
    left={<Centered></Centered>}
    right={
      <>
        <Headline gutterBottom>Contact us</Headline>
        <Typography>
          We encourage you to contact us and add Coconaut® products to your
          offering. Consumers are choosing coconut water more and more often
          because it&apos;s a hydrating beverage which provides a delicious
          source of natural electrolytes. With it&apos;s natural sweetness it
          works great as a healthy refreshment drink or a mixer for cocktails.
          Coconaut® is simply delicious and refreshing.
        </Typography>
      </>
    }
  />
);
