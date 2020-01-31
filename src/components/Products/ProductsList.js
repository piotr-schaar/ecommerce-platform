import React from 'react';
import styled from 'styled-components';
import ProductItem from './ProductItem';
import { useStore } from 'store/CartStore';

const GridWrapper = styled.ul`
  display: flex;
  margin: -10px;
  flex-wrap: wrap;
`;

const ProductsList = () => {
  const { state, dispatch } = useStore();

  return (
    <div>
      <GridWrapper>
        {state.items.map(product => (
          <ProductItem key={product.id} product={product} dispatch={dispatch} />
        ))}
      </GridWrapper>
    </div>
  );
};

export default ProductsList;
