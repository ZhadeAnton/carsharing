import React from 'react'

import './styles.scss'
import { ICheckbox } from '../../../interfaces/inputInterfaces'

interface Props {
  checkbox: ICheckbox,
  onChange: (checkbox: ICheckbox) => void
}

export default function CheckboxPrimary(props: Props) {
  return (
    <div>
      <input
        type="checkbox"
        className="checkbox-custom"
        name={props.checkbox.title}
        checked={props.checkbox.isChecked}
        onChange={() => props.onChange(props.checkbox)}
      />

      <label
        key={props.checkbox.title}
        htmlFor={props.checkbox.title}
        className="checkbox-custom-label"
        onClick={() => props.onChange(props.checkbox)}
      >
        { props.checkbox.title }
      </label>
    </div>
  )
}
