import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CartList from './CartList';
import { Heading, Button } from 'components/Layout';
import { useStore } from 'store/CartStore';

const Wrapper = styled.div`
  padding: 2rem 0;
`;

const Cart = () => {
  const {
    state: { cartItems, total },
    dispatch,
  } = useStore();
  const [isCartShown, setCartShown] = useState();

  useEffect(() => {
    cartItems.length !== 0 ? setCartShown(true) : setCartShown(false);
  }, [cartItems]);

  return (
    <Wrapper>
      <Heading size="h2">Koszyk</Heading>
      <Button variant="primary" onClick={() => setCartShown(!isCartShown)}>
        {isCartShown ? 'Ukryj koszyk' : 'Rozwiń koszyk'}
      </Button>
      {isCartShown && <CartList total={total} cartItems={cartItems} dispatch={dispatch} />}
    </Wrapper>
  );
};

export default Cart;
