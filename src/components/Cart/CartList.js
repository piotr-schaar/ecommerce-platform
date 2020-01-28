import React from 'react';
import styled from 'styled-components';
import { Heading } from 'components/Layout';
import CartListItem from './CartListItem';

const ListStyled = styled.ul`
  list-style: none;
`;

const CartList = ({ cartItems, dispatch }) => {
  if (cartItems.length === 0) {
    return <Heading size="h2">Twój koszyk jest pusty</Heading>;
  } else {
    return (
      <div>
        <ListStyled>
          {cartItems.map(product => (
            <CartListItem product={product} dispatch={dispatch} />
          ))}
        </ListStyled>
      </div>
    );
  }
};

export default CartList;
