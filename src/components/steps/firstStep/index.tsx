import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/usePreTypedHook'
import { setCurrentTab } from '../../../redux/order/orderActionCreators'
import { isFirstStepDisabledSelector } from '../../../redux/location/locationSelectors'
import { totalCarPriceSelector } from '../../../redux/car/carSelectors'
import OrderInfo from '../../forms/orderInfo'
import CustomMap from '../../map'

export default function FirstStep() {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)
  const totalPriceOfSelectedCar = totalCarPriceSelector(state)
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
          isButtonDisable={isFirstStepDisabled}
          onButtonClick={handleChangeActiveTab}
          price={totalPriceOfSelectedCar}
        />
      </div>
    </section>
  )
}
