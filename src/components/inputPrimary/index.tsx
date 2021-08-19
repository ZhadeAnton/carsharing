import React, { useState } from 'react'

import './styles.scss'
import { ReactComponent as Close } from '../../assets/SVG/close.svg'

interface Props {
  placeholder: string,
  name?: string
}

export default function InputPrimary(props: Props) {
  const [value, setValue] = useState('')

  return (
    <form className='input-primary'>
      <input
        className='input-primary__input'
        placeholder={props.placeholder}
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />

      <span
        className='input-primary__close-btn'
        onClick={() => setValue('')}
      >
        { value !== '' && <Close /> }
      </span>
    </form>
  )
}
