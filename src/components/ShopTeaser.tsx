import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import {
  SectionTwoCol,
  Headline,
  Subheadline,
  Button,
  CenteredOnMobile,
  Typography,
} from '@components/Global';
import Quantity from './Shop/Quantity';

const BuyingSection = styled.div`
  display: flex;
  width: 20rem;
  justify-content: space-between;
`;

export default () => {
  const teaserProduct = useStaticQuery(
    graphql`
      query MyQuery {
        shopifyProduct(id: { eq: "90bc0096-8909-5670-9165-e52a2cfaa015" }) {
          title
          description
          featuredImage {
            altText
            gatsbyImageData
          }
          priceRangeV2 {
            maxVariantPrice {
              amount
            }
          }
        }
      }
    `
  );

  const product = teaserProduct.shopifyProduct;

  return (
    <SectionTwoCol
      left={
        <CenteredOnMobile>
          <GatsbyImage
            alt={product.featuredImage.altText}
            image={product.featuredImage.gatsbyImageData}
          />
        </CenteredOnMobile>
      }
      right={
        <>
          <Headline main='Coconaut' />
          <Subheadline>100% pure young coconaut Water</Subheadline>
          <Typography bold>{product.description}</Typography>
          <Typography fontSize={4} bold padding='3rem 0'>
            {product.priceRangeV2.maxVariantPrice.amount}£
          </Typography>
          <Typography bold>Quantity</Typography>

          <BuyingSection>
            <Quantity />
            <Button padding='0.8rem 2rem'>Add</Button>
          </BuyingSection>

          <Button margin='5rem 0' to='/shop'>
            Go to shop!
          </Button>
        </>
      }
    />
  );
};
