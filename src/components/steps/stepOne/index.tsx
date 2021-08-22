import React from 'react'

import './styles.scss'
import SearchLocationForm from '../../forms/locationForm'
import OrderInfo from '../../forms/orderInfo'
import GoogleMap from '../../googleMap'

const location = {
  address: 'Ульяновск',
  lat: 54.3187,
  lng: 48.3978,
}

export default function StepOne() {
  return (
    <section className='step-one step'>
      <div className='step-one__left step__left'>
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

      <div className='step-one__right step__right'>
        <OrderInfo />
      </div>
    </section>
  )
}
