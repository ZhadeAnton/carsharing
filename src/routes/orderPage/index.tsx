import React from 'react'

import './styles.scss'
import useOrderPageContainer from './useOrderPageContainer'
import Aside from '../../components/aside'
import Header from '../../components/header'
import OrderConfirmed from '../../components/orderConfirmed';
import OrderPageTabs from '../../components/orderPageTabs';

export default function OrderPage() {
  const orderPageContainer = useOrderPageContainer()

  return (
    <main className='order-page'>
      <div className='order-page__aside'>
        <Aside />
      </div>

      <section className='order-page__main'>
        <div className='order-page__header container'>
          <Header />
        </div>

        {!orderPageContainer.isOrderConfirmed
          ? <OrderPageTabs />
          : (
            <div className='order-page__header-row'>
              <div className='order-page__header-row--wrapper'>
                <h6 className='order-page__header-row--title container'>
                  Заказ номер { orderPageContainer.orderNumber }
                </h6>
              </div>

              <OrderConfirmed />
            </div>
          )}
      </section>
    </main>
  )
}
