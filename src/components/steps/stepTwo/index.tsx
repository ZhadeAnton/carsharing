import React from 'react'

import './styles.scss'
import { IOrderPageContainer } from '../../../containers/orderPage/orderPageInterfaces';
import useStepTwoContainer from './useStepTwoContainer';
import RadioGroup from '../../forms/radiopGroup'
import OrderInfo from '../../forms/orderInfo';
import CarsList from '../../carsList';

interface Props {
  carsList: IOrderPageContainer['carsList'],
  selectedCar: IOrderPageContainer['selectedCar'],
  carsSortOptions: IOrderPageContainer['carsSortOptions'],
  carsSortBy: IOrderPageContainer['carsSortBy'],
  stepTwoOrderFields: IOrderPageContainer['stepTwoOrderFields']
}

export default function StepTwo(props: Props) {
  const stepTwoContainer = useStepTwoContainer()

  return (
    <section className='step-two step'>
      <section className='step-two__left step__left'>
        <div className='step-two__left--form'>
          <RadioGroup
            buttons={props.carsSortOptions}
            selected={props.carsSortBy}
            onChange={stepTwoContainer.handleSortCars}
          />
        </div>

        <div className='step-two__left--list'>
          <CarsList
            cars={props.carsList}
            selected={props.selectedCar}
            onSelectCar={stepTwoContainer.handleSelectCar}
          />
        </div>
      </section>

      <div className='step-two__right step__right'>
        <OrderInfo
          buttonTitle='Дополнительно'
          orderFields={props.stepTwoOrderFields}
          isButtonDisable={!props.selectedCar}
        />
      </div>
    </section>
  )
}
