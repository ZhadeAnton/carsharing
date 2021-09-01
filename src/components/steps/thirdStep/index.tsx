import React from 'react'

import './styles.scss'
import RadioGroup from '../../forms/radiopGroup'
import CheckboxGroup from '../../forms/checkboxGroup'
import DateForm from '../../forms/dateForm'
import OrderInfo from '../../forms/orderInfo'
import useStepThreeContainer from './useStepThreeContainer';

export default function ThirdStep() {
  const stepContainer = useStepThreeContainer()

  return (
    <section className='step-three step'>
      <section className='step__left'>
        <h6 className='step-three__title'>
          Цвет
        </h6>

        <RadioGroup
          buttons={stepContainer.carColorOptions}
          selected={stepContainer.carColor}
          onChange={stepContainer.handleColorChange}
        />

        <h6 className='step-three__title'>
          Дата аренды
        </h6>

        <DateForm
          dateFrom={stepContainer.dateFrom}
          dateTo={stepContainer.dateTo}
          onUpdateDateFrom={stepContainer.handleUpdateDateFrom}
          onUpdateDateTo={stepContainer.handleUpdateDateTo}
          onClearDateFrom={stepContainer.handleClearDateFrom}
          onClearDateTo={stepContainer.handleClearDateTo}
        />

        <h6 className='step-three__title'>
          Тариф
        </h6>

        <RadioGroup
          buttons={stepContainer.carRateOptions}
          selected={stepContainer.carRate}
          onChange={stepContainer.handleRateChange}
          isVertical
        />

        <h6 className='step-three__title'>
          Доп услуги
        </h6>

        <CheckboxGroup
          checkboxes={stepContainer.carCheckBoxGroup}
          handleChange={stepContainer.handleCheckboxChange}
        />
      </section>

      <div className='step__right'>
        <OrderInfo
          orderFields={stepContainer.thirdStepFields}
          buttonTitle='Итого'
          price={stepContainer.totalPriceOfSelectedCar}
          isButtonDisable={stepContainer.isThirdStepDisable}
          onButtonClick={stepContainer.handleChangeActiveTab}
        />
      </div>
    </section>
  )
}
