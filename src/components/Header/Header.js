import React from 'react';

const Header = (props) => {
    const { countCartItems } = props;
    return (
        <header className='row block center'>
            <div>
                <a href="#/">
                    <h1>Chasing Shopping Cart</h1>
                </a>
            </div>
            <div>
                <a href="Cart">

                    Cart {''}
                    {countCartItems ? (
                        <button className='badge'>{countCartItems}</button>
                    ) : (
                        ''
                    )}

                </a>  <a href="Sign in">Signin</a>
            </div>
        </header>
    );
};

export default Header;