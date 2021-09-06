import React, { useEffect } from 'react'
import { Spin } from 'antd';

import './styles.scss'
import { ICar } from '../../../interfaces/carsInterfaces';
import { IRadioButton } from '../../../interfaces/inputInterfaces';
import { setCurrentTab } from '../../../redux/order/orderActionCreators';
import { useAppDispatch, useAppSelector } from '../../../hooks/usePreTypedHook';
import { getTownField } from '../../../redux/location/locationSelectors';
import {
  getAllCars,
  getEconomyCars,
  getPremiumCars,
  selectCar,
  setSortingOfCars
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
  const isLoading = state.car.isLoading

  const townField = getTownField(state)
  const carModelField = getCarModelFiled(state)
  const isSecondStepDisabled = isSecondStepDisabledSelector(state)
  const secondStepFields = [townField, carModelField]

  useEffect(() => {
    switch (carsSortBy.value) {
      case 'Эконом':
        dispatch(getEconomyCars(1))
        break

      case 'Премиум':
        dispatch(getPremiumCars(1))
        break

      default:
        dispatch(getAllCars(1))
    }
  }, [carsSortBy])

  const handleChangePagination = (page: number) => {
    switch (carsSortBy.value) {
      case 'Эконом':
        dispatch(getEconomyCars(page))
        break

      case 'Премиум':
        dispatch(getPremiumCars(page))
        break

      default:
        dispatch(getAllCars(page))
    }
  }

  const handleSelectCar = (car: ICar) => {
    dispatch(selectCar(car))
  }

  const handleSortCars = (quality: IRadioButton) => {
    dispatch(setSortingOfCars(quality))
  }

  const handleChangeActiveTab = () => {
    dispatch(setCurrentTab('3'))
  }

  return (
    <section className='step-two step'>
      <Spin tip="Loading..." spinning={isLoading}>
        <section className='step-two__left step__left'>
          <div className='step-two__left--form'>
            <RadioGroup
              buttons={carsSortOptions}
              selected={carsSortBy.title}
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
      </Spin>

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
