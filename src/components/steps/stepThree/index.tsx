import React from 'react'

import './styles.scss'
import RadioGroup from '../../forms/radiopGroup'
import CheckboxGroup from '../../forms/checkboxGroup'
import DateForm from '../../forms/dateForm'
import OrderInfo from '../../forms/orderInfo'
import useStepThreeContainer from './useStepThreeContainer';

export default function StepThree() {
  const stepThreeContainer = useStepThreeContainer()

  return (
    <section className='step-three step'>
      <section className='step__left'>
        <h6 className='step-three__title'>
          Цвет
        </h6>

        <RadioGroup
          buttons={stepThreeContainer.state.carColorOptions}
          selected={stepThreeContainer.state.carColor}
          handleChange={stepThreeContainer.handlers.handleColorChange}
        />

        <h6 className='step-three__title'>
          Дата аренды
        </h6>

        <DateForm
          dateFrom={stepThreeContainer.state.dateFrom}
          dateTo={stepThreeContainer.state.dateTo}
          onUpdateDateFrom={stepThreeContainer.handlers.handleUpdateDateFrom}
          onUpdateDateTo={stepThreeContainer.handlers.handleUpdateDateTo}
          onClearDateFrom={stepThreeContainer.handlers.handleClearDateFrom}
          onClearDateTo={stepThreeContainer.handlers.handleClearDateTo}
        />

        <h6 className='step-three__title'>
          Тариф
        </h6>

        <RadioGroup
          buttons={stepThreeContainer.state.carRateOptions}
          selected={stepThreeContainer.state.carRate}
          handleChange={stepThreeContainer.handlers.handleRateChange}
          vertical
        />

        <h6 className='step-three__title'>
          Доп услуги
        </h6>

        <CheckboxGroup
          checkboxes={stepThreeContainer.state.carCheckBoxGroup}
          handleChange={stepThreeContainer.handlers.handleCheckboxChange}
        />
      </section>

      <div className='step__right'>
        <OrderInfo
          buttonTitle='Итого'
          isButtonDisable={false}
        />
      </div>
    </section>
  )
}
