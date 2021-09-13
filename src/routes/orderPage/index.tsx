import React, { useEffect } from 'react'

import './styles.scss'
import { useAppSelector } from '../../hooks/usePreTypedHook';
import useHistoryPush from '../../hooks/useHistory';
import Aside from '../../components/aside'
import Header from '../../components/header'
import OrderPageTabs from '../../components/orderPageTabs';

export default function OrderPage() {
  const redirect = useHistoryPush()
  const state = useAppSelector((state) => state)

  const carOrderId = localStorage.getItem('carOrderId')
  const isLoading = state.order.isLoading

  useEffect(() => {
    if (carOrderId) redirect(`/order/${carOrderId}`)
  }, [carOrderId])

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
