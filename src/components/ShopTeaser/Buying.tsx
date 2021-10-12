import * as React from 'react';
import { Button } from '@components/Global';
import Quantity from '@components/Shop/Quantity';
import styled from 'styled-components';
import { StoreContext } from '@context/StoreContext';

const Buying = styled.div`
  display: flex;
  width: 20rem;
  justify-content: space-between;
`;

export default ({ variantId }) => {
  const [quantity, setQuantity] = React.useState(1);
  const { addVariantToCart, loading } = React.useContext(StoreContext);

  const addHandler = () => {
    addVariantToCart(variantId, quantity);
  };

  return (
    <Buying>
      <Quantity value={quantity} setValue={setQuantity} />
      <Button padding='0.8rem 2rem' onClick={() => addHandler()}>
        Add
      </Button>
    </Buying>
  );
};
