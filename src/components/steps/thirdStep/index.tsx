import React from 'react'

import './styles.scss'
import { ICarState } from '../../../redux/car/carReducer'
import { IOrderPageContainer } from '../../../containers/orderPage/orderPageInterfaces'
import RadioGroup from '../../forms/radiopGroup'
import CheckboxGroup from '../../forms/checkboxGroup'
import DateForm from '../../forms/dateForm'
import OrderInfo from '../../forms/orderInfo'
import useStepThreeContainer from './useStepThreeContainer';

interface Props {
  carRate: ICarState['carRate'],
  carRateOptions: ICarState['carRateOptions'],
  dateFrom: ICarState['dateFrom'],
  dateTo: ICarState['dateTo'],
  carColor: ICarState['carColor'],
  totalPriceOfSelectedCar: IOrderPageContainer['totalPriceOfSelectedCar'],
  carColorOptions: ICarState['carColorOptions'],
  carCheckBoxGroup: ICarState['carCheckBoxGroup'],
  stepThreeOrderFields: IOrderPageContainer['stepThreeOrderFields'],
  isFourthStepDisable: IOrderPageContainer['isFourthStepDisable'],
  onChangeActiveTab: (key: string) => void
}

export default function ThirdStep(props: Props) {
  const stepThreeContainer = useStepThreeContainer()

  const handleChangeActiveTab = () => {
    props.onChangeActiveTab('4')
  }

  return (
    <section className='step-three step'>
      <section className='step__left'>
        <h6 className='step-three__title'>
          Цвет
        </h6>

        <RadioGroup
          buttons={props.carColorOptions}
          selected={props.carColor}
          onChange={stepThreeContainer.handleColorChange}
        />

        <h6 className='step-three__title'>
          Дата аренды
        </h6>

        <DateForm
          dateFrom={props.dateFrom}
          dateTo={props.dateTo}
          onUpdateDateFrom={stepThreeContainer.handleUpdateDateFrom}
          onUpdateDateTo={stepThreeContainer.handleUpdateDateTo}
          onClearDateFrom={stepThreeContainer.handleClearDateFrom}
          onClearDateTo={stepThreeContainer.handleClearDateTo}
        />

        <h6 className='step-three__title'>
          Тариф
        </h6>

        <RadioGroup
          buttons={props.carRateOptions}
          selected={props.carRate}
          onChange={stepThreeContainer.handleRateChange}
          isVertical
        />

        <h6 className='step-three__title'>
          Доп услуги
        </h6>

        <CheckboxGroup
          checkboxes={props.carCheckBoxGroup}
          handleChange={stepThreeContainer.handleCheckboxChange}
        />
      </section>

      <div className='step__right'>
        <OrderInfo
          orderFields={props.stepThreeOrderFields}
          buttonTitle='Итого'
          price={props.totalPriceOfSelectedCar}
          isButtonDisable={props.isFourthStepDisable}
          onButtonClick={handleChangeActiveTab}
        />
      </div>
    </section>
  )
}
