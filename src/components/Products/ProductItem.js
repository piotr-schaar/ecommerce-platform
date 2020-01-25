import React from 'react';
import styled from 'styled-components';
import { Button, Card } from 'components/Layout';

const LiStyled = styled.li`
  list-style: none;
  padding: 0;
  margin: 10px;
  width: calc(25% - 20px);
`;

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 220px;
`;

const ImgWrapper = styled.img`
  width: 150px;
  height: 100px;
  margin-bottom: 1rem;
`;

const TextStyled = styled.p`
  font-size: 1.5em;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const ProductItem = ({ name, price, image }) => {
  return (
    <LiStyled>
      <Card>
        <MainWrapper>
          <ImgWrapper src={image} alt={name} />
          <TextStyled>{name}</TextStyled>
          <TextStyled>{price} zł</TextStyled>
          <Button variant="secondary" contain>
            Dodaj do koszyka
          </Button>
        </MainWrapper>
      </Card>
    </LiStyled>
  );
};

export default ProductItem;
