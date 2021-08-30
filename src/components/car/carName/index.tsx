import React from 'react'

import './styles.scss'
import { ICar } from '../../../interfaces/carsInterfaces'

interface Props {
  carModel: ICar['carModel'] | undefined,
  carName: ICar['carName'] | undefined
}

export default function CarName(props: Props) {
  return (
    <h5 className='car-name'>
      { `${props.carModel}, ${props.carName}` }
    </h5>
  )
}
