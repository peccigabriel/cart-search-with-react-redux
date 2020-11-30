import React from 'react';
import { useSelector } from 'react-redux';
import Cards from './Cards';

const ProductCards = () => {
  const products = useSelector((state) => {
    const { products, search } = state.products;
    if (search !== '' && search !== undefined) {
      const regex = new RegExp(search, 'i');
      const filters = products.filter((i) => {
        if (regex.test(i.name) || i.id === parseInt(search)) {
          return i;
        } else {
          return null;
        }
      });
      return filters;
    }
    return products;
  });

  return (
    <div>
      <Cards data={products} />
    </div>
  );
};

export default ProductCards;
