import React from 'react';
import Product from '../Products/Product';
import './Main.css'

const Main = (props) => {
    const { products, onAdd, } = props;
    return (
        <main className='block col-2'>
            <h1>Products</h1>
            <div className='product-container'>
                {products.map((product) => (
                    <Product key={product.id} product={product} onAdd={onAdd}></Product>
                ))}
            </div>
        </main>
    );
};

export default Main;