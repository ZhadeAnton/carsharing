import React from 'react'

import './styles.scss'
import SearchLocationForm from '../../forms/locationForm'
import OrderInfo from '../../forms/orderInfo'
import CustomMap from '../../map'

export default function StepOne() {
  return (
    <section className='step-one step'>
      <div className='step-one__left step__left'>
        <SearchLocationForm />

        <h6 className='step-one__left--title'>
          Выбрать на карте:
        </h6>

        <div className='step-one__left--map'>
          <CustomMap />
        </div>
      </div>

      <div className='step-one__right step__right'>
        <OrderInfo />
      </div>
    </section>
  )
}
