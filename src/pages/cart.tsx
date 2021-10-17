import { Layout } from '@components/Global';
import { Header } from '@components/Header';
import { LineProduct } from '@components/Shop/LineProduct';
import { StoreContext } from '@context/StoreContext';
import * as React from 'react';

const Cart = () => {
  const { checkout } = React.useContext(StoreContext);
  return (
    <Layout>
      <Header />
      {checkout && (
        <div>
          {checkout.lineItems.map((lineItem, i) => (
            <LineProduct key={i} item={lineItem} />
          ))}
        </div>
      )}
    </Layout>
  );
};

export default Cart;
