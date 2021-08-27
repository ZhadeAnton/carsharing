import React from 'react'

import './styles.scss'
import useStepOneContainer from './useStepOneContainer'
import OrderInfo from '../../forms/orderInfo'
import CustomMap from '../../map'

export default function StepOne() {
  const stepOneContainer = useStepOneContainer()

  const town = stepOneContainer.state.town
  const pickUp = stepOneContainer.state.pickUp

  const orderFields = [
    { title: 'Город', value: town ? `${town}, ${pickUp}` : 'Не выбрано' }
  ]

  return (
    <section className='step-one step'>
      <div className='step-one__left step__left'>
        <div className='step-one__left--map'>
          <CustomMap
            town={town}
            pickUp={pickUp}
          />
        </div>
      </div>

      <div className='step-one__right step__right'>
        <OrderInfo
          orderFields={orderFields}
          buttonTitle='Выбрать модель'
          isButtonDisable={!stepOneContainer.state.town}
        />
      </div>
    </section>
  )
}
