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

const Shop = ({ data }) => {
  const products = data.allShopifyProduct.edges;
  return (
    <Layout title='Coconaut home' description={'Buy coconut water'}>
      <SectionWrapper padded>
        <Headline centered>Shop Our Products</Headline>
        <Subheadline centered>
          get yourself 100% young coconut water
        </Subheadline>

        <ProductsStyle>
          {products.map((product) => (
            <Product key={product.node.id} product={product.node} />
          ))}
        </ProductsStyle>
      </SectionWrapper>
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
