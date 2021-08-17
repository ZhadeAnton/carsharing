import React from 'react'

import './styles.scss'
import Aside from '../aside'
import Footer from '../footer'

export default function MainPage() {
  return (
    <main className='main-page'>
      <Aside />

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
