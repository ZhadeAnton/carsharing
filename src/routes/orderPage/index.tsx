import React from 'react'
import { Tabs } from 'antd';
const { TabPane } = Tabs;

import './styles.scss'
import { IOrderPageContainer } from '../../containers/orderPage/orderPageInterfaces';
import useToggle from '../../hooks/useToggle'
import Aside from '../../components/aside'
import HamburgerMenu from '../../components/hamburgerMenu'
import OverlayMenu from '../../components/overlayMenu'
import Header from '../../components/header'
import StepOne from '../../components/steps/stepOne';
import StepTwo from '../../components/steps/stepTwo';
import StepThree from '../../components/steps/stepThree';

export default function OrderPage(props: IOrderPageContainer) {
  const [isOpen, setIsOpen] = useToggle(false)

  return (
    <main className='order-page'>
      <div className='order-page__aside'>
        <Aside />
      </div>

      <section className='order-page__main'>
        <div className='order-page__header container'>
          <Header />
        </div>

        <Tabs type="card" className='order-page__tabs' >
          <TabPane tab="Местоположение" key="1" >
            <StepOne
              town={props.town}
              pickUp={props.pickUp}
              stepOneOrderFields={props.stepOneOrderFields}
            />
          </TabPane>

          <TabPane tab="Модель" key="2" >
            <StepTwo
              carsList={props.carsList}
              selectedCar={props.selectedCar}
              carsSortOptions={props.carsSortOptions}
              carsSortBy={props.carsSortBy}
              stepTwoOrderFields={props.stepTwoOrderFields}
            />
          </TabPane>

          <TabPane tab="Дополнительно" key="3">
            <StepThree
              carColor={props.carColor}
              carRate={props.carRate}
              carRateOptions={props.carRateOptions}
              carColorOptions={props.carColorOptions}
              dateFrom={props.dateFrom}
              dateTo={props.dateTo}
              stepThreeOrderFields={props.stepThreeOrderFields}
            />
          </TabPane>

          <TabPane tab="Итого" key="4">
            <span>V-05</span>
          </TabPane>
        </Tabs>
      </section>

      <HamburgerMenu
        isOpen={isOpen}
        onClickByMenu={setIsOpen}
      />

      { isOpen && <OverlayMenu /> }
    </main>
  )
}
