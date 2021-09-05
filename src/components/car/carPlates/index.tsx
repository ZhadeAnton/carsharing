import React from 'react'

import './styles.scss'
import { ICar } from '../../../interfaces/carsInterfaces'
import { parseCarNumber } from '../../../utils/carsUtils'

interface Props {
  carPlatesNumber: ICar['number'] | undefined
}

export default function CarPlatesNumber(props: Props) {
  return (
    <div className='car-plates'>
      <h5 className='car-plates__number'>
        { parseCarNumber(props.carPlatesNumber) }
      </h5>
    </div>
  )
}
