import React from 'react'

import './styles.scss'

interface Props {
  placeholder: string,
  name?: string
}

export default function InputPrimary(props: Props) {
  return (
    <input
      className='input-primary'
      placeholder={props.placeholder}
    />
  )
}
