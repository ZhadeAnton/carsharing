import React from 'react'
import ButtonPrimary from '../buttons/buttonPrimary'

import './styles.scss'

export default function MainArticle() {
  return (
    <article className='main-article'>
      <h1 className='main-article__title'>
        Каршеринг <br />
        <span>Need for drive</span>
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
