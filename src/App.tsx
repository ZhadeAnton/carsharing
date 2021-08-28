import React from 'react';
import { Switch, Route } from 'react-router-dom'

import MainPage from './routes/mainPage';
import OrderPageContainer from './containers/orderPage/orderPageContainer';

export default function App() {
  return (
    <Switch>
      <Route exact path='/' component={MainPage} />
      <Route exact path='/order' component={OrderPageContainer} />
    </Switch>
  );
}
