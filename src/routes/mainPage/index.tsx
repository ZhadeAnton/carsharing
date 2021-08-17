import React from 'react'

import './styles.scss'
import Header from '../../components/header'
import Aside from '../../components/aside'
import Footer from '../../components/footer'

export default function MainPage() {
  return (
    <main className='main-page'>
      <Aside />

      <section>
        <Header />

        <Footer />
      </section>

      <section>
        Slider
      </section>
    </main>
  )
}
