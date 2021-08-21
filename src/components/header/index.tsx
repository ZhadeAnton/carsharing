import React from 'react'

import './styles.scss'
import useHistory from '../../hooks/useHistory'
import LocationPicker from '../locationPicker/indes'

export default function Header() {
  const history = useHistory()

  return (
    <header className='header'>
      <h3
        className='header__title'
        onClick={() => history('/')}
      >
        Need for drive
      </h3>

      <LocationPicker />
    </header>
  )
}
