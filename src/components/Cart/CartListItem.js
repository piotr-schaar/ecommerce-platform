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
    grid-gap: 0.5rem;
    * {
      font-size: 1.4rem;
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
  return (
    <li>
      <Wrapper>
        <ImgStyled src={image} alt={`${image} image`} />
        <p>{name}</p>
        <QuantityWrapper>
          <p>{quantity}</p>
          <ButtonWrapper>
            <ButtonCustom onClick={() => dispatch({ type: actionTypes.ADD_QUANTITY, payload: id })}>
              +
            </ButtonCustom>
            <ButtonCustom
              onClick={() => dispatch({ type: actionTypes.REMOVE_QUANTITY, payload: id })}
            >
              -
            </ButtonCustom>
          </ButtonWrapper>
        </QuantityWrapper>
        <p>Cena: {price * quantity} PLN</p>
      </Wrapper>
    </li>
  );
};

export default CartListItem;
