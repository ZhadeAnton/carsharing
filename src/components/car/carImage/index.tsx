import React from 'react'

import './styles.scss'
import DefaultCar from '../../../assets/PNG/default-car.png'

interface Props {
  carImage: string | undefined
}

export default function CarImage(props: Props) {
  const image = props.carImage?.includes('/files') ? DefaultCar : props.carImage

  return (
    <div className='car-image-wrapper'>
      <img
        src={image}
        alt='car'
        className='car-image-wrapper__image'
      />
    </div>
  )
}
