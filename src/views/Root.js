import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import { Heading, Container, Button } from 'components/Layout';
import ProductsList from 'components/Products/ProductsList';
import CartList from 'components/Cart/CartList';
import { StoreProvider } from 'hoc/Context';

const Root = () => {
  return (
    <StoreProvider>
      <MainTemplate>
        <Container>
          <Heading size="h2">Koszyk</Heading>
          <CartList></CartList>
          <Button variant="primary">Rozwiń koszyk</Button>
          <Heading size="h2">Produkty</Heading>
          <ProductsList />
        </Container>
      </MainTemplate>
    </StoreProvider>
  );
};

export default Root;
