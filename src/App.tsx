import React from 'react';
import { Switch, Route } from 'react-router-dom'

import useToggle from './hooks/useToggle';
import MainPage from './routes/mainPage';
import OrderPage from './routes/orderPage';
import HamburgerMenu from './components/hamburgerMenu';
import OverlayMenu from './components/overlayMenu';

export default function App() {
  const [isOpen, setIsOpen] = useToggle(false)

  return (
    <>
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/order' component={OrderPage} />
      </Switch>

      <HamburgerMenu
        isOpen={isOpen}
        onClickByMenu={setIsOpen}
      />

      { isOpen && <OverlayMenu /> }
    </>
  );
}
