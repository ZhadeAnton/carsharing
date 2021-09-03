import React from 'react'

import './styles.scss'
import { ICarFromServer } from '../../../interfaces/carsInterfaces'
import CarPrice from '../../car/carPrice'

interface Props {
  car: ICarFromServer,
  selected?: boolean,
  onSelectCart: (car: ICarFromServer) => void
}

export default function Car(props: Props) {
  return (
    <div
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
