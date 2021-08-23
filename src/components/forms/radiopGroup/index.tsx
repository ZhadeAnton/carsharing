import React from 'react'

import './styles.scss'
import RadioButton from '../../inputs/checkboxPrimary'

interface Props {
  buttons: Array<string>,
  selected: string,
  handleChange: (value: string) => any
}

export default function RadioGroup(props: Props) {
  return (
    <form className='radio-buttons-form'>
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
