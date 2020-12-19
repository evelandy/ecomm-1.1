import React, { Fragment } from 'react';
import './styles/app.css';
import {
    BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import Banner from './header/Banner';
import NavContainer from './header/NavContainer';
import FeaturedBuilds from './main/FeaturedBuilds';
import FeaturedParts from './main/FeaturedParts';
import CheckoutCart from './cart/CheckoutCart.js';

export default function App() {
    return (
        <Router>
            <div className='appContainer'>
                <span>
                    <NavContainer />
                </span>
                <Switch>
                    <Route exact path="/" render={props => 
                    <Fragment>
                        <Banner msg={'Search all of our brands and services by category'} />
                        <FeaturedBuilds />
                        <FeaturedParts />
                    </Fragment>} />
                    <Route path='/checkoutCart' render={props => 
                    <Fragment>
                        <Banner msg={'Checkout'} />
                        <CheckoutCart />
                    </Fragment>
                    }/>
                </Switch>
            </div>
        </Router>
    );
}
