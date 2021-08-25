import React from 'react'

import './styles.scss'
import DatePickerPrimary from '../../inputs/datePicker'

export default function DateForm() {
  return (
    <div className='date-form'>
      <div className='date-form__line'>
        <h6 className='date-form__title'>
          С
        </h6>

        <DatePickerPrimary />
      </div>

      <div className='date-form__line'>
        <h6 className='date-form__title'>
          По
        </h6>

        <DatePickerPrimary />
      </div>
    </div>
  )
}
