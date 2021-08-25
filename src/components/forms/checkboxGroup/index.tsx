import React from 'react'

import CheckboxPrimary from '../../inputs/checkboxPrimary'
import { ICheckbox } from '../../../interfaces/inputInterfaces'

interface Props {
  checkboxes: Array<ICheckbox>,
  handleChange: (checkbox: ICheckbox) => void
}

export default function CheckboxGroup(props: Props) {
  return (
    <form>
      {
        props.checkboxes.map((checkbox) => (
          <CheckboxPrimary
            key={checkbox.id}
            checkbox={checkbox}
            onChange={props.handleChange}
          />
        ))
      }
    </form>
  )
}
