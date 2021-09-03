import React from 'react'

import './styles.scss'
import { IRadioButton } from '../../../interfaces/inputInterfaces'
import RadioButton from '../../inputs/radioButtonPrimary'

interface Props {
  buttons: Array<IRadioButton>,
  selected: IRadioButton | undefined,
  isVertical?: boolean,
  onChange: ({title, value}: IRadioButton) => any
}

export default function RadioGroup(props: Props) {
  return (
    <form className={`radio-buttons-form
      ${props.isVertical ? 'radio-buttons-form-vertical' : ''}`}
    >
      {
        props.buttons.map((button, i) => (
          <RadioButton
            key={i}
            button={button}
            checked={props.selected?.title === button.title}
            handleChange={props.onChange}
          />
        ))
      }
    </form>
  )
}