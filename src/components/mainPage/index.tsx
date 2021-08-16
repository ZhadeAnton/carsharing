import React from 'react'

import './styles.scss'
import MainAside from './aside'

export default function MainPage() {
  return (
    <main className='main-page'>
      <MainAside />

      <section>
        Main info
      </section>

      <section>
        Slider
      </section>
    </main>
  )
}
