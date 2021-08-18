import React from 'react'

import './styles.scss'
import { slides } from '../../utils/sliderUtils'
import useToggle from '../../hooks/useToggle'
import Header from '../../components/header'
import Aside from '../../components/aside'
import Footer from '../../components/footer'
import MainArticle from '../../components/mainArticle'
import Slider from '../../components/slider'
import HamburgerMenu from '../../components/hamburgerMenu'
import OverlayMenu from '../../components/overlayMenu'

export default function MainPage() {
  const [isOpen, setIsOpen] = useToggle(false)

  return (
    <main className='main-page'>
      <div className='main-page__aside'>
        <Aside />
      </div>

      <section className='main-page__content'>
        <Header />

        <section className='main-page__info'>
          <MainArticle />
        </section>

        <Footer />
      </section>

      <section className='main-page__slider'>
        <Slider slides={slides} />
      </section>

      <div className='main-page__menu'>
        <HamburgerMenu
          isOpen={isOpen}
          onClickByMenu={setIsOpen}
        />
      </div>

      { isOpen && <OverlayMenu /> }
    </main>
  )
}
