import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { message } from 'antd';

import './styles.scss'
import { ICheckbox, IDate, IRadioButton } from '../../../interfaces/inputInterfaces'
import RadioGroup from '../../forms/radiopGroup'
import CheckboxGroup from '../../forms/checkboxGroup'
import DateForm from '../../forms/dateForm'
import OrderInfo from '../../forms/orderInfo'
import { getDifferenceTime } from '../../../utils/dateUtils';

const colorGroup = [
  {title: 'Любой', value: 'Любой'},
  {title: 'Красный', value: 'Красный'},
  {title: 'Голубой', value: 'Голубой'},
]

const rateGroup = [
  {title: 'Поминутно, 7₽/мин', value: 'Поминутно'},
  {title: 'На сутки 1999 ₽/сутки', value: 'На сутки'}
]

const checkboxGroup: Array<ICheckbox> = [
  {title: 'Полный бак, 500р', value: 'Полный бак', id: 0, isChecked: true},
  {title: 'Детское кресло, 200р', value: 'Детское кресло', id: 1, isChecked: false},
  {title: 'Правый руль, 1600р', value: 'Правый руль', id: 2, isChecked: false},
]

export default function StepThree() {
  const [colorSelected, setColorSelected] = useState<IRadioButton>(colorGroup[0])
  const [rateSelected, setRateSelected] = useState<IRadioButton>(rateGroup[0])
  const [checkedItems, setCheckedItems] = useState<Array<ICheckbox>>(checkboxGroup)
  const [dateFrom, setDateFrom] = useState<IDate>()
  const [dateTo, setDateTo] = useState<IDate>()

  const isAfter = moment(dateFrom).isAfter(dateTo)
  const durationLease = getDifferenceTime(dateFrom, dateTo)

  const orderFields = [
    {title: 'Пункт выдачи', value: 'Ульяновск, Наримова 42'},
    {title: 'Модель', value: 'Hyndai, i30 N'},
    {title: 'Цвет', value: colorSelected.title},
    {title: 'Длительность аренды',
      value: durationLease !== '' ? durationLease : 'Ничего'},
    {title: 'Тариф', value: rateSelected.value},
  ]

  checkedItems.forEach((item) => {
    item.isChecked === true
    ? orderFields.push({title: item.value, value: 'Да'})
    : null
  })

  useEffect(() => {
    if (dateFrom && dateTo && isAfter) {
      setDateFrom(null)
      setDateTo(null)
      message.error('Неккоректная дата');
    }
  }, [dateTo])

  const handleCheckboxChange = (checkbox: ICheckbox) => {
    const newItes = [...checkedItems]
    newItes[checkbox.id] = {...checkbox, isChecked: !newItes[checkbox.id].isChecked}
    setCheckedItems(newItes)
  }

  const handleColorChange = ({title, value}: IRadioButton) => {
    setColorSelected({title, value});
  }

  const handleRateChange = ({title, value}: IRadioButton) => {
    setRateSelected({title, value});
  }

  const handleUpdateDateFrom = (date: IDate) => {
    setDateFrom(moment(date))
  }

  const handleUpdateDateTo = (date: IDate) => {
    setDateTo(moment(date))
  }

  const handleClearDateFrom = () => {
    setDateFrom(null)
  }

  const handleClearDateTo = () => {
    setDateTo(null)
  }

  return (
    <section className='step-three step'>
      <section className='step__left'>
        <h6 className='step-three__title'>
          Цвет
        </h6>

        <RadioGroup
          buttons={colorGroup}
          selected={colorSelected}
          handleChange={handleColorChange}
        />

        <h6 className='step-three__title'>
          Дата аренды
        </h6>

        <DateForm
          dateFrom={dateFrom}
          dateTo={dateTo}
          onUpdateDateFrom={handleUpdateDateFrom}
          onUpdateDateTo={handleUpdateDateTo}
          onClearDateFrom={handleClearDateFrom}
          onClearDateTo={handleClearDateTo}
        />

        <h6 className='step-three__title'>
          Тариф
        </h6>

        <RadioGroup
          buttons={rateGroup}
          selected={rateSelected}
          handleChange={handleRateChange}
          vertical
        />

        <h6 className='step-three__title'>
          Доп услуги
        </h6>

        <CheckboxGroup
          checkboxes={checkedItems}
          handleChange={handleCheckboxChange}
        />
      </section>

      <div className='step__right'>
        <OrderInfo
          orderFields={orderFields}
        />
      </div>
    </section>
  )
}
