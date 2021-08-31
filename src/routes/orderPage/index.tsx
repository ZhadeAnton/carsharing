import React from 'react'

import './styles.scss'
import { IOrderPageContainer } from '../../containers/orderPage/orderPageInterfaces';
import useToggle from '../../hooks/useToggle'
import Aside from '../../components/aside'
import HamburgerMenu from '../../components/hamburgerMenu'
import OverlayMenu from '../../components/overlayMenu'
import Header from '../../components/header'
import OrderConfirmed from '../../components/orderConfirmed';
import OrderPageTabs from '../../components/orderPageTabs';

export default function OrderPage(props: IOrderPageContainer) {
  const [isMenuOpen, setIsMenuOpen] = useToggle(false)

  return (
    <main className='order-page'>
      <div className='order-page__aside'>
        <Aside />
      </div>

      <section className='order-page__main'>
        <div className='order-page__header container'>
          <Header />
        </div>

        {!props.isOrder
          ? <OrderPageTabs {...props}/>
          : (
            <div className='order-page__header-row'>
              <div className='order-page__header-row--wrapper'>
                <h6 className='order-page__header-row--title container'>
                  Заказ номер { props.orderNumber }
                </h6>
              </div>

              <OrderConfirmed
                selectedCar={props.selectedCar}
                dateFrom={props.dateFrom}
                totalPriceOfSelectedCar={props.totalPriceOfSelectedCar}
                stepFourOrderFields={props.stepFourOrderFields}
                isFullTank={props.isFullTank}
              />
            </div>
          )}
      </section>

      <HamburgerMenu
        isOpen={isMenuOpen}
        onClickByMenu={setIsMenuOpen}
      />

      { isMenuOpen && <OverlayMenu /> }
    </main>
  )
}
