import React from 'react'

import './styles.scss'
import useStepTwoContainer from './useStepTwoContainer';
import RadioGroup from '../../forms/radiopGroup'
import OrderInfo from '../../forms/orderInfo';
import CarsList from '../../carsList';

export default function SecondStep() {
  const stepContainer = useStepTwoContainer()

  return (
    <section className='step-two step'>
      <section className='step-two__left step__left'>
        <div className='step-two__left--form'>
          <RadioGroup
            buttons={stepContainer.carsSortOptions}
            selected={stepContainer.carsSortBy}
            onChange={stepContainer.handleSortCars}
          />
        </div>

        <div className='step-two__left--list'>
          <CarsList
            cars={stepContainer.carsList}
            selected={stepContainer.selectedCar}
            onSelectCar={stepContainer.handleSelectCar}
          />
        </div>
      </section>

      <div className='step-two__right step__right'>
        <OrderInfo
          buttonTitle='Дополнительно'
          orderFields={stepContainer.secondStepFields}
          lowPrice={stepContainer.selectedCar?.lowPrice}
          highPrice={stepContainer.selectedCar?.highPrice}
          isButtonDisable={stepContainer.isSecondStepDisabled}
          onButtonClick={stepContainer.handleChangeActiveTab}
        />
      </div>
    </section>
  )
}