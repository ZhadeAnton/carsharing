import React from 'react'
import { Tabs } from 'antd'
const { TabPane } = Tabs;

import './styles.scss'
import { IOrderPageContainer } from '../../containers/orderPage/orderPageInterfaces';
import FirstStep from '../steps/firstStep';
import SecondStep from '../steps/secondStep';
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
        <FirstStep />
      </TabPane>

      <TabPane tab="Модель" key="2" disabled={props.isSecondStepDisable}>
        <SecondStep />
      </TabPane>

      <TabPane tab="Дополнительно" key="3" disabled={props.isThirdStepDisable}>
        <ThirdStep />
      </TabPane>

      <TabPane tab="Итого" key="4" disabled={props.isFourthStepDisable}>
        <FourthStep />
      </TabPane>
    </Tabs>
  )
}
