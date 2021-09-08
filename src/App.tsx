import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Spin from 'antd/lib/spin';

import { useAppSelector } from './hooks/usePreTypedHook';
import useToggle from './hooks/useToggle';
import MainPage from './routes/mainPage';
import OrderPage from './routes/orderPage';
import HamburgerMenu from './components/hamburgerMenu';
import OverlayMenu from './components/overlayMenu';

export default function App() {
  const state = useAppSelector((state) => state)
  const [isOpen, setIsOpen] = useToggle(false)

  const isOrderLoading = state.order.isLoading
  const isCarLoading = state.car.isLoading

  return (
    <>
      <Spin tip="Loading" spinning={isOrderLoading || isCarLoading}>

        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/order' component={OrderPage} />
        </Switch>

        <HamburgerMenu
          isOpen={isOpen}
          onClickByMenu={setIsOpen}
        />

        { isOpen && <OverlayMenu /> }
      </Spin>
    </>
  );
}
