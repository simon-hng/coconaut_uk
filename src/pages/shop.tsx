import { Headline, SectionWrapper, Subheadline } from '@components/Global';
import { Header } from '@components/Header';
import { Product } from '@components/Shop/Product';
import { graphql } from 'gatsby';
import * as React from 'react';
import styled from 'styled-components';

const ProductsStyle = styled.div`
  display: flex;
  justify-content:space-around;
`;

const Shop = ({ data }) => {
  const products = data.allShopifyProduct.edges;
  return (
    <main>
      <Header />
      <Headline centered>Shop Our Products</Headline>
      <Subheadline centered>get yourself 100% young coconut water</Subheadline>

      <SectionWrapper>
        <ProductsStyle>
          {products.map((product) => (
            <Product product={product.node} />
          ))}
        </ProductsStyle>
      </SectionWrapper>
    </main>
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
