import React, { useState, useEffect } from 'react';
import CartList from './CartList';
import { Heading, Button } from 'components/Layout';
import { useStore } from 'store/CartStore';

const Cart = () => {
  const {
    state: { items },
    dispatch,
  } = useStore();
  const [isCartShown, setCartShown] = useState();

  useEffect(() => {
    items.length !== 0 ? setCartShown(true) : setCartShown(false);
  }, [items]);

  return (
    <>
      <Heading size="h2">Koszyk</Heading>
      <Button variant="primary" onClick={() => setCartShown(!isCartShown)}>
        Rozwiń koszyk
      </Button>
      {isCartShown && <CartList products={items} dispatch={dispatch} />}
    </>
  );
};

export default Cart;
