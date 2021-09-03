import React, { useEffect } from 'react'

import './styles.scss'
import { ICar } from '../../../interfaces/carsInterfaces';
import { IRadioButton } from '../../../interfaces/inputInterfaces';
import { setCurrentTab } from '../../../redux/order/orderActionCreators';
import { useAppDispatch, useAppSelector } from '../../../hooks/usePreTypedHook';
import { getTownField } from '../../../redux/location/locationSelectors';
import {
  getAllCars,
  selectCar,
  selectCarQuality
} from '../../../redux/car/carActionCreators';
import {
  getCarModelFiled,
  isSecondStepDisabledSelector
} from '../../../redux/car/carSelectors';
import RadioGroup from '../../forms/radiopGroup'
import OrderInfo from '../../forms/orderInfo';
import CarsList from '../../carsList';

export default function SecondStep() {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)

  const carsList = state.car.carsList
  const carsListfromServer = state.car.carsListfromServer
  const selectedCar = state.car.selectedCar
  const carsSortOptions = state.car.carsSortOptions
  const carsSortBy = state.car.carsSortBy

  const townField = getTownField(state)
  const carModelField = getCarModelFiled(state)
  const isSecondStepDisabled = isSecondStepDisabledSelector(state)
  const secondStepFields = [townField, carModelField]

  useEffect(() => {
    dispatch(getAllCars())
  }, [])

  const handleSelectCar = (car: ICar) => {
    dispatch(selectCar(car))
  }

  const handleSortCars = (quality: IRadioButton) => {
    dispatch(selectCarQuality(quality))
  }

  const handleChangeActiveTab = () => {
    dispatch(setCurrentTab('3'))
  }

  useEffect(() => {
    dispatch(getAllCars())
  }, [])

  console.log(carsListfromServer)

  return (
    <section className='step-two step'>
      <section className='step-two__left step__left'>
        <div className='step-two__left--form'>
          <RadioGroup
            buttons={carsSortOptions}
            selected={carsSortBy}
            onChange={handleSortCars}
          />
        </div>

        <div className='step-two__left--list'>
          <CarsList
            cars={carsList}
            selected={selectedCar}
            onSelectCar={handleSelectCar}
          />
        </div>
      </section>

      <div className='step-two__right step__right'>
        <OrderInfo
          buttonTitle='Дополнительно'
          orderFields={secondStepFields}
          lowPrice={selectedCar?.lowPrice}
          highPrice={selectedCar?.highPrice}
          isButtonDisable={isSecondStepDisabled}
          onButtonClick={handleChangeActiveTab}
        />
      </div>
    </section>
  )
}
