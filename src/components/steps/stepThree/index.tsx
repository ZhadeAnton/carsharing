import React, { useState } from 'react'

import './styles.scss'
import RadioGroup from '../../forms/radiopGroup'
import CheckboxGroup from '../../forms/checkboxGroup'
import DateForm from '../../forms/dateForm'

const radioGroup = ['Любой', 'Красный', 'Голубой']
const checkboxGroup = ['Полный бак, 500р', 'Детское кресло, 200р', 'Правый руль, 1600р']

export default function StepThree() {
  const [colorSelected, setColorSelected] = useState<string>('Любой')
  const [rateSelected, setRateSelected] = useState<string>('Любой')

  const handleColorChange = (value: string) => {
    setColorSelected(value);
  }

  const handleRateChange = (value: string) => {
    setRateSelected(value);
  }

  return (
    <section className='step-three step'>
      <h6 className='step-three__title'>Цвет</h6>

      <RadioGroup
        buttons={radioGroup}
        selected={colorSelected}
        handleChange={handleColorChange}
      />

      <h6 className='step-three__title'>Дата аренды</h6>
      <DateForm />

      <h6 className='step-three__title'>Тариф</h6>

      <RadioGroup
        buttons={radioGroup}
        selected={rateSelected}
        handleChange={handleRateChange}
        vertical
      />

      <h6 className='step-three__title'>Доп услуги</h6>

      <CheckboxGroup checkboxes={checkboxGroup} />
    </section>
  )
}
