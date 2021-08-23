import React from 'react'

import './styles.scss'
import RadioButton from '../../inputs/checkboxPrimary'

interface Props {
  buttons: Array<string>,
  selected: string,
  vertical?: boolean,
  handleChange: (value: string) => any
}

export default function RadioGroup(props: Props) {
  return (
    <form className={`radio-buttons-form
      ${props.vertical ? 'radio-buttons-form-vertical' : ''}`}
    >
      {
        props.buttons.map((button, i) => (
          <RadioButton
            key={i}
            value={button}
            checked={props.selected === button}
            handleChange={props.handleChange}
          />
        ))
      }
    </form>
  )
}
