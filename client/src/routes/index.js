import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import ProductDetailsPage from '../components/ProductDetailsPage';

export default () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/product/:id' component={ProductDetailsPage} />
  </Switch>
);
