import React from 'react'

import './styles.scss'
import Header from '../../components/header'
import Aside from '../../components/aside'
import Footer from '../../components/footer'
import MainArticle from '../../components/mainArticle'
import Slider from '../../components/slider'
import { images } from '../../components/slider/utils'

export default function MainPage() {
  return (
    <main className='main-page'>
      <Aside />

      <section className='main-page__content'>
        <Header />

        <section className='main-page__info'>
          <MainArticle />
        </section>

        <Footer />
      </section>

      <section className='main-page__slider'>
        <Slider slides={images} />
      </section>
    </main>
  )
}
