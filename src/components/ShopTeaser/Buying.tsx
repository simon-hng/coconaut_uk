import * as React from 'react';
import { Button } from '@components/Global';
import { Quantity } from '@components/Shop/Quantity';
import styled from 'styled-components';
import { StoreContext } from '@context/StoreContext';

const BuyingStyle = styled.div`
  display: flex;
  width: 20rem;
  justify-content: space-between;
`;

export const Buying = (props: { variantId: number }) => {
  const [quantity, setQuantity] = React.useState(1);
  const { addVariantToCart } = React.useContext(StoreContext);

  const addHandler = () => {
    addVariantToCart(props.variantId, quantity);
  };

  return (
    <BuyingStyle>
      <Quantity value={quantity} setValue={setQuantity} />
      <Button padding='0.8rem 2rem' onClick={() => addHandler()}>
        Add
      </Button>
    </BuyingStyle>
  );
};
