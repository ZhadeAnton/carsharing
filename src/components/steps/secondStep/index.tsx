import React, { useCallback, useEffect } from 'react'

import './styles.scss'
import { IRadioButton } from '../../../interfaces/inputInterfaces';
import { setCurrentTab } from '../../../redux/order/orderActionCreators';
import { useAppDispatch, useAppSelector } from '../../../hooks/usePreTypedHook';
import { isSecondStepDisabledSelector } from '../../../redux/car/carSelectors';
import { setIsCarTabActive } from '../../../redux/car/carActionCreators';
import * as carActions from '../../../redux/car/carActionCreators';
import RadioGroup from '../../forms/radiopGroup'
import OrderInfo from '../../forms/orderInfo';
import CarsList from '../../carsList/index';

export default function SecondStep() {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)

  const selectedCar = state.car.selectedCar
  const carsSortOptions = state.car.carsSortOptions
  const carsSortBy = state.car.carsSortBy
  const isSecondStepDisabled = isSecondStepDisabledSelector(state)

  useEffect(() => {
    dispatch(setIsCarTabActive())
  }, [])

  const handleSortCars = useCallback((quality: IRadioButton) => {
    dispatch(carActions.setSortingOfCars(quality))
  }, [carsSortBy])

  const handleChangeActiveTab = useCallback(() => {
    dispatch(setCurrentTab('3'))
  }, [])

  return (
    <section className='step-two step'>
      <section className='step-two__left step__left'>
        <div className='step-two__left--form'>
          <RadioGroup
            buttons={carsSortOptions}
            selected={carsSortBy.title}
            onChange={handleSortCars}
          />
        </div>

        <div className='step-two__left--list'>
          <CarsList />
        </div>
      </section>

      <div className='step-two__right step__right'>
        <OrderInfo
          buttonTitle='Дополнительно'
          lowPrice={selectedCar?.priceMin}
          highPrice={selectedCar?.priceMax}
          isButtonDisable={isSecondStepDisabled}
          onButtonClick={handleChangeActiveTab}
        />
      </div>
    </section>
  )
}
