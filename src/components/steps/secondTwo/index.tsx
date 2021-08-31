import React from 'react'

import './styles.scss'
import { ICarState } from '../../../redux/car/carReducer';
import { IOrderPageContainer } from '../../../containers/orderPage/orderPageInterfaces';
import useStepTwoContainer from './useStepTwoContainer';
import RadioGroup from '../../forms/radiopGroup'
import OrderInfo from '../../forms/orderInfo';
import CarsList from '../../carsList';

interface Props {
  carsList: ICarState['carsList'],
  selectedCar: ICarState['selectedCar'],
  carsSortOptions: ICarState['carsSortOptions'],
  carsSortBy: ICarState['carsSortBy'],
  stepTwoOrderFields: IOrderPageContainer['stepTwoOrderFields'],
  isThirdStepDisable: IOrderPageContainer['isThirdStepDisable'],
  onChangeActiveTab: (key: string) => void
}

export default function SecondStep(props: Props) {
  const stepTwoContainer = useStepTwoContainer()

  const handleChangeActiveTab = () => {
    props.onChangeActiveTab('3')
  }

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
          lowPrice={props.selectedCar?.lowPrice}
          highPrice={props.selectedCar?.highPrice}
          isButtonDisable={props.isThirdStepDisable}
          onButtonClick={handleChangeActiveTab}
        />
      </div>
    </section>
  )
}
