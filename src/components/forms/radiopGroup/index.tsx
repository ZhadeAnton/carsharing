import React from 'react'

import './styles.scss'
import { IRadioButton } from '../../../interfaces/inputInterfaces'
import RadioButton from '../../inputs/radioButtonPrimary'

interface Props {
  buttons: Array<IRadioButton> | undefined,
  selected: string | undefined,
  isVertical?: boolean,
  onChange: any
}

export default function RadioGroup(props: Props) {
  return (
    <form className={`radio-buttons-form
      ${props.isVertical ? 'radio-buttons-form-vertical' : ''}`}
    >
      {
        props.buttons?.map((button, i) => (
          <RadioButton
            key={i}
            button={button}
            checked={props.selected === button.title || i === 0}
            handleChange={props.onChange}
          />
        ))
      }
    </form>
  )
}
