import React from 'react'

import './styles.scss'

interface Props {
  children: string
}

export default function ButtonPrimary(props: Props) {
  return (
    <button className='button-primary'>
      { props.children }
    </button>
  )
}
