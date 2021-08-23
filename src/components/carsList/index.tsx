import React, { useState } from 'react'

import './styles.scss'
import { ICar } from '../../interfaces/carsInterfaces'
import Car from './car'

interface Props {
  cars: Array<ICar>
}

export default function CarsList(props: Props) {
  const [selected, setSelected] = useState<ICar>()

  const handleSelect = (car: ICar) => {
    setSelected(car)
  }

  return (
    <ul className='cars-list'>
      {
        props.cars.map((car, i) => (
          <Car
            key={i}
            car={car}
            selected={selected === car}
            onSelectCart={handleSelect}
          />
        ))
      }
    </ul>
  )
}
