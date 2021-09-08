import React, { useEffect } from 'react'

import './styles.scss'
import { useAppDispatch, useAppSelector } from '../../hooks/usePreTypedHook';
import { getOrderById } from '../../redux/order/orderActionCreators';
import Aside from '../../components/aside'
import Header from '../../components/header'
import OrderConfirmed from '../../components/orderConfirmed';
import OrderPageTabs from '../../components/orderPageTabs';

export default function OrderPage() {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)

  const carOrderId = localStorage.getItem('carOrderId')
  const orderId = state.order.confirmedOrder?.id
  const isLoading = state.order.isLoading
  const isOrderConfirmed = state.order.isOrderConfirmed

  useEffect(() => {
    if (carOrderId) dispatch(getOrderById(carOrderId))
  }, [])

  if (isLoading) return <main className='order-page' />

  return (
    <main className='order-page'>
      <div className='order-page__aside'>
        <Aside />
      </div>

      <section className='order-page__main'>
        <div className='order-page__header container'>
          <Header />
        </div>

        {!isOrderConfirmed
            ? <OrderPageTabs />
            : (
            <div className='order-page__header-row'>
              <div className='order-page__header-row--wrapper'>
                <h6 className='order-page__header-row--title container'>
                    Заказ номер { orderId }
                </h6>
              </div>

              <OrderConfirmed />
            </div>
          )}
      </section>
    </main>
  )
}
