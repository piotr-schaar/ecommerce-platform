import React from 'react';
import { actionTypes } from 'store/CartStore';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  width: 450px;
  align-items: center;
  font-size: 1.8rem;
`;

const ImgStyled = styled.img`
  width: 120px;
`;

const CartListItem = ({ product: { image, name, quantity, price, id }, dispatch }) => {
  return (
    <li>
      <Wrapper>
        <ImgStyled src={image} alt={`${image} image`} />
        <p>{name}</p>
        <p>{quantity}</p>
        <p>suma: {price * quantity}</p>
        <div>
          <button onClick={() => dispatch({ type: actionTypes.ADD_QUANTITY, payload: id })}>
            +
          </button>
          <button onClick={() => dispatch({ type: actionTypes.REMOVE_QUANTITY, payload: id })}>
            -
          </button>
        </div>
      </Wrapper>
    </li>
  );
};

export default CartListItem;
