import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Heading, Select } from 'components/Layout';
import ProductItem from './ProductItem';
import { useStore } from 'store/CartStore';
import { sortArrayByType } from 'utils/functions';

const GridWrapper = styled.ul`
  display: flex;
  margin: -10px;
  flex-wrap: wrap;
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  h2 {
    padding-right: 2rem;
  }
`;

const ProductsList = () => {
  const { state, dispatch } = useStore();
  const [products, setProducts] = useState([]);
  const [filterType, setFilterType] = useState('');

  useEffect(() => {
    setProducts(sortArrayByType(state.items, filterType));
  }, [state.items, filterType]);

  const handleChange = e => setFilterType(e.target.value);

  return (
    <div>
      <FlexWrapper>
        <Heading size="h2">Produkty</Heading>
        <Select name="filterType" value={filterType} onChange={handleChange}>
          <option value="">Sortuj</option>
          <option value="name">Nazwa</option>
          <option value="price">Cena</option>
        </Select>
      </FlexWrapper>
      <GridWrapper>
        {products.map(product => (
          <ProductItem key={product.id} product={product} dispatch={dispatch} />
        ))}
      </GridWrapper>
    </div>
  );
};

export default ProductsList;
