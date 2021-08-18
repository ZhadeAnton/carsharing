import React from 'react'

import './styles.scss'
import SocialList from '../socialList'
import NavMenuList from '../navMenuList'

export default function OverlayMenu() {
  return (
    <section className='overlay-menu'>
      <section className='overlay-menu__left-section'>
        <NavMenuList />

        <SocialList />
      </section>

      <section className='overlay-menu__right-section'>
      </section>
    </section>
  )
}
