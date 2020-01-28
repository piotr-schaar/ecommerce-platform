import React, { useState, useEffect, useReducer } from 'react';
import styled from 'styled-components';
import data from 'dummy/data';
import ProductItem from './ProductItem';
import { useStore } from 'store/CartStore';

const GridWrapper = styled.ul`
  display: flex;
  margin: -10px;
  flex-wrap: wrap;
`;

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const { state, dispatch } = useStore();

  useEffect(() => {
    setProducts(data);
  });

  return (
    <div>
      <GridWrapper>
        {products.map(product => (
          <ProductItem key={product.id} product={product} dispatch={dispatch} />
        ))}
      </GridWrapper>
    </div>
  );
};

export default ProductsList;
