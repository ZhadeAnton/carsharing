import React from 'react'
import { Tabs } from 'antd';
const { TabPane } = Tabs;

import './styles.scss'
import useToggle from '../../hooks/useToggle'
import Aside from '../../components/aside'
import HamburgerMenu from '../../components/hamburgerMenu'
import OverlayMenu from '../../components/overlayMenu'
import Header from '../../components/header'
import StepOne from '../../components/steps/stepOne';

export default function OrderPage() {
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
            <StepOne />
          </TabPane>

          <TabPane
            tab="Модель"
            key="2"
          >
            <h1>V-03</h1>
          </TabPane>

          <TabPane
            tab="Дополнительно"
            key="3"
          >
            <h1>V-04</h1>
          </TabPane>

          <TabPane
            tab="Итого"
            key="4"
          >
            <h1>V-05</h1>
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
