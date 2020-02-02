import React from 'react';
import styled from 'styled-components';
import { actionTypes } from 'store/CartStore';
import { Button } from 'components/Layout';

const Wrapper = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 2fr;
  align-items: center;
  grid-gap: 1rem;
  p {
    padding-left: 1rem;
  }
  @media (max-width: 667px) {
    * {
      font-size: 1.8rem;
      padding: 1rem;
    }
  }

  @media (max-width: 437px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ImgStyled = styled.img`
  width: 120px;
  height: 80px;
`;

const QuantityWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  margin: 0 2rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 667px) {
    margin: 0 1rem;
  }
`;

const ButtonCustom = styled(Button)`
  padding: 10px;
  &:first-of-type {
    margin-bottom: 1rem;
  }
`;

const CartListItem = ({ product: { image, name, quantity, price, id }, dispatch }) => {
  const handleClick = type =>
    dispatch({
      type,
      payload: id,
    });

  return (
    <li>
      <Wrapper>
        <ImgStyled src={image} alt={`${name} image`} />
        <p>{name}</p>
        <QuantityWrapper>
          <p>{quantity}</p>
          <ButtonWrapper>
            <ButtonCustom onClick={() => handleClick(actionTypes.ADD_QUANTITY)}>+</ButtonCustom>
            <ButtonCustom onClick={() => handleClick(actionTypes.REMOVE_QUANTITY)}>-</ButtonCustom>
          </ButtonWrapper>
        </QuantityWrapper>
        <p>Cena: {price * quantity} zł</p>
      </Wrapper>
    </li>
  );
};

export default CartListItem;
