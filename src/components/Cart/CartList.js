import React from 'react';
import styled from 'styled-components';
import { Heading } from 'components/Layout';
import CartListItem from './CartListItem';

const Wrapper = styled.div`
  padding: 2rem 0;
  font-size: 1.8rem;
  max-width: 600px;
  display: flex;
  flex-direction: column;
`;

const TotalStyled = styled.p`
  margin-top: 2rem;
  align-self: flex-end;
`;

const CartList = ({ cartItems, total, dispatch }) => {
  if (cartItems.length === 0) {
    return <Heading size="h2">Twój koszyk jest pusty</Heading>;
  } else {
    return (
      <Wrapper>
        <ul>
          {cartItems.map(product => (
            <CartListItem key={product.id} product={product} dispatch={dispatch} />
          ))}
        </ul>
        <TotalStyled>Suma: {total} zł</TotalStyled>
      </Wrapper>
    );
  }
};

export default CartList;
