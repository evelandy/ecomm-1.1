import React from 'react';
import '../styles/cartCheckout.css';
import CartItemCard from './CartItemCard';

export default class CartItems extends React.Component{
    state = {
        item: []
    }
    getCartInfo = () => {
        fetch('http://127.0.0.1:5000/api/v1/cart')
        .then((res) => {
            let data = res.json();
            return data;
        })
        .then((data) => {
            let item = {
                'id': data.message[0].id,
                'item_id': data.message[0].item_id,
                'item_name': data.message[0].item_name,
                'item_description': data.message[0].item_description,
                'item_price': data.message[0].item_price,
                'quantity': data.message[0].quantity
            }
            this.setState({
                item: item
            })
        })
    }
    render() {
        return (
            <div className="cartItemContainer">
                <h2>Cart Items</h2>
                <CartItemCard item={this.props.item} />
                <CartItemCard item={this.props.item} />
            </div>
        );
    }
}
