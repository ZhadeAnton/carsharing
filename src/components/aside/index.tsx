import React from 'react'

import './styles.scss'
import HamburgerMenu from '../hamburgerMenu'
import LanguagePicker from '../languagePicker'

export default function Aside() {
  return (
    <aside className='aside'>
      <HamburgerMenu />

      <LanguagePicker />
    </aside>
  )
}
