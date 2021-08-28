import { useEffect } from 'react'
import { message } from 'antd'
import moment from 'moment'

import { useAppDispatch, useAppSelector } from '../../../hooks/usePreTypedHook'
import { ICheckbox, IDate, IRadioButton } from '../../../interfaces/inputInterfaces'
import { getDifferenceTime } from '../../../utils/dateUtils'
import * as actions from '../../../redux/car/carActionCreators'

export default function useStepThreeContainer() {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)

  const carColor = state.car.carColor
  const carRate = state.car.carRate
  const carCheckBoxGroup = state.car.carCheckBoxGroup
  const dateFrom = state.car.dateFrom
  const dateTo = state.car.dateTo
  const carColorOptions = state.car.carColorOptions
  const carRateOptions = state.car.carRateOptions
  const town = state.location.town
  const pickUp = state.location.pickUp
  const selectedCar = state.car.selectedCar

  const isDateAfter = moment(dateFrom).isAfter(dateTo)
  const durationLease = getDifferenceTime(dateFrom, dateTo)

  const orderFields = [
    { title: 'Город', value: town ? `${town}, ${pickUp}` : 'Не выбрано' },
    { title: 'Модель', value: selectedCar?.carName ?? 'Не выбрано' },
    { title: 'Цвет', value: carColor.value },
    { title: 'Длительность аренды', value: durationLease },
    { title: 'Тариф', value: carRate.value }
  ]

  carCheckBoxGroup.forEach((item) => {
    item.isChecked === true ? orderFields.push({title: item.value, value: 'Да'}) : null
  })

  useEffect(() => {
    if (dateFrom && dateTo && isDateAfter) {
      dispatch(actions.setDateFrom(null))
      dispatch(actions.setDateTo(null))
      message.error('Неккоректная дата');
    }
  }, [dateFrom, dateTo])

  const handleCheckboxChange = (checkbox: ICheckbox) => {
    const newItes = [...carCheckBoxGroup]
    newItes[checkbox.id] = {...checkbox, isChecked: !newItes[checkbox.id].isChecked}
    dispatch(actions.changeCarCheckbox(newItes))
  }

  const handleColorChange = (color: IRadioButton) => {
    dispatch(actions.setCarColor(color))
  }

  const handleRateChange = (rate: IRadioButton) => {
    dispatch(actions.setCarRate(rate))
  }

  const handleUpdateDateFrom = (date: IDate) => {
    dispatch(actions.setDateFrom(date))
  }

  const handleUpdateDateTo = (date: IDate) => {
    dispatch(actions.setDateTo(date))
  }

  const handleClearDateFrom = () => {
    dispatch(actions.setDateFrom(null))
  }

  const handleClearDateTo = () => {
    dispatch(actions.setDateTo(null))
  }

  return {
    state: {
      carColor,
      carRate,
      dateFrom,
      dateTo,
      carCheckBoxGroup,
      durationLease,
      carColorOptions,
      carRateOptions,
      town,
      pickUp,
      selectedCar,
      orderFields
    },
    handlers: {
      handleCheckboxChange,
      handleColorChange,
      handleRateChange,
      handleUpdateDateFrom,
      handleUpdateDateTo,
      handleClearDateFrom,
      handleClearDateTo
    }
  }
}
