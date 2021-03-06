import React, { useEffect } from 'react'
import moment from 'moment'
import { message } from 'antd'

import './styles.scss'
import { useAppDispatch, useAppSelector } from '../../../hooks/usePreTypedHook'
import { setCurrentTab } from '../../../redux/order/orderActionCreators'
import * as carSelectors from '../../../redux/car/carSelectors'
import * as InputTypes from '../../../interfaces/inputInterfaces'
import * as carActions from '../../../redux/car/carActionCreators'
import RadioGroup from '../../forms/radiopGroup'
import CheckboxGroup from '../../forms/checkboxGroup'
import DateForm from '../../forms/dateForm'
import OrderInfo from '../../forms/orderInfo'

export default function ThirdStep() {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)

  const carRate = state.car.carRate
  const carColor = state.car.carColor
  const carCheckBoxGroup = state.car.carCheckboxOrtions
  const dateFrom = state.car.dateFrom
  const dateTo = state.car.dateTo
  const isDateAfter = moment(dateFrom).isAfter(dateTo)
  const totalPriceOfSelectedCar = carSelectors.totalCarPriceSelector(state)
  const carColorsOptions = carSelectors.getCarColorsOptions(state)
  const carOptionsRadoiButton = carSelectors.getCarRateOptionsSelector(state)
  const isThirdStepDisable = carSelectors.isThirdStepDisabledSelector(state)

  useEffect(() => {
    dispatch(carActions.getRateTypes())
    dispatch(carActions.setIsCarExtraActive())
  }, [])

  useEffect(() => {
    if (dateFrom && dateTo && isDateAfter) {
      dispatch(carActions.setDateFrom(null))
      dispatch(carActions.setDateTo(null))
      message.error('Неккоректная дата');
    }
  }, [dateFrom, dateTo])

  const handleChangeActiveTab = () => {
    dispatch(setCurrentTab('4'))
  }

  const handleCheckboxChange = (checkbox: InputTypes.ICheckbox) => {
    dispatch(carActions.changeCarCheckbox(checkbox))
  }

  const handleColorChange = (color: InputTypes.IRadioButton) => {
    dispatch(carActions.setCarColor(color))
  }

  const handleRateChange = (rate: InputTypes.IRate) => {
    dispatch(carActions.setCarRate(rate))
  }

  const handleUpdateDateFrom = (date: InputTypes.IDate) => {
    dispatch(carActions.setDateFrom(date))
  }

  const handleUpdateDateTo = (date: InputTypes.IDate) => {
    dispatch(carActions.setDateTo(date))
  }

  const handleClearDateFrom = () => {
    dispatch(carActions.setDateFrom(null))
  }

  const handleClearDateTo = () => {
    dispatch(carActions.setDateTo(null))
  }

  return (
    <section className='step-three step'>
      <section className='step__left'>
        <h6 className='step-three__title'>
          Цвет
        </h6>

        <RadioGroup
          buttons={carColorsOptions}
          selected={carColor.title}
          onChange={handleColorChange} />

        <h6 className='step-three__title'>
          Дата аренды
        </h6>

        <DateForm
          dateFrom={dateFrom}
          dateTo={dateTo}
          onUpdateDateFrom={handleUpdateDateFrom}
          onUpdateDateTo={handleUpdateDateTo}
          onClearDateFrom={handleClearDateFrom}
          onClearDateTo={handleClearDateTo}
        />

        <h6 className='step-three__title'>
          Тариф
        </h6>

        <RadioGroup
          buttons={carOptionsRadoiButton}
          selected={carRate?.rateTypeId.name}
          onChange={handleRateChange}
          isVertical
        />

        <h6 className='step-three__title'>
          Доп услуги
        </h6>

        <CheckboxGroup
          checkboxes={carCheckBoxGroup}
          handleChange={handleCheckboxChange}
        />
      </section>

      <div className='step__right'>
        <OrderInfo
          buttonTitle='Итого'
          price={totalPriceOfSelectedCar}
          isButtonDisable={isThirdStepDisable}
          onButtonClick={handleChangeActiveTab}
        />
      </div>
    </section>
  )
}
