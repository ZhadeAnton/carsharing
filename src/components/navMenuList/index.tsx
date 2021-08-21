import React from 'react'

import './styles.scss'
import { overlayMenu } from '../../utils/overlayUtils'

export default function NavMenuList() {
  return (
    <ul className='nav-menu'>
      {
        overlayMenu.map((link) => (
          <li
            key={link}
            className='nav-menu__item'
          >
            <a
              href='#'
              className='nav-menu__item--link'
            >
              { link }
            </a>
          </li>
        ))
      }
    </ul>
  )
}
