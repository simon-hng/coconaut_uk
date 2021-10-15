import * as React from 'react';
import { LineItem } from 'shopify-buy';

interface lineItemProps {
  item: LineItem;
}

export const LineProduct = ({ item }: lineItemProps) => {
  return (
    <div>
      <table>
        <tr>{item.id}</tr>
        <tr>{item.title}</tr>
        <tr>{item.quantity}</tr>
      </table>
    </div>
  );
};
