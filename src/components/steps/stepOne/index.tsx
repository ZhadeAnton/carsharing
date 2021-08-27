import React from 'react'

import './styles.scss'
import OrderInfo from '../../forms/orderInfo'
import CustomMap from '../../map'

export default function StepOne() {
  const orderFields = [{title: 'Пункт выдачи', value: 'Ульяновск, Наримова 42'}]

  return (
    <section className='step-one step'>
      <div className='step-one__left step__left'>
        <div className='step-one__left--map'>
          <CustomMap />
        </div>
      </div>

      <div className='step-one__right step__right'>
        <OrderInfo
          orderFields={orderFields}
          lowPrice={8000}
          highPrice={12000}
        />
      </div>
    </section>
  )
}
