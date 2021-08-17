import React from 'react'

import './styles.scss'
import MainAside from './aside'
import Footer from '../footer'

export default function MainPage() {
  return (
    <main className='main-page'>
      <MainAside />

      <section>
        Main info

        <Footer />
      </section>

      <section>
        Slider
      </section>
    </main>
  )
}
