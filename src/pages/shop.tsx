/* eslint-disable react/prop-types */
import {
  Headline,
  Layout,
  SectionWrapper,
  Subheadline,
} from '@components/Global';
import { Header } from '@components/Header';
import { Product } from '@components/Shop/Product';
import { graphql } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';

const ProductsStyle = styled.div`
  display: flex;
  justify-content: 'space-around';
  flex-direction: column;
  justify-content: space-evenly;

  @media (min-width: 900px) {
    flex-direction: row;
  }
`;

const ShopSection = styled(SectionWrapper)`
  padding: 10rem 2rem;
`;

const Shop = ({ data }) => {
  const products = data.allShopifyProduct.edges;
  return (
    <Layout>
      <Header />
      <ShopSection>
        <Headline centered>Shop Our Products</Headline>
        <Subheadline centered>
          get yourself 100% young coconut water
        </Subheadline>

        <ProductsStyle>
          {products.map((product) => (
            <Product key={product.node.id} product={product.node} />
          ))}
        </ProductsStyle>
      </ShopSection>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    allShopifyProduct {
      edges {
        node {
          id
          featuredImage {
            gatsbyImageData
            altText
          }
          variants {
            availableForSale
            storefrontId
            price
          }
          description
          title
        }
      }
    }
  }
`;

export default Shop;
