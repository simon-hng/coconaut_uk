import * as React from 'react';
import { Headline, SectionTwoCol, Typography } from './Global';

export const Sustainability = () => (
  <SectionTwoCol
    id='sustainability'
    left={
      <>
        <Headline sub='Commitment'>Sustainability</Headline>
        <Typography bold>
          Our ambition is to be a sustainable company.
        </Typography>
        <br />
        <Typography>
          We place great emphasis on dealing appropriately with our packaging
          and can, and on reducing our carbon emissions and energy use in our
          production and supply wherever possible. Many dont know that cans are
          100% recyclable and the transport of cans costs less energy than the
          transport of plastic or glass bottles because of their shape. The
          transport of aluminium cans saves 40% space compared to glass bottles.
          We know that this is not enough and therefore strive to develope a
          more sustainable packaging in the future.
        </Typography>
      </>
    }
    right={<></>}
  />
);