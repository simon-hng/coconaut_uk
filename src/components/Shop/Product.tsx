import { Typography } from '@components/Global';
import { Buying } from '@components/ShopTeaser/Buying';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as React from 'react';
import styled from 'styled-components';

const ProductStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 2rem;

  @media (min-width: 900px) {
    width: 33%;
  }
`;

interface productProps {
  product: any;
}

export const Product = ({ product }: productProps) => {
  const [quantity, setQuantity] = React.useState(1);
  const variant = product.variants[0];

  return (
    <ProductStyle>
      <Typography centered>{product.title}</Typography>
      {product.featuredImage && (
        <GatsbyImage
          alt={product.featuredImage.altText}
          image={product.featuredImage.gatsbyImageData}
        />
      )}

      <Typography fontSize={4} bold padding='0.5rem 0'>
        {variant.price} £
      </Typography>
      <Typography gutterBottom bold>
        {product.description}
      </Typography>
      <Buying
        variantId={variant.storefrontId}
        quantity={quantity}
        setQuantity={setQuantity}
      />
    </ProductStyle>
  );
};
