import React from 'react'

import './styles.scss'
import useStepTwoContainer from './useStepTwoContainer';
import RadioGroup from '../../forms/radiopGroup'
import OrderInfo from '../../forms/orderInfo';
import CarsList from '../../carsList';

export default function StepTwo() {
  const stepTwoContainer = useStepTwoContainer()

  const orderFields = [
    {title: 'Пункт выдачи', value: 'Ульяновск, Наримова 42'},
    {title: 'Модель', value: stepTwoContainer.state.selectedCar?.carName ?? 'Не выбрано'}
  ]

  return (
    <section className='step-two step'>
      <section className='step-two__left step__left'>
        <div className='step-two__left--form'>
          <RadioGroup
            buttons={stepTwoContainer.state.carsSortOptions}
            selected={stepTwoContainer.state.carsSortBy}
            handleChange={stepTwoContainer.handlers.handleSortCars}
          />
        </div>

        <div className='step-two__left--list'>
          <CarsList
            cars={stepTwoContainer.state.carsList}
            selected={stepTwoContainer.state.selectedCar}
            onSelectCar={stepTwoContainer.handlers.handleSelectCar}
          />
        </div>
      </section>

      <div className='step-two__right step__right'>
        <OrderInfo
          orderFields={orderFields}
          lowPrice={stepTwoContainer.state.selectedCar?.lowPrice}
          highPrice={stepTwoContainer.state.selectedCar?.highPrice}
        />
      </div>
    </section>
  )
}
