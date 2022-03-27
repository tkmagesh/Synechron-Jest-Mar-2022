import * as React from 'react'
import productsApi from './services/products.api'

const Products= () => {
    const [products, setProducts] = React.useState([]);
    const [status, setStatus] = React.useState('')
    const onGetProductsClick =  () => {
        productsApi
            .getProducts()
            .then(products => {
                setStatus('Products Loaded')
                setProducts(products);
                setTimeout(() => {
                    setStatus('')
                }, 5000); 
            })
    }
    return(
        <>
            <h3>Products</h3>
            <hr/>
            <button onClick={onGetProductsClick}>Get Products</button>
            <ol id="productsList" data-testid="productsList">
                {products.map(product => 
                    (<li key={product.id}>{product.name}</li>)
                )}
            </ol>
            <div>{status}</div>
        </>
    )
}

export default Products;