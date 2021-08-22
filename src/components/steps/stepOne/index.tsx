import React from 'react'

import './styles.scss'
import SearchLocationForm from '../../forms/locationForm'
import OrderInfo from '../../forms/orderInfo'
import GoogleMap from '../../googleMap'

export default function StepOne() {
  return (
    <section className='step-one'>
      <div className='step-one__left'>
        <SearchLocationForm />

        <h6 className='step-one__left--title'>
          Выбрать на карте:
        </h6>

        <div className='step-one__left--map'>
          <GoogleMap
            location={location}
            zoomLevel={13}
          />
        </div>
      </div>

      <div className='step-one__right'>
        <OrderInfo />
      </div>
    </section>
  )
}
