import React from 'react'

import './styles.scss'
import { ICarFromServer } from '../../../interfaces/carsInterfaces'

interface Props {
  carPlatesNumber: ICarFromServer['number'] | undefined
}

export default function CarPlatesNumber(props: Props) {
  return (
    <div className='car-plates'>
      <h5 className='car-plates__number'>
        { props.carPlatesNumber }
      </h5>
    </div>
  )
}
