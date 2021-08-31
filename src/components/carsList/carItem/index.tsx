import React from 'react'

import './styles.scss'
import { ICar } from '../../../interfaces/carsInterfaces'
import CarPrice from '../../car/carPrice'

interface Props {
  car: ICar,
  selected?: boolean,
  onSelectCart: (car: ICar) => void
}

export default function Car(props: Props) {
  return (
    <div
      className={`car-item${props.selected ? '-selected' : ''}`}
      onClick={() => props.onSelectCart(props.car)}
    >
      <div className='car-item__header'>
        <h6 className='car-item__header--title'>
          {props.car.carName}
        </h6>

        <CarPrice
          lowPrice={props.car.lowPrice}
          highPrice={props.car.highPrice}
        />
      </div>

      <div className='car-item__image-wrapper'>
        <img
          className='car-item__image-wrapper--image'
          src={props.car.carImage}
          alt={props.car.carName}
        />
      </div>
    </div>
  )
}
