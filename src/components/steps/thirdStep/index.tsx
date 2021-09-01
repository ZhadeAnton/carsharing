import React from 'react'

import './styles.scss'
import RadioGroup from '../../forms/radiopGroup'
import CheckboxGroup from '../../forms/checkboxGroup'
import DateForm from '../../forms/dateForm'
import OrderInfo from '../../forms/orderInfo'
import useStepThreeContainer from './useStepThreeContainer';

export default function ThirdStep() {
  const stepThreeContainer = useStepThreeContainer()

  return (
    <section className='step-three step'>
      <section className='step__left'>
        <h6 className='step-three__title'>
          Цвет
        </h6>

        <RadioGroup
          buttons={stepThreeContainer.carColorOptions}
          selected={stepThreeContainer.carColor}
          onChange={stepThreeContainer.handleColorChange}
        />

        <h6 className='step-three__title'>
          Дата аренды
        </h6>

        <DateForm
          dateFrom={stepThreeContainer.dateFrom}
          dateTo={stepThreeContainer.dateTo}
          onUpdateDateFrom={stepThreeContainer.handleUpdateDateFrom}
          onUpdateDateTo={stepThreeContainer.handleUpdateDateTo}
          onClearDateFrom={stepThreeContainer.handleClearDateFrom}
          onClearDateTo={stepThreeContainer.handleClearDateTo}
        />

        <h6 className='step-three__title'>
          Тариф
        </h6>

        <RadioGroup
          buttons={stepThreeContainer.carRateOptions}
          selected={stepThreeContainer.carRate}
          onChange={stepThreeContainer.handleRateChange}
          isVertical
        />

        <h6 className='step-three__title'>
          Доп услуги
        </h6>

        <CheckboxGroup
          checkboxes={stepThreeContainer.carCheckBoxGroup}
          handleChange={stepThreeContainer.handleCheckboxChange}
        />
      </section>

      <div className='step__right'>
        <OrderInfo
          orderFields={stepThreeContainer.thirdStepFields}
          buttonTitle='Итого'
          price={stepThreeContainer.totalPriceOfSelectedCar}
          isButtonDisable={stepThreeContainer.isThirdStepDisable}
          onButtonClick={stepThreeContainer.handleChangeActiveTab}
        />
      </div>
    </section>
  )
}
