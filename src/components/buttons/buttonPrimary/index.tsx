import React from 'react'

import './styles.scss'

interface Props {
  children: string,
  isDisable?: boolean,
  isRed?: boolean,
  onClick?: () => void
}

export default function ButtonPrimary(props: Props) {
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    props.onClick!()
  }

  return (
    <button
      className={`button-primary
      ${props.isDisable && '-disable'}
      ${props.isRed && 'button-primary-red'}`}
      disabled={props.isDisable}
      onClick={(e) => handleButtonClick(e)}
    >
      { props.children }
    </button>
  )
}
