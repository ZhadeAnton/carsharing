import React from 'react'

import './styles.scss'
import { socialList } from '../../utils/overlayUtils'

export default function SocialList() {
  return (
    <ul className='social-list'>
      {
        socialList.map((Icon, i) => (
          <li
            key={i}
            className='social-list__item'
          >
            <a
              href="#"
              className='social-list__item--link'
            >
              <Icon className='social-list__item--icon'/>
            </a>
          </li>
        ))
      }
    </ul>
  )
}
