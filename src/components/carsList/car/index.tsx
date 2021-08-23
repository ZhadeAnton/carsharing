import React from 'react'

import './styles.scss'
import { ICar } from '../../../interfaces/carsInterfaces'

interface Props {
  car: ICar
}

export default function Car(props: Props) {
  return (
    <div className='car-item'>
      <div className='car-item__header'>
        <h6 className='car-item__header--title'>
          {props.car.carName}
        </h6>

        <div className='car-item__header--price'>
          <h6>{props.car.lowPrice}</h6>
          <h6>{props.car.highPrice}</h6>
        </div>
      </div>

      <div>
        <img src={props.car.carImage} alt={props.car.carName} />
      </div>
    </div>
  )
}
