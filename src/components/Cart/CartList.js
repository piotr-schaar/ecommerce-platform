import React, { useReducer, useEffect } from 'react';
import { useStore } from 'hoc/Context';

const CartList = () => {
  const { state, dispatch } = useStore();

  return (
    <div>
      <ul>
        {state.items.map(item => (
          <>
            <li>{item.name}</li>
            <li>{item.quantity}</li>
            <button onClick={() => dispatch({ type: 'ADD_ITEM', payload: item })}>dodaj</button>
            <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item })}>
              ODEJMIJ
            </button>
          </>
        ))}
      </ul>
    </div>
  );
};

export default CartList;
