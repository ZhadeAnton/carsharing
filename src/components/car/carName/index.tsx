import React from 'react'

import './styles.scss'
import { ICar } from '../../../interfaces/carsInterfaces'

interface Props {
  carName: ICar['name'] | undefined
}

export default function CarName(props: Props) {
  return (
    <h5 className='car-name'>
      { props.carName }
    </h5>
  )
}
