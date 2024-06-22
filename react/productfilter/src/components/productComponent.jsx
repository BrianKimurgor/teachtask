/* eslint-disable react/prop-types */

const ProductComponent = ({ product }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>
    </div>
  );
};

export default ProductComponent;
