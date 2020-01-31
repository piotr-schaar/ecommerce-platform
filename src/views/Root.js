import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import { Container } from 'components/Layout';
import ProductsList from 'components/Products/ProductsList';
import { StoreProvider } from 'store/CartStore';
import Cart from 'components/Cart/Cart';

const Root = () => {
  return (
    <StoreProvider>
      <MainTemplate>
        <Container>
          <Cart />
          <ProductsList />
        </Container>
      </MainTemplate>
    </StoreProvider>
  );
};

export default Root;
