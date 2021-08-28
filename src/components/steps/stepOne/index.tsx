import React from 'react'

import './styles.scss'
import useStepOneContainer from './useStepOneContainer'
import OrderInfo from '../../forms/orderInfo'
import CustomMap from '../../map'

export default function StepOne() {
  const stepOneContainer = useStepOneContainer()

  return (
    <section className='step-one step'>
      <div className='step-one__left step__left'>
        <div className='step-one__left--map'>
          <CustomMap
            town={stepOneContainer.state.town}
            pickUp={stepOneContainer.state.pickUp}
          />
        </div>
      </div>

      <div className='step-one__right step__right'>
        <OrderInfo
          orderFields={stepOneContainer.state.orderFields}
          buttonTitle='Выбрать модель'
          isButtonDisable={!stepOneContainer.state.town}
        />
      </div>
    </section>
  )
}
