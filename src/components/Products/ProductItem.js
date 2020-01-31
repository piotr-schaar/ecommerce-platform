import React from 'react';
import styled from 'styled-components';
import { Button, Card } from 'components/Layout';
import { actionTypes } from 'store/CartStore';

const LiStyled = styled.li`
  list-style: none;
  padding: 0;
  margin: 10px;
  height: 220px;
  width: calc(25% - 20px);
  @media (max-width: 1200px) {
    width: calc(33% - 20px);
  }
  @media (max-width: 800px) {
    width: calc(50% - 20px);
  }
  @media (max-width: 476px) {
    width: calc(100% - 20px);
    height: 100%;
  }
`;

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const ImgWrapper = styled.div`
  background: ${({ imgSrc }) => `url(${imgSrc}) no-repeat`};
  background-size: cover;
  background-position: center;
  height: 100px;
  width: 100%;
  @media (max-width: 476px) {
    height: 150px;
  }
`;

const TextStyled = styled.p`
  font-size: 1.5em;
  font-weight: 600;
  margin: 0.5rem 0 0.5rem;
`;

const ProductItem = ({ product, dispatch }) => {
  const handleClick = () => {
    dispatch({
      type: actionTypes.ADD_ITEM,
      payload: product.id,
    });
  };

  const { image, name, price } = product;
  return (
    <LiStyled>
      <Card>
        <MainWrapper>
          <ImgWrapper imgSrc={image} />
          <TextStyled>{name}</TextStyled>
          <TextStyled>{price} zł</TextStyled>
          <Button variant="secondary" contain onClick={handleClick}>
            Dodaj do koszyka
          </Button>
        </MainWrapper>
      </Card>
    </LiStyled>
  );
};

export default ProductItem;
