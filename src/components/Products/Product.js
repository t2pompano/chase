import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const { product, onAdd } = props;
    return (
        <div className='product-container'>
            <div>
                <img className='small' src={product.image} alt={product.name} />
                <h2>{product.name}</h2>
                <div><strong> ${product.price}</strong></div>
                <div>
                    <button onClick={() => onAdd(product)} className='btn-cart'>
                        <p className='btn-text'>Add To Cart</p>
                        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;