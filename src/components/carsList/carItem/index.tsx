import React from 'react'

import './styles.scss'
import { ICar } from '../../../interfaces/carsInterfaces'
import CarPrice from '../../car/carPrice'

interface Props {
  car: ICar,
  style?: any,
  selected?: boolean,
  onSelectCart: (car: ICar) => void
}

export default function Car(props: Props) {
  return (
    <div
      style={props.style}
      className={`car-item${props.selected ? '-selected' : ''}`}
      onClick={() => props.onSelectCart(props.car)}
    >
      <div className='car-item__header'>
        <h6 className='car-item__header--title'>
          {props.car.name}
        </h6>

        <CarPrice
          lowPrice={props.car.priceMin}
          highPrice={props.car.priceMax}
        />
      </div>

      <div className='car-item__image-wrapper'>
        <img
          className='car-item__image-wrapper--image'
          src={props.car.thumbnail.path}
          alt={props.car.name}
        />
      </div>
    </div>
  )
}
