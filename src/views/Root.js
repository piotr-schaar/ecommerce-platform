import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import { Heading, Container, Button } from 'components/Layout';

const Root = () => {
  return (
    <MainTemplate>
      <Container>
        <Heading size="h2">Koszyk</Heading>
        <Button>Rozwiń koszyk</Button>
      </Container>
    </MainTemplate>
  );
};

export default Root;
