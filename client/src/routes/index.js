import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import ProductDetailsPage from '../components/ProductDetailsPage';
import CartPage from '../components/CartPage';
import Signin from '../components/Signin';

export default () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/product/:id' component={ProductDetailsPage} />
    <Route path='/cart/:id?' component={CartPage} />
    <Route path='/signin' component={Signin} />
  </Switch>
);
