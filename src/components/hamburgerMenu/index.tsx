import React from 'react'

import './styles.scss'
import useToggle from '../../hooks/useToggle'

export default function HamburgerMenu() {
  const [isActive, setIsActive] = useToggle()

  return (
    <div
      className='hamburger-menu'
      onClick={setIsActive}
    >
      <span className={`hamburger-menu__line
        ${isActive ? 'hamburger-menu__line-change' : ''}`}>
      </span>

      <span className={`hamburger-menu__line
        ${isActive ? 'hamburger-menu__line-change' : ''}`}>
      </span>

      <span className={`hamburger-menu__line
        ${isActive ? 'hamburger-menu__line-change' : ''}`}>
      </span>
    </div>
  )
}
