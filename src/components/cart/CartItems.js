import React from 'react';
import '../styles/cartCheckout.css';
import CartItemCard from './CartItemCard';

export default class CartItems extends React.Component{
    state = {
        data: '',
        item: [],
        itemList: []
    }
    getCartInfo = () => {
        fetch('http://127.0.0.1:5000/api/v1/cart')
        .then((res) => {
            let data = res.json();
            return data;
        })
        .then((data) => {
            this.setState({
                data: data.message
            })
        })
        .then(() => {

//  ``````````                LEFT OFF HERE!!!!!!!!!!!!!!

            let output = {}
            let dataLength = this.state.data.length
            for(let i = 0; i < dataLength; i ++){
                let id = this.state.data[i].id
                output['id'] = id 
                let item_id = this.state.data[i].item_id
                output['item_id'] = item_id
                let item_name = this.state.data[i].item_name
                output['item_name'] = item_name
                let item_description = this.state.data[i].item_description
                output['item_description'] = item_description
                let item_price = this.state.data[i].item_price
                output['item_price'] = item_price
                let quantity = this.state.data[i].quantity
                output['quantity'] = quantity
            }
            this.setState({
                item: output
            })
        })
    }
    componentDidMount() {
        this.getCartInfo()
    }
    showCards() {
        for(let i = 0; i < this.state.item.length; i ++){
            <CartItemCard item={this.state.item[i]} />
        }
    }
    render() {
        return (
            <div className="cartItemContainer">
                {console.log(this.state.item)}
                <h2>Cart Items</h2>
                {this.showCards()}
                {/* <CartItemCard item={this.state.item} /> */}
            </div>
        );
    }
}
