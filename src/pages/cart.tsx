import { Headline, Layout, SectionWrapper } from '@components/Global';
import { Header } from '@components/Header';
import { CartInfo } from '@components/Cart/CartInfo';
import { StoreContext } from '@context/StoreContext';
import * as React from 'react';

const EmptyCart = () => <Headline>Your cart is empty</Headline>;

const Cart = () => {
  const { checkout } = React.useContext(StoreContext);
  return (
    <Layout
      title='Shopping cart'
      description='Manage your shopping cart'
      image={''}
    >
      <Header />
      <SectionWrapper padded>
        {checkout ? <CartInfo checkout={checkout} /> : <EmptyCart />}
      </SectionWrapper>
    </Layout>
  );
};

export default Cart;
