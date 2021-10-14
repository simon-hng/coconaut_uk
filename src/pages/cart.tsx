import { Header } from '@components/Header';
import { LineItem } from '@components/Shop/LineItem';
import { StoreContext } from '@context/StoreContext';
import * as React from 'react';

const Cart = () => {
  const { checkout } = React.useContext(StoreContext);
  return (
    <main>
      <Header />
      <div>
        {checkout.lineItems.map((lineItem) => (
          <LineItem item={lineItem} />
        ))}
      </div>
    </main>
  );
};

export default Cart;
