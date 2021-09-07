import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/usePreTypedHook'
import { setCurrentTab } from '../../../redux/order/orderActionCreators'
import {
  getTownField,
  isFirstStepDisabledSelector
} from '../../../redux/location/locationSelectors'
import OrderInfo from '../../forms/orderInfo'
import CustomMap from '../../map'

export default function FirstStep() {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)

  const townField = getTownField(state)
  const firstStepFields = [townField]
  const isFirstStepDisabled = isFirstStepDisabledSelector(state)

  const handleChangeActiveTab = () => {
    dispatch(setCurrentTab('2'))
  }

  return (
    <section className='step-one step'>
      <div className='step-one__left step__left'>
        <CustomMap />
      </div>

      <div className='step-one__right step__right'>
        <OrderInfo
          buttonTitle='Выбрать модель'
          orderFields={firstStepFields}
          isButtonDisable={isFirstStepDisabled}
          onButtonClick={handleChangeActiveTab}
        />
      </div>
    </section>
  )
}
