import * as React from 'react';

export const LineItem = (props: { item }) => {
  console.log(props.item);
  return (
    <div>
      <table>
        <tr>{props.item.id}</tr>
        <tr>{props.item.title}</tr>
        <tr>{props.item.quantity}</tr>
      </table>
    </div>
  );
};
