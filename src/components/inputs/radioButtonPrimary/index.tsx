import React from 'react';

import './styles.scss'
import { IRadioButton } from '../../../interfaces/inputInterfaces';

interface Props {
  button: IRadioButton,
  checked: boolean,
  handleChange: ({title, value}: IRadioButton) => any
}

export default function RadioButton(props: Props) {
  return (
    <div className='radio-button-primary'>
      <input
        type="radio"
        value={props.button.value}
        name='check-box-primary'
        checked={props.checked}
        onChange={() => props.handleChange(props.button)}
      />

      <label
        htmlFor='check-box-primary'
        onClick={() => props.handleChange(props.button)}
      >
        { props.button.title }
      </label>
    </div>
  )
}
