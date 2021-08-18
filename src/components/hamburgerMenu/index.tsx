import React from 'react'

import './styles.scss'

interface Props {
  isOpen: boolean,
  onClickByMenu: () => void
}

export default function HamburgerMenu(props: Props) {
  const handleClick = () => {
    props.onClickByMenu()
  }

  return (
    <div
      className='hamburger-menu'
      onClick={handleClick}
    >
      <span className={`hamburger-menu__line
        ${props.isOpen ? 'hamburger-menu__line-change' : ''}`}>
      </span>

      <span className={`hamburger-menu__line
        ${props.isOpen ? 'hamburger-menu__line-change' : ''}`}>
      </span>

      <span className={`hamburger-menu__line
        ${props.isOpen ? 'hamburger-menu__line-change' : ''}`}>
      </span>
    </div>
  )
}
