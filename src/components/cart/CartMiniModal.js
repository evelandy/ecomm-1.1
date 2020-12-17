import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/cartMiniModal.css';

export default class CartMiniModal extends React.Component {
    state = {
        id: '',
        item_id: '',
        item_name: '',
        item_description: '',
        item_price: '',
        quantity: '',
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
            <div className="miniModalContainer">
                <h2>Shopping Cart</h2>
                <div className="miniModalName">
                    {this.state.item['item_name']}
                </div>
                <div className="miniModalDesc">
                    {this.state.item['item_description']}
                </div>
                <div className="miniModalPrice">
                    {`Cost: $${this.state.item['item_price']}(${this.state.item['quantity']})`}
                </div>
                <div className="miniModalTotal">
                    {`Total: $${this.state.item['quantity'] * this.state.item['item_price']}`}
                </div>
                <div className="miniModalDel">
                    <span>remove item(s)</span>
                    <button>X</button>
                </div>
                <Link className="checkOutBtn" to='/checkoutCart'>CheckOut</Link>
                {/* <button onClick={this.toCart}>CheckOut</button> */}
            </div>
        );
    }
}
