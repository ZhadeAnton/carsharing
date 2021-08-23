import React, { useState } from 'react'

import './styles.scss'
import { cars } from '../../../utils/carsListMock';
import RadioGroup from '../../forms/radiopGroup'
import OrderInfo from '../../forms/orderInfo';
import CarsList from '../../carsList';

export default function StepTwo() {
  const [selected, setSelected] = useState<string>('Все модели')
  const buttons= ['Все модели', 'Эконом', 'Премиум']

  const handleChange = (value: string) => {
    setSelected(value);
  };

  return (
    <section className='step-two step'>
      <section className='step-two__left step__left'>
        <div className='step-two__left--form'>
          <RadioGroup
            buttons={buttons}
            selected={selected}
            handleChange={handleChange}
          />
        </div>

        <div className='step-two__left--cars'>
          <CarsList cars={cars}/>
        </div>
      </section>

      <div className='step-two__right step__right'>
        <OrderInfo />
      </div>
    </section>
  )
}
