/* eslint-disable react/prop-types */
import DisplayComponent from "./displayComponent";

const ProductsComponent = ({ products, addToCart }) => {
    return (
        <>
            {products.map((product) => (
                <DisplayComponent key={product.productID} shoe={product} addToCart={addToCart} />
            ))}
        </>
    );
};

export default ProductsComponent;
