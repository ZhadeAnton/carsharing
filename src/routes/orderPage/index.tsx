import React from 'react'
import { Tabs } from 'antd';
const { TabPane } = Tabs;

import './styles.scss'
import useToggle from '../../hooks/useToggle'
import { IMark } from '../../interfaces/mapInterfaces';
import Aside from '../../components/aside'
import HamburgerMenu from '../../components/hamburgerMenu'
import OverlayMenu from '../../components/overlayMenu'
import Header from '../../components/header'
import StepOne from '../../components/steps/stepOne';
import StepTwo from '../../components/steps/stepTwo';
import StepThree from '../../components/steps/stepThree';

interface Props {
  markers: Array<IMark>,
  onAddMark: (mark: IMark) => void
}

export default function OrderPage(props: Props) {
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

        <Tabs
          type="card"
          className='order-page__tabs'
        >
          <TabPane
            tab="Местоположение"
            key="1"
          >
            <StepOne
              markers={props.markers}
              onAddMark={props.onAddMark}
            />
          </TabPane>

          <TabPane
            tab="Модель"
            key="2"
          >
            <StepTwo />
          </TabPane>

          <TabPane
            tab="Дополнительно"
            key="3"
          >
            <StepThree />
          </TabPane>

          <TabPane
            tab="Итого"
            key="4"
          >
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
