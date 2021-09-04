import React, { useEffect } from 'react'
import { Spin } from 'antd';

import './styles.scss'
import { ICarFromServer } from '../../../interfaces/carsInterfaces';
import { IRadioButton } from '../../../interfaces/inputInterfaces';
import { setCurrentTab } from '../../../redux/order/orderActionCreators';
import { useAppDispatch, useAppSelector } from '../../../hooks/usePreTypedHook';
import { getTownField } from '../../../redux/location/locationSelectors';
import {
  getCarsByPage,
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
import CustomPagination from '../../pagination';

export default function SecondStep() {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)

  const carsListfromServer = state.car.carsListfromServer
  const carsCount = state.car.carsCount
  const selectedCar = state.car.selectedCar
  const carsSortOptions = state.car.carsSortOptions
  const carsSortBy = state.car.carsSortBy

  const townField = getTownField(state)
  const carModelField = getCarModelFiled(state)
  const isSecondStepDisabled = isSecondStepDisabledSelector(state)
  const secondStepFields = [townField, carModelField]

  useEffect(() => {
    dispatch(getCarsByPage(1))
  }, [])

  const handleChangePagination = (page: number) => {
    dispatch(getCarsByPage(page))
  }

  const handleSelectCar = (car: ICarFromServer) => {
    dispatch(selectCar(car))
  }

  const handleSortCars = (quality: IRadioButton) => {
    dispatch(selectCarQuality(quality))
  }

  const handleChangeActiveTab = () => {
    dispatch(setCurrentTab('3'))
  }

  if (!carsListfromServer && !carsCount) return <Spin />

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
            cars={carsListfromServer}
            selectedCarId={selectedCar?.id}
            onSelectCar={handleSelectCar}
          />
        </div>

        <div className='step-two__left--pagination'>
          <CustomPagination
            pagesLength={carsCount!}
            defaultPageSize={6}
            onChange={handleChangePagination}
          />
        </div>
      </section>

      <div className='step-two__right step__right'>
        <OrderInfo
          buttonTitle='Дополнительно'
          orderFields={secondStepFields}
          lowPrice={selectedCar?.priceMin}
          highPrice={selectedCar?.priceMax}
          isButtonDisable={isSecondStepDisabled}
          onButtonClick={handleChangeActiveTab}
        />
      </div>
    </section>
  )
}
