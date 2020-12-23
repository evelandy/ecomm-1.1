import React from 'react';
import '../styles/cartCheckout.css';

export default class CartTotal extends React.Component{
    state = {
        itemTotal: '0.00',
        showPromo: false,
        promo: ''
    }
    showPromoClick = () => {
        this.setState({
            showPromo: !this.showPromo
        })
    }
    // getCartInfo = () => {
    //     fetch('http://127.0.0.1:5000/api/v1/cart')
    //     .then((res) => {
    //         let data = res.json();
    //         return data;
    //     })
    //     .then((data) => {
    //         let item = {
    //             'id': data.message[0].id,
    //             'item_id': data.message[0].item_id,
    //             'item_name': data.message[0].item_name,
    //             'item_description': data.message[0].item_description,
    //             'item_price': data.message[0].item_price,
    //             'quantity': data.message[0].quantity
    //         }
    //         this.setState({
    //             item: item
    //         })
    //     })
    // }
    // componentDidMount() {
    //     this.getCartInfo()
    // }
    calculateShipping = () => {
        let shipping;
        if(this.props.item['item_price'] >= 200) {
            shipping = '0.00'
        } else {
            shipping = 19.99
        }
        return shipping;
    }
    calculateTax = () => {
        let tax = this.props.item['item_price'] * 0.0825;
        return tax.toFixed(2);
    }
    calculateTotal = () => {
        let promoCode;
        if (this.state.promo === '10OFF' || this.state.promo === '10off') {
            promoCode = .10
        } else {
            promoCode = 0
        }
        let shipping;
        promoCode = promoCode * this.props.item['item_price'];
        if(this.props.item['item_price'] >= 200){
            shipping = 0.00
        } else {
            shipping = 19.99
        }
        let promoTotal = this.props.item['item_price'] - promoCode;
        let shippedTotal = promoTotal + shipping;
        let tax = this.calculateTax();
        let taxedTotal = shippedTotal + parseFloat(tax);
        return taxedTotal;
    }
    // validPromoCodes = () => {
    //     let promoCode;
    //     if (this.state.promo === '10OFF' || this.state.promo === '10off') {
    //         promoCode = .10
    //     } else {
    //         promoCode = 0
    //     }
    //     return promoCode;
    // }
    handleChange = (e) => {
        this.setState({promo: e.target.value})
    }
    noneCart = () => {
        return (
            <div className="cartTotalContainer">
                <h2>Cart Total</h2>
                <h3><span>Item Total:</span> <span>$0.00</span></h3>
                <h3><span>Shipping:</span> <span>$0.00</span></h3>
                <h3 className="split"><span>Tax:</span> <span>$0.00</span></h3>
                <h3><span>Total:</span> <span>$0.00</span></h3>                    
            </div>
        );
    }
    render() {
        return (
            <div>
                {this.props.item['item_price'] == undefined
                ?
                this.noneCart()
                :
                <div className="cartTotalContainer">
                    <h2>Cart Total</h2>
                    <h3><span>Item Total:</span> <span>${(this.props.item['item_price'] * this.props.item['quantity'])}</span></h3>
                    <h3><span>Shipping:</span> <span>${this.calculateShipping()}</span></h3>
                    {/* <h3><span>SubTotal:</span> <span>$0.00</span></h3> */}
                    <h3 className="split"><span>Tax:</span> <span>${this.calculateTax()}</span></h3>
                    {/* <h3><span>Promos/Codes:</span> <span>-$0.00</span></h3> */}

                    <h3><span>Total:</span> <span>${this.calculateTotal()}</span></h3>                    
                </div>
                }
            </div>
        );
    }
}


// below code goes above final closing div to include promo code.

// {this.state.showPromo === true 
//     ? 
//     <div className="promoContainer">
//         Promo/Discount:
//         <div className="promoContent">
//             {/* <label htmlFor="promos">Promo/Discount:</label> */}
//             <input onChange={this.handleChange} id='promos' name='promos' type="text" />
//             {/* <input type='submit' name='submit'/> */}
//             <button onClick={this.calculateTotal}>Submit</button>
//         </div>
//     </div>    
//     :
//     <div className="promoContainer" onClick={this.showPromoClick}>Promo code click [HERE]</div>
// }