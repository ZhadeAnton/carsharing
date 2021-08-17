import React from 'react'

import './styles.scss'
import { ReactComponent as Marker } from '../../assets/SVG/marker.svg'

export default function LocationPicker() {
  return (
    <div className='location-picker'>
      <Marker />

      <h6 className='location-picker__town'>
        Ульяновск
      </h6>
    </div>
  )
}
