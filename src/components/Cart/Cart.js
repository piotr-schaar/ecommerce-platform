import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CartList from './CartList';
import { Heading, Button } from 'components/Layout';
import { useStore } from 'store/CartStore';

const Wrapper = styled.div`
  padding: 2rem 0;
`;

const Cart = () => {
  const { state, dispatch } = useStore();
  const [isCartShown, setCartShown] = useState();

  useEffect(() => {
    if (state.cartItems.length) {
      setCartShown(true);
    }
  }, [state.cartItems]);

  return (
    <Wrapper>
      <Heading size="h2">Koszyk</Heading>
      <Button variant="primary" onClick={() => setCartShown(!isCartShown)}>
        {isCartShown ? 'Ukryj koszyk' : 'Rozwiń koszyk'}
      </Button>
      {isCartShown && (
        <CartList total={state.total} cartItems={state.cartItems} dispatch={dispatch} />
      )}
    </Wrapper>
  );
};

export default Cart;
