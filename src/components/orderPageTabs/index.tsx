import React from 'react'
import { Tabs } from 'antd'
const { TabPane } = Tabs;

import './styles.scss'
import { useAppDispatch, useAppSelector } from '../../hooks/usePreTypedHook';
import FirstStep from '../steps/firstStep';
import SecondStep from '../steps/secondStep';
import ThirdStep from '../steps/thirdStep';
import FourthStep from '../steps/fourthStep';
// import { isFirstStepDisabledSelector } from '../../redux/location/locationSelectors';
// import {
//   isSecondStepDisabledSelector,
//   isThirdStepDisabledSelector
// } from '../../redux/car/carSelectors';
import { setCurrentTab } from '../../redux/order/orderActionCreators';

export default function OrderPageTabs() {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)

  const currentTabPosition = state.order.currentTabPosition

  // const isFirstStepDisabled = isFirstStepDisabledSelector(state)
  // const isSecondStepDisabled = isSecondStepDisabledSelector(state)
  // const isThirdStepDisable = isThirdStepDisabledSelector(state)

  // const isSecondTabDisabled = isFirstStepDisabled
  // const isThirdTabDisabled = isSecondTabDisabled || isSecondStepDisabled
  // const isFourthTabDisabled = isThirdTabDisabled || isThirdStepDisable

  const handleChangeActiveTab = (key: string) => {
    dispatch(setCurrentTab(key))
  }

  return (
    <Tabs
      type="card"
      activeKey={currentTabPosition}
      className='order-page__header-row'
      onChange={(key: string) => handleChangeActiveTab(key)}
    >
      <TabPane tab="Местоположение" key="1">
        <FirstStep />
      </TabPane>

      <TabPane tab="Модель" key="2">
        <SecondStep />
      </TabPane>

      <TabPane tab="Дополнительно" key="3">
        <ThirdStep />
      </TabPane>

      <TabPane tab="Итого" key="4">
        <FourthStep />
      </TabPane>
    </Tabs>
  )
}
