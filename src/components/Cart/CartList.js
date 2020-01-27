import React from 'react';
import { actionTypes } from 'hoc/Context';
import { Heading } from 'components/Layout';

const CartList = ({ products, dispatch }) => {
  if (products.length === 0) {
    return <Heading>Twój koszyk jest pusty</Heading>;
  } else {
    return (
      <div>
        <ul>
          {products.map(product => (
            <>
              <li>{product.name}</li>
              <li>{product.quantity}</li>
              <button onClick={() => dispatch({ type: actionTypes.ADD_ITEM, payload: product })}>
                dodaj
              </button>
              <button onClick={() => dispatch({ type: actionTypes.REMOVE_ITEM, payload: product })}>
                ODEJMIJ
              </button>
            </>
          ))}
        </ul>
      </div>
    );
  }
};

export default CartList;
