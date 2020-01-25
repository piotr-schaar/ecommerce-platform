import React, { useReducer, useEffect } from 'react';
import { useStore } from 'hoc/Context';

const CartList = () => {
  const { state, dispatch } = useStore();
  console.log('TCL: CartList -> state', state);

  return <div></div>;
};

export default CartList;
