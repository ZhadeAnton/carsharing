import React from 'react'
import { Tabs } from 'antd'
const { TabPane } = Tabs;

import './styles.scss'
import useOrderPageTabsContainer from './useOrderPageTabsContainer';
import FirstStep from '../steps/firstStep';
import SecondStep from '../steps/secondStep';
import ThirdStep from '../steps/thirdStep';
import FourthStep from '../steps/fourthStep';

export default function OrderPageTabs() {
  const tabsContainer = useOrderPageTabsContainer()

  return (
    <Tabs
      type="card"
      activeKey={tabsContainer.currentTabPosition}
      className='order-page__header-row'
      onChange={(key: string) => tabsContainer.handleChangeActiveTab(key)}
    >
      <TabPane tab="Местоположение" key="1">
        <FirstStep />
      </TabPane>

      <TabPane tab="Модель" key="2" disabled={tabsContainer.isSecondTabDisabled}>
        <SecondStep />
      </TabPane>

      <TabPane tab="Дополнительно" key="3" disabled={tabsContainer.isThirdTabDisabled}>
        <ThirdStep />
      </TabPane>

      <TabPane tab="Итого" key="4" disabled={tabsContainer.isFourthTabDisabled}>
        <FourthStep />
      </TabPane>
    </Tabs>
  )
}
