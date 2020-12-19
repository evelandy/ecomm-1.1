import React from 'react';
import '../styles/cartCheckout.css';
import CartItems from './CartItems';
import CartTotal from './CartTotal';

export default class CheckoutCart extends React.Component{
    state = {
        item: []
    }
    showCart = () => {
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
        .catch((err) => {
            let emptyItem = {
                'item_id': '0000',
                'item_name': 'cart is empty',
                'item_description': ' ',
                'item_price': '0.00',
                'quantity': '0'
            }
            this.setState({
                item: emptyItem
            })
        })
    }
    componentDidMount() {
        this.showCart()
    }
    render() {
        return (
            <div className='cartContainer'>
                <CartItems />
                <CartTotal />
            </div>
        );
    }
}
