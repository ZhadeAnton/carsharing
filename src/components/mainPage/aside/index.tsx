import React from 'react'

import './styles.scss'
import HamburgerMenu from '../../hamburgerMenu'
import LanguagePicker from '../../languagePicker'

export default function MainAside() {
  return (
    <aside className='main-aside'>
      <HamburgerMenu />

      <LanguagePicker />
    </aside>
  )
}
