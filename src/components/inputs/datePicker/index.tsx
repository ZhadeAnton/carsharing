import React from 'react'
import moment, { Moment } from 'moment'
import { DatePicker } from 'antd'

import './styles.scss'
import { ReactComponent as Close } from '../../../assets/SVG/close.svg'

interface Props {
  date: Moment | null | undefined,
  onUpdateDate: (date: Moment | null | undefined) => void,
  onClearDate: () => void
}

export default function DatePickerPrimary(props: Props) {
  function disabledDate(current: any) {
    return current && current < moment().endOf('day');
  }

  return (
    <div className='date-picker-primary input-primary'>
      <DatePicker
        value={props.date}
        placeholder='Введите дату и время'
        format="DD.MM.YYYY HH:mm"
        onOk={props.onUpdateDate}
        disabledDate={disabledDate}
        size='small'
        showTime
      />

      <span
        className='input-primary__close-btn'
        onClick={() => props.onClearDate()}
      >
        { props.date && <Close /> }
      </span>
    </div>
  )
}
