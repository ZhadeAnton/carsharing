import React from 'react'

import './styles.scss'
import SocialList from '../socialList'
import NavMenuList from '../navMenuList'
import LanguagePicker from '../languagePicker'

export default function OverlayMenu() {
  return (
    <section className='overlay-menu'>
      <section className='overlay-menu__left-section'>
        <div className='overlay-menu__left-section--wrapper'>
          <NavMenuList />

          <SocialList />
        </div>

        <div className='overlay-menu__language-picker'>
          <LanguagePicker />
        </div>
      </section>

      <section className='overlay-menu__right-section'>
      </section>
    </section>
  )
}
