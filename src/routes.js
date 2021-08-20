import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import Product from './pages/Product';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';
import Profile from './pages/Profile';

function Routes () {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/product" component={Product} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/payment" component={Payment} />
                <Route path="/profile" component={Profile} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;