import React, { useState } from 'react'
import { DatePicker } from 'antd'
import moment, { Moment } from 'moment'

import './styles.scss'
import { ReactComponent as Close } from '../../../assets/SVG/close.svg'

export default function DatePickerPrimary() {
  const [date, setDate] = useState<Moment | null | undefined>()

  function handleUpdateDate(date: any) {
    setDate(moment(date))
  }

  function disabledDate(current: any) {
    return current && current < moment().endOf('day');
  }

  return (
    <div className='date-picker-primary input-primary'>
      <DatePicker
        value={date}
        placeholder='Введите дату и время'
        format="DD.MM.YYYY hh:mm"
        onOk={handleUpdateDate}
        disabledDate={disabledDate}
        size='small'
        showTime
      />

      <span
        className='input-primary__close-btn'
        onClick={() => setDate(null)}
      >
        { date && <Close /> }
      </span>
    </div>
  )
}
