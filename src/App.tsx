import React from 'react';
import { Switch, Route } from 'react-router-dom'

import MainPage from './routes/mainPage';
import OrderPage from './routes/orderPage';

export default function App() {
  return (
    <Switch>
      <Route exact path='/' component={MainPage} />
      <Route exact path='/order' component={OrderPage} />
    </Switch>
  );
}
