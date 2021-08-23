import React from 'react'

import './styles.scss'
import { ICar } from '../../interfaces/carsInterfaces'
import Car from './car'

interface Props {
  cars: Array<ICar>
}

export default function CarsList(props: Props) {
  return (
    <ul className='cars-list'>
      {
        props.cars.map((car, i) => (
          <Car car={car} key={i} />
        ))
      }
    </ul>
  )
}
