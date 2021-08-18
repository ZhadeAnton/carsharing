import React from 'react'

import './styles.scss'

interface Props {
  children: string,
  onClick?: () => void
}

export default function ButtonPrimary(props: Props) {
  return (
    <button
      className='button-primary'
      onClick={props.onClick}
    >
      { props.children }
    </button>
  )
}
