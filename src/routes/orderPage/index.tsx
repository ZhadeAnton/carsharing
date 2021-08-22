import React from 'react'

import './styles.scss'
import useToggle from '../../hooks/useToggle'
import Aside from '../../components/aside'
import HamburgerMenu from '../../components/hamburgerMenu'
import OverlayMenu from '../../components/overlayMenu'
import Header from '../../components/header'
import Breadcrumbs from '../../components/breadcrumb'
import GoogleMap from '../../components/googleMap'
import SearchLocationForm from '../../components/forms/locationForm'
import OrderInfo from '../../components/forms/orderInfo'

const location = {
  address: 'Ульяновск',
  lat: 54.3187,
  lng: 48.3978,
}

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

        <div className='order-page__breadcrumbs'>
          <div className='container'>
            <Breadcrumbs activeIdx={0}/>
          </div>
        </div>

        <section className='order-page__content container'>
          <section className='order-page__content--left'>
            <SearchLocationForm />

            <div className='order-page__content--map'>
              <h6 className='order-page__content--title'>
                Выбрать на карте:
              </h6>

              <GoogleMap
                location={location}
                zoomLevel={13}
              />
            </div>
          </section>

          <section className='order-page__content--right'>
            <OrderInfo />
          </section>
        </section>
      </section>

      <HamburgerMenu
        isOpen={isOpen}
        onClickByMenu={setIsOpen}
      />

      { isOpen && <OverlayMenu /> }
    </main>
  )
}
