import React, { useEffect } from 'react'
import moment from 'moment';
import { message } from 'antd';

import { useAppDispatch, useAppSelector } from '../../hooks/usePreTypedHook';
import { getDifferenceTime } from '../../utils/dateUtils';
import { setDateFrom, setDateTo } from '../../redux/car/carActionCreators';
import OrderPage from '../../routes/orderPage';

export default function OrderPageContainer() {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)

  const town = state.location.town
  const pickUp = state.location.pickUp
  const carsList = state.car.carsList
  const selectedCar = state.car.selectedCar
  const carColor = state.car.carColor
  const carRate = state.car.carRate
  const carsSortBy = state.car.carsSortBy
  const carCheckBoxGroup = state.car.carCheckBoxGroup
  const dateFrom = state.car.dateFrom
  const dateTo = state.car.dateTo
  const carsSortOptions = state.car.carsSortOptions
  const carColorOptions = state.car.carColorOptions
  const carRateOptions = state.car.carRateOptions

  const isDateAfter = moment(dateFrom).isAfter(dateTo)
  const durationLease = getDifferenceTime(dateFrom, dateTo)

  const townField = {
    title: 'Пункт выдачи', value: town ? `${town}, ${pickUp}` : 'Не выбрано'
  }
  const carModelField = { title: 'Модель', value: selectedCar?.carName ?? 'Не выбрано' }
  const carRateField = { title: 'Тариф', value: carRate.value }
  const carColorField = { title: 'Цвет', value: carColor.value }
  const leaseField = { title: 'Длительность аренды', value: durationLease }

  const stepOneOrderFields = [townField]
  const stepTwoOrderFields = [townField, carModelField]
  const stepThreeOrderFields = [
    townField, carModelField, carColorField, leaseField, carRateField
  ]

  useEffect(() => {
    carCheckBoxGroup.forEach((item) => {
      item.isChecked === true
      ? stepThreeOrderFields.push({title: item.value, value: 'Да'}) : null
    })
  }, [carCheckBoxGroup])

  useEffect(() => {
    if (dateFrom && dateTo && isDateAfter) {
      dispatch(setDateFrom(null))
      dispatch(setDateTo(null))
      message.error('Неккоректная дата');
    }
  }, [dateFrom, dateTo])

  return (
    <OrderPage
      town={town}
      pickUp={pickUp}
      carsList={carsList}
      selectedCar={selectedCar}
      carColor={carColor}
      carRate={carRate}
      carsSortBy={carsSortBy}
      carCheckBoxGroup={carCheckBoxGroup}
      dateFrom={dateFrom}
      dateTo={dateTo}
      carsSortOptions={carsSortOptions}
      carColorOptions={carColorOptions}
      carRateOptions={carRateOptions}
      stepOneOrderFields={stepOneOrderFields}
      stepTwoOrderFields={stepTwoOrderFields}
      stepThreeOrderFields={stepThreeOrderFields}
    />
  )
}
