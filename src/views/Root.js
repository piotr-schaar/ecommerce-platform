import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import { Heading, Container, Button } from 'components/Layout';
import ProductsList from 'components/Products/ProductsList';

const Root = () => {
  return (
    <MainTemplate>
      <Container>
        <Heading size="h2">Koszyk</Heading>
        <Button variant="primary">Rozwiń koszyk</Button>
        <Heading size="h2">Produkty</Heading>
        <ProductsList />
      </Container>
    </MainTemplate>
  );
};

export default Root;
