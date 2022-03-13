import { Button } from '@components/Global';
import { Quantity } from '@components/Shop/Quantity';
import { StoreContext } from '@context/StoreContext';
import * as React from 'react';
import styled from 'styled-components';

const BuyingStyle = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 400px) {
    width: 18rem;
  }
`;

interface buyingProps {
  title: string;
  variantId: string;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

export const Buying = (props: buyingProps) => {
  const { addVariantToCart } = React.useContext(StoreContext);

  const addHandler = () => {
    addVariantToCart(props.variantId, props.quantity);
  };

  return (
    <BuyingStyle>
      <Quantity
        id={props.variantId}
        value={props.quantity}
        setValue={props.setQuantity}
      />
      <Button padding='0.8rem 1.6rem' onClick={() => addHandler()}>
        Add
      </Button>
    </BuyingStyle>
  );
};
