import React, { useState } from 'react'

import './styles.scss'
import { carsMock } from '../../../utils/carsListMock';
import { ICar } from '../../../interfaces/carsInterfaces';
import { IRadioButton } from '../../../interfaces/inputInterfaces';
import RadioGroup from '../../forms/radiopGroup'
import OrderInfo from '../../forms/orderInfo';
import CarsList from '../../carsList';

const radioGroup= [
  {title: 'Все модели', value: 'Все модели'},
  {title: 'Эконом', value: 'Эконом'},
  {title: 'Премиум', value: 'Премиум'},
]

export default function StepTwo() {
  const [selected, setSelected] = useState<IRadioButton>(radioGroup[0])
  const [selectedCar, setSelectedCar] = useState<ICar>()

  const orderFields = [
    {title: 'Пункт выдачи', value: 'Ульяновск, Наримова 42'},
    {title: 'Модель', value: selectedCar?.carName ?? 'Не выбрано'}
  ]

  const handleButtonChange = ({title, value}: IRadioButton) => {
    setSelected({title, value});
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
