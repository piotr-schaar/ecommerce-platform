import React, { useState, useEffect } from 'react';
import CartList from './CartList';
import { Heading, Button } from 'components/Layout';
import { useStore } from 'store/CartStore';

const Cart = () => {
  const {
    state: { cartItems },
    dispatch,
  } = useStore();
  const [isCartShown, setCartShown] = useState();

  useEffect(() => {
    cartItems.length !== 0 ? setCartShown(true) : setCartShown(false);
  }, [cartItems]);

  return (
    <>
      <Heading size="h2">Koszyk</Heading>
      <Button variant="primary" onClick={() => setCartShown(!isCartShown)}>
        Rozwiń koszyk
      </Button>
      {isCartShown && <CartList cartItems={cartItems} dispatch={dispatch} />}
    </>
  );
};

export default Cart;
