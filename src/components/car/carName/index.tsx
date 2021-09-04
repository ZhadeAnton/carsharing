import React from 'react'

import './styles.scss'
import { ICarFromServer } from '../../../interfaces/carsInterfaces'

interface Props {
  carName: ICarFromServer['categoryId']['name'] | undefined
}

export default function CarName(props: Props) {
  return (
    <h5 className='car-name'>
      { props.carName }
    </h5>
  )
}
