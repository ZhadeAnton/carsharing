import React from 'react'

import './styles.scss'
import { ICar } from '../../interfaces/carsInterfaces'
import Car from './car'

interface Props {
  cars: Array<ICar>,
  selected: ICar | undefined,
  onSelectCar: (car: ICar) => void
}

export default function CarsList(props: Props) {
  return (
    <ul className='cars-list'>
      {
        props.cars.map((car, i) => (
          <Car
            key={i}
            car={car}
            selected={props.selected === car}
            onSelectCart={props.onSelectCar}
          />
        ))
      }
    </ul>
  )
}
