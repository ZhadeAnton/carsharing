import React from 'react';

import './styles.scss'

interface Props {
  value: string,
  checked: boolean,
  handleChange: (value: string) => void
}

export default function RadioButton(props: Props) {
  return (
    <div className='radio-button-primary'>
      <input
        type="radio"
        value={props.value}
        name='check-box-primary'
        checked={props.checked}
        onChange={() => props.handleChange(props.value)}
      />

      <label
        htmlFor='check-box-primary'
        onClick={() => props.handleChange(props.value)}
      >
        { props.value }
      </label>
    </div>
  )
}
