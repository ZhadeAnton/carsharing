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
import StepFour from '../../components/steps/stepFour';
import OrderConfirmed from '../../components/orderConfirmed';

export default function OrderPage(props: IOrderPageContainer) {
  const [isMenuOpen, setIsMenuOpen] = useToggle(false)

  return (
    <main className='order-page'>
      <div className='order-page__aside'>
        <Aside />
      </div>

      <section className='order-page__main'>
        <div className='order-page__header container'>
          <Header />
        </div>

        { !props.isOrder &&
            <Tabs
              type="card"
              activeKey={props.activeTab}
              className='order-page__header-row'
              onChange={(key) => props.handleChangeActiveTab(key)}
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
                  dateFrom={props.dateFrom}
                  dateTo={props.dateTo}
                  stepThreeOrderFields={props.stepThreeOrderFields}
                  onChangeActiveTab={props.handleChangeActiveTab}
                  handleCheckboxChange={props.handleCheckboxChange}
                />
              </TabPane>

              <TabPane tab="Итого" key="4" disabled={props.isFourStepDisable}>
                <StepFour
                  selectedCar={props.selectedCar}
                  dateFrom={props.dateFrom}
                  stepFourOrderFields={props.stepFourOrderFields}
                  isFullTank={props.isFullTank}
                />
              </TabPane>
            </Tabs>
        }

        {
          props.isOrder &&
           <div className='order-page__header-row'>
             <div className='order-page__header-row--wrapper'>
               <h6 className='order-page__header-row--title container'>
                  Заказ номер { props.orderNumber }
               </h6>
             </div>

             <OrderConfirmed
               selectedCar={props.selectedCar}
               dateFrom={props.dateFrom}
               stepFourOrderFields={props.stepFourOrderFields}
               isFullTank={props.isFullTank}
             />
           </div>
        }
      </section>

      <HamburgerMenu
        isOpen={isMenuOpen}
        onClickByMenu={setIsMenuOpen}
      />

      { isMenuOpen && <OverlayMenu /> }
    </main>
  )
}
