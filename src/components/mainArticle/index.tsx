import React from 'react'

import './styles.scss'
import ButtonPrimary from '../buttons/buttonPrimary'

export default function MainArticle() {
  return (
    <article className='main-article'>
      <h1 className='main-article__title'>
        Каршеринг
      </h1>

      <h1 className='main-article__title main-article__title-green'>
        Need for drive
      </h1>

      <p className='main-article__text'>
        Поминутная аренда авто твоего города
      </p>

      <ButtonPrimary>
        Забронировать
      </ButtonPrimary>
    </article>
  )
}
