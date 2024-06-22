/* eslint-disable react/prop-types */
// ProductListComponent.js
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
