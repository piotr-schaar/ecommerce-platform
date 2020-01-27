import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import { Heading, Container, Button } from 'components/Layout';
import ProductsList from 'components/Products/ProductsList';
import CartList from 'components/Cart/CartList';
import { StoreProvider } from 'hoc/Context';
import Cart from 'components/Cart/Cart';

const Root = () => {
  return (
    <StoreProvider>
      <MainTemplate>
        <Container>
          <Cart />
          <Heading size="h2">Produkty</Heading>
          <ProductsList />
        </Container>
      </MainTemplate>
    </StoreProvider>
  );
};

export default Root;
