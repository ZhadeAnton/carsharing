import React from 'react'

import './styles.scss'
interface Props {
  children: string,
  backgroundColor: string
}

export default function ButtonSecondary(props: Props) {
  return (
    <button
      className='button-secondary'
      style={{background: props.backgroundColor}}
    >
      { props.children }
    </button>
  )
}
