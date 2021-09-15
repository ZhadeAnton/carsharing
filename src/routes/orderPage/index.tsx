import React, { useEffect } from 'react'

import './styles.scss'
import { useAppDispatch, useAppSelector } from '../../hooks/usePreTypedHook';
import { getTowns, getPickUps } from '../../redux/location/locationActionCreators';
import useHistoryPush from '../../hooks/useHistory';
import Aside from '../../components/aside'
import Header from '../../components/header'
import OrderPageTabs from '../../components/orderPageTabs';

export default function OrderPage() {
  const redirect = useHistoryPush()
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)

  const confirmedOrderIdFromLS = localStorage.getItem('carOrderId')
  const confirmedOrderId = state.order.confirmedOrder?.id ?? confirmedOrderIdFromLS
  const isLoading = state.order.isLoading

  useEffect(() => {
    dispatch(getTowns())
    dispatch(getPickUps())
  }, [])

  useEffect(() => {
    if (confirmedOrderId) redirect(`/order/${confirmedOrderId}`)
  }, [confirmedOrderId])

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

        <OrderPageTabs />
      </section>
    </main>
  )
}
