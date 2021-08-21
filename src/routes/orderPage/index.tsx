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
import OrderField from '../../components/forms/orderField'
import PriceRange from '../../components/forms/priceRange'

const location = {
  address: 'Ульяновск',
  lat: 54.3187,
  lng: 48.3978,
}

export default function OrderPage() {
  const [isOpen, setIsOpen] = useToggle(false)

  return (
    <main className='order-page'>
      <Aside />

      <section className='order-page__main container'>
        <Header />

        <Breadcrumbs activeIdx={0}/>

        <section className='order-page__content'>
          <section className='order-page__content--left'>
            <SearchLocationForm />

            <div className='order-page__content--map'>
              <h6 className='order-page__content--title'>
                Выбрать на карте:
              </h6>

              <GoogleMap location={location} zoomLevel={14}/>
            </div>
          </section>

          <section className='order-page__content--right'>
            <OrderField fieldName='Пункт выдачи' fieldInfo='Ульяновск, Наримова 42'/>

            <PriceRange totalPrice={16000} />
          </section>
        </section>
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
