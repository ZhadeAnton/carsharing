import React, { useEffect } from 'react'
import { message, Spin } from 'antd'
import moment from 'moment'

import './styles.scss'
import * as actions from '../../../redux/car/carActionCreators'
import { useAppDispatch, useAppSelector } from '../../../hooks/usePreTypedHook'
import { getTownField } from '../../../redux/location/locationSelectors'
import { setCurrentTab } from '../../../redux/order/orderActionCreators'
import {
  getCarColorField,
  getCarColorsOptions,
  getCarLeaseField,
  getCarModelFiled,
  getCarRateField,
  getCarRateOptionsSelector,
  isThirdStepDisabledSelector,
  totalCarPriceSelector
} from '../../../redux/car/carSelectors'
import {
  ICheckbox,
  IDate,
  IRadioButton,
  IRate
} from '../../../interfaces/inputInterfaces'
import {
  changeCarCheckbox,
  getRateTypes,
  setDateFrom,
  setDateTo
} from '../../../redux/car/carActionCreators'
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
  const isLoading = state.car.isLoading

  let isCarFullTank = false
  const isDateAfter = moment(dateFrom).isAfter(dateTo)
  const totalPriceOfSelectedCar = totalCarPriceSelector(state)
  const carColorsOptions = getCarColorsOptions(state)
  const carOptionsRadoiButton = getCarRateOptionsSelector(state)
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
    dispatch(getRateTypes())
  }, [])

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

  const handleRateChange = (rate: IRate) => {
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

  return (
    <section className='step-three step'>
      <section className='step__left'>
        <Spin tip="Loading..." spinning={isLoading}>
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
        </Spin>
      </section>


      <div className='step__right'>
        <OrderInfo
          orderFields={thirdStepFields}
          buttonTitle='Итого'
          price={totalPriceOfSelectedCar}
          isButtonDisable={isThirdStepDisable}
          onButtonClick={handleChangeActiveTab}
        />
      </div>
    </section>
  )
}
