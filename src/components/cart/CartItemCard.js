import React from 'react';
import '../styles/cartCheckout.css';

export default class CartItemCard extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            quant: 1,
            price: '0.00',
            name: 'Item Name',
            description: 'Item Description'
        }
    }
    // state = {
    //     quant: 1,
    //     price: '0.00',
    //     name: 'Item Name',
    //     description: 'Item Description'
    // }
    add = () => {
        this.setState({
            quant: this.state.quant + 1
        })
    }
    sub = () => {
        if (this.state.quant == 0){
            this.setState({
                quant: 0
            })
        } else {
            this.setState({
                quant: this.state.quant - 1
            })
        }
    }
    removeItem = () => {
        fetch(`http://127.0.0.1:5000/api/v1/remove/${this.props.item['item_id']}`, {
            method: 'DELETE'
        })
        .then((res) => {
            let data = res.json();
            return data;
        })
        .then((data) => {
            this.refreshPage()
            console.log(data)
        })
    }
    refreshPage = () => {
        window.location.reload(false)
    }
    render() {
        return (
            <div className="cartItemCardContainer">
                <span>
                    <span>
                        <h4>{this.props.item['item_name']}</h4>
                        <h5>{this.state.description}</h5>
                    </span>
                    <span className="addRemove">
                        <button onClick={this.add}>+</button>
                        <h3>{this.state.quant}</h3>
                        <button onClick={this.sub}>-</button>
                    </span>
                </span>
                <div>
                    <span>
                        <button>Update</button>
                        <button onClick={this.removeItem}>Remove</button>
                        <button>Wishlist Item</button>
                    </span>
                    <h3>${this.state.price} / each</h3>
                </div>
            </div>
        );
    }
}
