import React from 'react'

import useFirstStepContainer from './useFirstStepContainer'
import OrderInfo from '../../forms/orderInfo'
import CustomMap from '../../map'


export default function FirstStep() {
  const firstStepContainer = useFirstStepContainer()

  return (
    <section className='step-one step'>
      <div className='step-one__left step__left'>
        <CustomMap
          town={firstStepContainer.state.town}
          pickUp={firstStepContainer.state.pickUp}
        />
      </div>

      <div className='step-one__right step__right'>
        <OrderInfo
          buttonTitle='Выбрать модель'
          orderFields={firstStepContainer.state.firstStepFields}
          isButtonDisable={firstStepContainer.state.isSecondStepDisable}
          onButtonClick={firstStepContainer.handlers.handleChangeActiveTab}
        />
      </div>
    </section>
  )
}
