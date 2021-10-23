import { Buying } from './Buying';
import {
  SectionTwoCol,
  Headline,
  Subheadline,
  Button,
  CenteredOnMobile,
  Typography,
} from '@components/Global';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as React from 'react';
import styled from 'styled-components';

const Price = styled.div`
  padding: 3rem 0;
`;

export const ShopTeaser = () => {
  const data = useStaticQuery(
    graphql`
      {
        shopifyProduct(id: { eq: "90bc0096-8909-5670-9165-e52a2cfaa015" }) {
          title
          description
          featuredImage {
            altText
            gatsbyImageData
          }
          variants {
            availableForSale
            price
            storefrontId
          }
        }
      }
    `
  );

  const product = data.shopifyProduct;
  const variant = product.variants[0];
  const [quantity, setQuantity] = React.useState(1);

  return (
    <SectionTwoCol
      left={
        <CenteredOnMobile>
          <GatsbyImage
            alt={product.featuredImage.altText || product.title}
            image={product.featuredImage.gatsbyImageData}
          />
        </CenteredOnMobile>
      }
      right={
        <>
          <Headline>Coconaut</Headline>
          <Subheadline>100% pure young coconaut Water</Subheadline>
          <Typography>{product.description}</Typography>

          <Price>
            <Typography fontSize={4}>{variant.price} £</Typography>
            <Typography>
              {`${(variant.price / 12).toFixed(2)} per can inc. VAT & shipping`}
            </Typography>
          </Price>

          <div>
            <Typography bold>Quantity</Typography>
            <Buying
              title={product.title}
              variantId={variant.storefrontId}
              quantity={quantity}
              setQuantity={setQuantity}
            />
          </div>

          <Button margin='4rem 0 0 0' to='/shop'>
            Go to shop!
          </Button>
        </>
      }
    />
  );
};
