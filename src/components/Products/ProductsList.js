import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import data from 'dummy/data';
import ProductItem from './ProductItem';

const GridWrapper = styled.ul`
  display: flex;
  margin: -10px;
  flex-wrap: wrap;
`;

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  });

  return (
    <div>
      <GridWrapper>
        {products.map(product => (
          <ProductItem {...product} />
        ))}
      </GridWrapper>
    </div>
  );
};

export default ProductsList;
