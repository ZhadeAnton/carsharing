import React from 'react'

import './styles.scss'
import { ICar } from '../../../interfaces/carsInterfaces'

interface Props {
  carImage: ICar['thumbnail']['path'] | undefined
}

export default function CarImage(props: Props) {
  return (
    <div className='car-image-wrapper'>
      <img
        src={props.carImage}
        alt='car'
        className='car-image-wrapper__image'
      />
    </div>
  )
}
