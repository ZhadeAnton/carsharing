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
      data-testid='hamburger-menu'
    >
      <span
        className={`hamburger-menu__line
          ${props.isOpen ? 'hamburger-menu__line-change' : ''}`}
        data-testid='hamburger-line'
      >
      </span>

      <span
        className={`hamburger-menu__line
          ${props.isOpen ? 'hamburger-menu__line-change' : ''}`}
        data-testid='hamburger-line'
      >
      </span>

      <span
        className={`hamburger-menu__line
          ${props.isOpen ? 'hamburger-menu__line-change' : ''}`}
        data-testid='hamburger-line'
      >
      </span>
    </div>
  )
}
