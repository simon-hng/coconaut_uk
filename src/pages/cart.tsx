import {
  Headline,
  Layout,
  SectionWrapper,
  Typography,
} from '@components/Global';
import { Header } from '@components/Header';
import { LineProduct } from '@components/Cart/LineProduct';
import { StoreContext } from '@context/StoreContext';
import * as React from 'react';
import { Cart as shopifyCart } from 'shopify-buy';
import styled from 'styled-components';

const EmptyCart = () => <Headline>Your cart is empty</Headline>;

const Table = styled.table`
  width: 100%;

  th,
  td {
    padding: 1rem 2rem;
  }
`;

const Th = (props: { children: React.ReactNode }) => (
  <th>
    <Typography bold>{props.children}</Typography>
  </th>
);

interface cartInfoProps {
  checkout: shopifyCart;
}

const CartInfo = ({ checkout }: cartInfoProps) => (
  <Table>
    <tr>
      <Th>Product</Th>
      <Th>Price</Th>
      <Th>QTY</Th>
      <Th>Total</Th>
    </tr>

    {checkout.lineItems.map((lineItem, i) => (
      <LineProduct key={i} item={lineItem} />
    ))}
  </Table>
);

const Cart = () => {
  const { checkout } = React.useContext(StoreContext);
  return (
    <Layout>
      <Header />
      <SectionWrapper padded>
        {checkout ? <CartInfo checkout={checkout} /> : <EmptyCart />}
      </SectionWrapper>
    </Layout>
  );
};

export default Cart;
