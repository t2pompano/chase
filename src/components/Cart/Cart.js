import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cartItems, onAdd, onRemove, onRefresh, onSelect } = props;
    const itemPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const taxPrice = itemPrice * 0.07;
    const shippingPrice = itemPrice > 100 ? 0 : 50;
    const totalPrice = itemPrice + taxPrice + shippingPrice;

    return (
        <aside className='block col-1'>
            <div className='cart'>
                <h1 className='text'>Cart Items:</h1>
                <div>{cartItems.length === 0 && <div className='text'>Cart is Empty</div>} </div>
                {cartItems.map((item) => (
                    <div key={item.id} className="row">
                        <div className='col-2'>{item.name}</div>
                        <div className='col-2'>
                            <button onClick={() => onAdd(item)} className="add">+</button>
                            <button onClick={() => onRemove(item)} className="remove">-</button>
                        </div>
                        <div className='col-2 text-right' >
                            <h2>{item.qty} X ${item.price.toFixed(2)}</h2>
                        </div>
                    </div>

                ))}
                {cartItems.length !== 0 && (
                    <>
                        <hr></hr>
                        <div className='row'>
                            <div className='col-2'>Item Price</div>
                            <div className='col-1 text-right'>${itemPrice.toFixed(2)}</div>
                        </div>
                        <div className='row'>
                            <div className='col-2'>Tax Price</div>
                            <div className='col-1 text-right'>${taxPrice.toFixed(2)}</div>
                        </div>
                        <div className='row'>
                            <div className='col-2'>Shipping Price</div>
                            <div className='col-1 text-right'>${shippingPrice.toFixed(2)}</div>
                        </div>
                        <div className='row'>
                            <div className='col-2'><strong> Total Price </strong></div>
                            <div className='col-1 text-right'><strong> ${totalPrice.toFixed(2)} </strong></div>
                        </div>



                    </>
                )}
                <>
                    <hr></hr>
                    <div className='col-2'>
                        <button onClick={() => onSelect(cartItems)} className="add2"><small> Chase One </small></button>
                        <button onClick={() => onRefresh(cartItems)} className="remove2"><small> Refresh </small></button>
                    </div>
                </>
            </div>
        </aside>
    );
};

export default Cart;