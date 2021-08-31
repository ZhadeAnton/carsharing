import React from 'react'

import OrderInfo from '../../forms/orderInfo'
import CustomMap from '../../map'
import { IOrderPageContainer } from '../../../containers/orderPage/orderPageInterfaces'

interface Props {
  town: IOrderPageContainer['town'],
  pickUp: IOrderPageContainer['pickUp'],
  stepOneOrderFields: IOrderPageContainer['stepOneOrderFields'],
  isSecondStepDisable: IOrderPageContainer['isSecondStepDisable'],
  onChangeActiveTab: (key: string) => void
}

export default function FirstStep(props: Props) {
  const handleChangeActiveTab = () => {
    props.onChangeActiveTab('2')
  }

  return (
    <section className='step-one step'>
      <div className='step-one__left step__left'>
        <CustomMap
          town={props.town}
          pickUp={props.pickUp}
        />
      </div>

      <div className='step-one__right step__right'>
        <OrderInfo
          orderFields={props.stepOneOrderFields}
          buttonTitle='Выбрать модель'
          isButtonDisable={props.isSecondStepDisable}
          onButtonClick={handleChangeActiveTab}
        />
      </div>
    </section>
  )
}
