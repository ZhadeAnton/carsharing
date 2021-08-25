import React from 'react'

import './styles.scss'
import { IDate } from '../../../interfaces/inputInterfaces'
import DatePickerPrimary from '../../inputs/datePicker'

interface Props {
  dateFrom: IDate,
  dateTo: IDate,
  onUpdateDateFrom: (date: IDate) => void,
  onUpdateDateTo: (date: IDate) => void,
  onClearDateFrom: () => void,
  onClearDateTo: () => void,
}

export default function DateForm(props: Props) {
  return (
    <div className='date-form'>
      <div className='date-form__line'>
        <h6 className='date-form__title'>
          С
        </h6>

        <DatePickerPrimary
          date={props.dateFrom}
          onUpdateDate={props.onUpdateDateFrom}
          onClearDate={props.onClearDateFrom}
        />
      </div>

      <div className='date-form__line'>
        <h6 className='date-form__title'>
          По
        </h6>

        <DatePickerPrimary
          date={props.dateTo}
          onUpdateDate={props.onUpdateDateTo}
          onClearDate={props.onClearDateTo}
        />
      </div>
    </div>
  )
}
