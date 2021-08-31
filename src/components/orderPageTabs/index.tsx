import React from 'react'
import { Tabs } from 'antd'
const { TabPane } = Tabs;

import './styles.scss'
import { IOrderPageContainer } from '../../containers/orderPage/orderPageInterfaces';
import StepOne from '../steps/stepOne';
import StepTwo from '../steps/stepTwo';
import StepThree from '../steps/stepThree';
import StepFour from '../steps/stepFour';

export default function OrderPageTabs(props: IOrderPageContainer) {
  return (
    <Tabs
      type="card"
      activeKey={props.activeTab}
      className='order-page__header-row'
      onChange={(key: string) => props.handleChangeActiveTab(key)}
    >
      <TabPane tab="Местоположение" key="1">
        <StepOne
          town={props.town}
          pickUp={props.pickUp}
          stepOneOrderFields={props.stepOneOrderFields}
          onChangeActiveTab={props.handleChangeActiveTab}
        />
      </TabPane>

      <TabPane tab="Модель" key="2" disabled={props.isTwoStepDisable}>
        <StepTwo
          carsList={props.carsList}
          selectedCar={props.selectedCar}
          carsSortOptions={props.carsSortOptions}
          carsSortBy={props.carsSortBy}
          stepTwoOrderFields={props.stepTwoOrderFields}
          onChangeActiveTab={props.handleChangeActiveTab}
        />
      </TabPane>

      <TabPane tab="Дополнительно" key="3" disabled={props.isThreeStepDisable}>
        <StepThree
          carColor={props.carColor}
          carRate={props.carRate}
          carRateOptions={props.carRateOptions}
          carColorOptions={props.carColorOptions}
          carCheckBoxGroup={props.carCheckBoxGroup}
          carCurrentPrice={props.carCurrentPrice}
          dateFrom={props.dateFrom}
          dateTo={props.dateTo}
          stepThreeOrderFields={props.stepThreeOrderFields}
          onChangeActiveTab={props.handleChangeActiveTab}
        />
      </TabPane>

      <TabPane tab="Итого" key="4" disabled={props.isFourStepDisable}>
        <StepFour
          selectedCar={props.selectedCar}
          dateFrom={props.dateFrom}
          carCurrentPrice={props.carCurrentPrice}
          stepFourOrderFields={props.stepFourOrderFields}
          isFullTank={props.isFullTank}
        />
      </TabPane>
    </Tabs>
  )
}
