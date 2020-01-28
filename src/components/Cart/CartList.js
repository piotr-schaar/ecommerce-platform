import React from 'react';
import { actionTypes } from 'store/CartStore';
import { Heading } from 'components/Layout';
import CartListItem from './CartListItem';

const CartList = ({ products, dispatch }) => {
  console.log('TCL: CartList -> products', products);
  if (products.length === 0) {
    return <Heading size="h2">Twój koszyk jest pusty</Heading>;
  } else {
    return (
      <div>
        <ul>
          {products.map(product => (
            <CartListItem product={product} dispatch={dispatch} />
          ))}
        </ul>
      </div>
    );
  }
};

export default CartList;
