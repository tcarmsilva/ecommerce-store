import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import Product from './pages/Product';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';
import Profile from './pages/Profile';
import Categories from './pages/Categories';

function Routes () {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/product" component={Product} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/payment" component={Payment} />
                <Route path="/profile" component={Profile} />
                <Route path="/categories/electronics" render={(props) => {
                    return <Categories category='electronics' {...props}/>
                }} />
                <Route path="/categories/jewelery" render={(props) => {
                    return <Categories category='jewelery' {...props}/>
                }} />
                <Route path="/categories/men-clothing" render={(props) => {
                    return <Categories category='menSClothing' {...props}/>
                }} />
                <Route path="/categories/women-clothing" render={(props) => {
                    return <Categories category='womens-clothing' {...props}/>
                }} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;