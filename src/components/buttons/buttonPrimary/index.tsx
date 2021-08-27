import React from 'react'

import './styles.scss'

interface Props {
  children: string,
  isDisable: boolean,
  onClick?: () => void
}

export default function ButtonPrimary(props: Props) {
  return (
    <button
      className={`button-primary ${props.isDisable && '-disable'}`}
      disabled={props.isDisable}
      onClick={props.onClick}
    >
      { props.children }
    </button>
  )
}
