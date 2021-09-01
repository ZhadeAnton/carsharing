import React from 'react'

import './styles.scss'
import useStepTwoContainer from './useStepTwoContainer';
import RadioGroup from '../../forms/radiopGroup'
import OrderInfo from '../../forms/orderInfo';
import CarsList from '../../carsList';

export default function SecondStep() {
  const stepTwoContainer = useStepTwoContainer()

  return (
    <section className='step-two step'>
      <section className='step-two__left step__left'>
        <div className='step-two__left--form'>
          <RadioGroup
            buttons={stepTwoContainer.carsSortOptions}
            selected={stepTwoContainer.carsSortBy}
            onChange={stepTwoContainer.handleSortCars}
          />
        </div>

        <div className='step-two__left--list'>
          <CarsList
            cars={stepTwoContainer.carsList}
            selected={stepTwoContainer.selectedCar}
            onSelectCar={stepTwoContainer.handleSelectCar}
          />
        </div>
      </section>

      <div className='step-two__right step__right'>
        <OrderInfo
          buttonTitle='Дополнительно'
          orderFields={stepTwoContainer.secondStepFields}
          lowPrice={stepTwoContainer.selectedCar?.lowPrice}
          highPrice={stepTwoContainer.selectedCar?.highPrice}
          isButtonDisable={stepTwoContainer.isSecondStepDisabled}
          onButtonClick={stepTwoContainer.handleChangeActiveTab}
        />
      </div>
    </section>
  )
}
