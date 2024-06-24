/* eslint-disable react/prop-types */
import DisplayComponent from "./displayComponent"

const ProductsComponent = ({products}) =>{
    return(
        <>
            {products.map((product) => (
                <DisplayComponent key={product.productID} shoe={product}/>
            ))}
        </>
    )
}

export default ProductsComponent
