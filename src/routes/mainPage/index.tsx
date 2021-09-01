import React from 'react'

import './styles.scss'
import { slides } from '../../utils/sliderUtils'
import Header from '../../components/header'
import Aside from '../../components/aside'
import Footer from '../../components/footer'
import MainArticle from '../../components/mainArticle'
import Slider from '../../components/slider'

export default function MainPage() {
  return (
    <main className='main-page'>
      <div className='main-page__aside'>
        <Aside />
      </div>

      <section className='main-page__content'>
        <div className='main-page__header'>
          <Header />
        </div>

        <section className='main-page__info'>
          <div className='main-page__article'>
            <MainArticle />
          </div>
        </section>

        <div className='main-page__footer'>
          <Footer />
        </div>
      </section>

      <section className='main-page__slider'>
        <Slider slides={slides}/>
      </section>
    </main>
  )
}
