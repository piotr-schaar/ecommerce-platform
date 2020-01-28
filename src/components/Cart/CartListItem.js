import React from 'react';
import { actionTypes } from 'store/CartStore';

const CartListItem = ({ product, dispatch }) => {
  return (
    <>
      <li>{product.name}</li>
      <li>{product.quantity}</li>
      <li>{product.price * product.quantity}</li>
      <button onClick={() => dispatch({ type: actionTypes.ADD_ITEM, payload: product })}>
        dodaj
      </button>
      <button onClick={() => dispatch({ type: actionTypes.REMOVE_ITEM, payload: product })}>
        ODEJMIJ
      </button>
    </>
  );
};

export default CartListItem;
