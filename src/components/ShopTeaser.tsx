import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import {
  SectionTwoCol,
  Headline,
  Subheadline,
  Button,
  CenteredOnMobile,
} from "@components/global/index";

export const query = () => {};

const ShopTeaser = () => {
  const productStill = useStaticQuery(
    graphql`
      query MyQuery {
        shopifyProduct(id: { eq: "90bc0096-8909-5670-9165-e52a2cfaa015" }) {
          title
          description
          featuredImage {
            altText
            gatsbyImageData
          }
        }
      }
    `
  );

  const product = productStill.shopifyProduct;

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
          <Headline main="Coconaut" />
          <Subheadline>100% pure young coconaut Water</Subheadline>
          <p>{product.description}</p>

          <Button to="">Go to shop!</Button>
        </>
      }
    />
  );
};

export default ShopTeaser;
