import React from 'react'


import './styles.scss'
import useToggle from '../../hooks/useToggle'
import Aside from '../../components/aside'
import HamburgerMenu from '../../components/hamburgerMenu'
import OverlayMenu from '../../components/overlayMenu'
import Header from '../../components/header'
import Breadcrumbs from '../../components/breadcrumb'

export default function OrderPage() {
  const [isOpen, setIsOpen] = useToggle(false)

  return (
    <main className='order-page'>
      <Aside />

      <section className='order-page__main'>
        <Header />

        <Breadcrumbs activeIdx={0}/>
      </section>

      <div className='order-page__menu'>
        <HamburgerMenu
          isOpen={isOpen}
          onClickByMenu={setIsOpen}
        />
      </div>

      { isOpen && <OverlayMenu /> }
    </main>
  )
}
