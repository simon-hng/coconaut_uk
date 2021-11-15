import { StaticImage } from 'gatsby-plugin-image';
import { Headline, HoverCard, SectionTwoCol, Typography } from './Global';
import * as React from 'react';

export const Sustainability = () => (
  <SectionTwoCol
    id='sustainability'
    left={
      <>
        <Headline gutterBottom sub='Commitment'>
          Sustainability
        </Headline>
        <Typography bold>
          Our ambition is to be a sustainable company.
        </Typography>
        <br />
        <Typography>
          We place great emphasis on dealing appropriately with our product and
          packaging, and on reducing our carbon emissions and energy use in our
          production and supply wherever possible. Cans are 100% recyclable and
          the transport of cans costs less energy than the transport of plastic
          or glass bottles because of their shape. The transport of aluminum
          cans saves 40% space compared to glass bottles. We know that this is
          not enough and therefore strive to develop a more sustainable
          packaging in the future.
        </Typography>
      </>
    }
    right={
      <>
        <HoverCard
          image={<StaticImage src='../images/sustainability/kuehneNagel.jpg' />}
        >
          <Typography>
            We work together with Kuehne+Nagel who as pioneers in the industry
            proactively addresses the CO2 footprint of their sea logistics
            services.
          </Typography>
        </HoverCard>

        <HoverCard
          image={<StaticImage src='../images/sustainability/costura.jpg' />}
        >
          <Typography>
            We work together with Costura EV to recycle old cans and create
            beautiful new accessorys. Take a look at the new collection.
          </Typography>
        </HoverCard>
      </>
    }
  />
);
