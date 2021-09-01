import React from 'react'

import useFirstStepContainer from './useFirstStepContainer'
import OrderInfo from '../../forms/orderInfo'
import CustomMap from '../../map'


export default function FirstStep() {
  const stepContainer = useFirstStepContainer()

  return (
    <section className='step-one step'>
      <div className='step-one__left step__left'>
        <CustomMap />
      </div>

      <div className='step-one__right step__right'>
        <OrderInfo
          buttonTitle='Выбрать модель'
          orderFields={stepContainer.firstStepFields}
          isButtonDisable={stepContainer.isFirstStepDisabled}
          onButtonClick={stepContainer.handleChangeActiveTab}
        />
      </div>
    </section>
  )
}
