import React from 'react'

import './styles.scss'
import LocationPicker from '../locationPicker/indes'

export default function Header() {
  return (
    <header className='header'>
      <h3 className='header__title'>
        Need for drive
      </h3>

      <LocationPicker />
    </header>
  )
}
