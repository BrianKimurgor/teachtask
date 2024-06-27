/* eslint-disable react/prop-types */
import DisplayComponent from "./displayComponent";

const ProductsComponent = ({ products, addToCart }) => {
    return (
        <>
        <div className="product">
        {products.map((product) => (
            <DisplayComponent key={product.productID} shoe={product} addToCart={addToCart} />
        ))}
        </div>

        </>
    );
};

export default ProductsComponent;
