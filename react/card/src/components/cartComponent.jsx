/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const CartComponent = ({ cart }) => {
    return (
        <div className="Cart">
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>
                            {item.title} - Kshs {item.price}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CartComponent;
