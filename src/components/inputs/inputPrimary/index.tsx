import React, { useState } from 'react'

import { ReactComponent as Close } from '../../../assets/SVG/close.svg'

interface Props {
  placeholder: string,
  name?: string
}

export default function InputPrimary(props: Props) {
  const [value, setValue] = useState('')

  return (
    <div className='input-primary'>
      <input
        className='input-primary__field'
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
    </div>
  )
}
