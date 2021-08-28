import React from 'react'

import './styles.scss'
import OrderInfo from '../../forms/orderInfo'
import CustomMap from '../../map'
import { IOrderPageContainer } from '../../../containers/orderPage/orderPageInterfaces'

interface Props {
  town: IOrderPageContainer['town'],
  pickUp: IOrderPageContainer['pickUp'],
  stepOneOrderFields: IOrderPageContainer['stepOneOrderFields']
}

export default function StepOne(props: Props) {
  return (
    <section className='step-one step'>
      <div className='step-one__left step__left'>
        <div className='step-one__left--map'>
          <CustomMap
            town={props.town}
            pickUp={props.pickUp}
          />
        </div>
      </div>

      <div className='step-one__right step__right'>
        <OrderInfo
          orderFields={props.stepOneOrderFields}
          buttonTitle='Выбрать модель'
          isButtonDisable={!props.town}
        />
      </div>
    </section>
  )
}
