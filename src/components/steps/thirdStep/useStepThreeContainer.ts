import { useEffect } from 'react'
import { message } from 'antd';
import moment from 'moment';

import { useAppSelector } from './../../../hooks/usePreTypedHook';
import { useAppDispatch } from '../../../hooks/usePreTypedHook'
import { ICheckbox, IDate, IRadioButton } from '../../../interfaces/inputInterfaces'
import { setCurrentTab } from '../../../redux/order/orderActionCreators'
import { getTownField } from '../../../redux/location/locationSelectors';
import * as actions from '../../../redux/car/carActionCreators'
import {
  getCarLeaseField,
  isThirdStepDisabledSelector,
  totalCarPriceSelector
} from '../../../redux/car/carSelectors';
import {
  changeCarCheckbox,
  setDateFrom,
  setDateTo
} from '../../../redux/car/carActionCreators'
import {
  getCarColorField,
  getCarModelFiled,
  getCarRateField
} from './../../../redux/car/carSelectors';

export default function useStepThreeContainer() {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)

  const carRate = state.car.carRate
  const carColor = state.car.carColor
  const carRateOptions = state.car.carRateOptions
  const carColorOptions = state.car.carColorOptions
  const carCheckBoxGroup = state.car.carCheckBoxGroup
  const dateFrom = state.car.dateFrom
  const dateTo = state.car.dateTo

  let isCarFullTank = false
  const isDateAfter = moment(dateFrom).isAfter(dateTo)
  const totalPriceOfSelectedCar = totalCarPriceSelector(state)
  const isThirdStepDisable = isThirdStepDisabledSelector(state)

  const townField = getTownField(state)
  const carModelField = getCarModelFiled(state)
  const carColorField = getCarColorField(state)
  const carRateField = getCarRateField(state)
  const carLeaseField = getCarLeaseField(state)

  const thirdStepFields = [
    townField, carModelField, carColorField, carRateField, carLeaseField
  ]

  carCheckBoxGroup.forEach((item: ICheckbox) => {
    if (item.isChecked) thirdStepFields.push({ title: item.value, value: 'Да' })
    if (item.value === 'Полный бак' && item.isChecked) isCarFullTank = !isCarFullTank
  })

  useEffect(() => {
    if (dateFrom && dateTo && isDateAfter) {
      dispatch(setDateFrom(null))
      dispatch(setDateTo(null))
      message.error('Неккоректная дата');
    }
  }, [dateFrom, dateTo])

  const handleChangeActiveTab = () => {
    dispatch(setCurrentTab('4'))
  }

  const handleCheckboxChange = (checkbox:ICheckbox) => {
    dispatch(changeCarCheckbox(checkbox))
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
    carRate,
    carColor,
    dateFrom,
    dateTo,
    carRateOptions,
    carColorOptions,
    carCheckBoxGroup,
    totalPriceOfSelectedCar,
    thirdStepFields,
    isThirdStepDisable,
    handleChangeActiveTab,
    handleCheckboxChange,
    handleColorChange,
    handleRateChange,
    handleUpdateDateFrom,
    handleUpdateDateTo,
    handleClearDateFrom,
    handleClearDateTo
  }
}
