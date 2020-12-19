import React from 'react';
import '../styles/cartCheckout.css';
import CartItemCard from './CartItemCard';

export default class CartItems extends React.Component{
    render() {
        return (
            <div className="cartItemContainer">
                <h2>Cart Items</h2>
                <CartItemCard />
                <CartItemCard />
            </div>
        );
    }
}
