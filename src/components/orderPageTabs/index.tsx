import React from 'react'
import { Tabs } from 'antd'
const { TabPane } = Tabs;

import './styles.scss'
import { IOrderPageContainer } from '../../containers/orderPage/orderPageInterfaces';
import FirstStep from '../steps/firstStep';
import SecondStep from '../steps/secondTwo';
import ThirdStep from '../steps/thirdStep';
import FourthStep from '../steps/fourthStep';

export default function OrderPageTabs(props: IOrderPageContainer) {
  return (
    <Tabs
      type="card"
      activeKey={props.activeTab}
      className='order-page__header-row'
      onChange={(key: string) => props.handleChangeActiveTab(key)}
    >
      <TabPane tab="Местоположение" key="1">
        <FirstStep
          town={props.town}
          pickUp={props.pickUp}
          stepOneOrderFields={props.stepOneOrderFields}
          isSecondStepDisable={props.isSecondStepDisable}
          onChangeActiveTab={props.handleChangeActiveTab}
        />
      </TabPane>

      <TabPane tab="Модель" key="2" disabled={props.isSecondStepDisable}>
        <SecondStep
          carsList={props.carsList}
          selectedCar={props.selectedCar}
          carsSortOptions={props.carsSortOptions}
          carsSortBy={props.carsSortBy}
          stepTwoOrderFields={props.stepTwoOrderFields}
          isThirdStepDisable={props.isThirdStepDisable}
          onChangeActiveTab={props.handleChangeActiveTab}
        />
      </TabPane>

      <TabPane tab="Дополнительно" key="3" disabled={props.isThirdStepDisable}>
        <ThirdStep
          carColor={props.carColor}
          carRate={props.carRate}
          carRateOptions={props.carRateOptions}
          carColorOptions={props.carColorOptions}
          carCheckBoxGroup={props.carCheckBoxGroup}
          totalPriceOfSelectedCar={props.totalPriceOfSelectedCar}
          dateFrom={props.dateFrom}
          dateTo={props.dateTo}
          stepThreeOrderFields={props.stepThreeOrderFields}
          isFourthStepDisable={props.isFourthStepDisable}
          onChangeActiveTab={props.handleChangeActiveTab}
        />
      </TabPane>

      <TabPane tab="Итого" key="4" disabled={props.isFourthStepDisable}>
        <FourthStep
          selectedCar={props.selectedCar}
          dateFrom={props.dateFrom}
          totalPriceOfSelectedCar={props.totalPriceOfSelectedCar}
          stepFourOrderFields={props.stepFourOrderFields}
          isFullTank={props.isFullTank}
        />
      </TabPane>
    </Tabs>
  )
}
