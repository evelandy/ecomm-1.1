import React from 'react';
import '../styles/cartCheckout.css';

export default class CartTotal extends React.Component{
    state = {
        itemTotal: '0.00'
    }
    render() {
        return (
            <div>
                <div className="cartTotalContainer">
                    <h2>Cart Total</h2>
                    <h3><span>Item Total:</span> <span>${this.state.itemTotal}</span></h3>
                    <h3><span>Shipping:</span> <span>$0.00</span></h3>
                    {/* <h3><span>SubTotal:</span> <span>$0.00</span></h3> */}
                    <h3><span>Tax:</span> <span>$0.00</span></h3>
                    <h3 className="split"><span>Promos/Codes:</span> <span>-$0.00</span></h3>

                    <h3><span>Total:</span> <span>$0.00</span></h3>                    
                </div>
                <span className="promoContainer">
                    Promo/Discount:
                    <div className="promoContent">
                        {/* <label htmlFor="promos">Promo/Discount:</label> */}
                        <input id='promos' name='promos' type="text" />
                        {/* <input type='submit' name='submit'/> */}
                        <button>Submit</button>
                    </div>
                </span>
            </div>
        );
    }
}
