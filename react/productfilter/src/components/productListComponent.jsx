// ProductListComponent.js
import React from 'react';
import ProductComponent from './productComponent';
const ProductListComponent = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <ProductComponent key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductListComponent;
