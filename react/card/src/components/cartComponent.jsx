/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const CartComponent = ({ cart, remove }) => {
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
                            <button onClick={() => remove(index)}>remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CartComponent;
