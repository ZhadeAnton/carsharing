import React from 'react'

import './styles.scss'

interface Props {
  children: string,
  isDisable: boolean,
  onClick?: () => void
}

export default function ButtonPrimary(props: Props) {
  // eslint-disable-next-line max-len
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    props.onClick!()
  }

  return (
    <button
      className={`button-primary ${props.isDisable && '-disable'}`}
      disabled={props.isDisable}
      onClick={(e) => handleButtonClick(e)}
    >
      { props.children }
    </button>
  )
}
