import React, { useState } from 'react'

import './styles.scss'
import { carsMock } from '../../../utils/carsListMock';
import { ICar } from '../../../interfaces/carsInterfaces';
import RadioGroup from '../../forms/radiopGroup'
import OrderInfo from '../../forms/orderInfo';
import CarsList from '../../carsList';

const radioGroup= ['Все модели', 'Эконом', 'Премиум']

export default function StepTwo() {
  const [selected, setSelected] = useState<string>('Все модели')
  const [selectedCar, setSelectedCar] = useState<ICar>()

  const orderFields = [
    {title: 'Пункт выдачи', value: 'Ульяновск, Наримова 42'},
    {title: 'Модель', value: selectedCar?.carName ?? 'Не выбрано'}
  ]

  const handleButtonChange = (value: string) => {
    setSelected(value);
  }

  const handleSelect = (car: ICar) => {
    setSelectedCar(car)
  }

  return (
    <section className='step-two step'>
      <section className='step-two__left step__left'>
        <div className='step-two__left--form'>
          <RadioGroup
            buttons={radioGroup}
            selected={selected}
            handleChange={handleButtonChange}
          />
        </div>

        <div className='step-two__left--list'>
          <CarsList
            cars={carsMock}
            selected={selectedCar}
            onSelectCar={handleSelect}
          />
        </div>
      </section>

      <div className='step-two__right step__right'>
        <OrderInfo
          orderFields={orderFields}
          lowPrice={selectedCar?.lowPrice}
          highPrice={selectedCar?.highPrice}
        />
      </div>
    </section>
  )
}
