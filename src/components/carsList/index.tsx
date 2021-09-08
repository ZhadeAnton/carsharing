import React from 'react'

import './styles.scss'
import { ICar } from '../../interfaces/carsInterfaces'
import DefaultCar from '../../assets/PNG/default-car.png'
import Car from './carItem'

interface Props {
  cars: Array<ICar>,
  selectedCarId: ICar['id'] | undefined,
  onSelectCar: (car: ICar) => void
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
            selected={props.selectedCarId === car.id}
            onSelectCart={props.onSelectCar}
          />
        })
      }
    </ul>
  )
}
