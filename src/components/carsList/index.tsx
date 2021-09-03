import React from 'react'

import './styles.scss'
import { ICarFromServer } from '../../interfaces/carsInterfaces'
import DefaultCar from '../../assets/PNG/default-car.png'
import Car from './carItem'

interface Props {
  cars: Array<ICarFromServer>,
  selected: ICarFromServer | null,
  onSelectCar: (car: ICarFromServer) => void
}

export default function CarsList(props: Props) {
  return (
    <ul className='cars-list'>
      {
        props.cars.map((car, i) => {
          if (car.thumbnail.path.includes('/files')) {
            car.thumbnail.path = DefaultCar
          }

          return <Car
            key={i}
            car={car}
            selected={props.selected === car}
            onSelectCart={props.onSelectCar}
          />
        })
      }
    </ul>
  )
}
