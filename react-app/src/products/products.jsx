import * as React from 'react'
import productsApi from './services/products.api'

const Products= () => {
    const [products, setProducts] = React.useState([]);
    const onGetProductsClick = async () => {
        const products = await productsApi.getProducts()
        setProducts(products);
    }
    return(
        <>
            <h3>Products</h3>
            <hr/>
            <button onClick={onGetProductsClick}>Get Products</button>
            <ol id="productsList">
                {products.map(product => 
                    (<li key={product.id}>{product.name}</li>)
                )}
            </ol>
        </>
    )
}

export default Products;