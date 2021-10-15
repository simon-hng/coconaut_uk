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
            alt={product.featuredImage.altText}
            image={product.featuredImage.gatsbyImageData}
          />
        </CenteredOnMobile>
      }
      right={
        <>
          <Headline>Coconaut</Headline>
          <Subheadline gutterBottom>100% pure young coconaut Water</Subheadline>
          <Typography bold>{product.description}</Typography>
          <Typography fontSize={4} bold padding='3rem 0'>
            {variant.price * quantity} £
          </Typography>
          <Typography bold>Quantity</Typography>
          <Buying
            variantId={variant.storefrontId}
            quantity={quantity}
            setQuantity={setQuantity}
          />
          <Button margin='5rem 0 0 0' to='/shop'>
            Go to shop!
          </Button>
        </>
      }
    />
  );
};
