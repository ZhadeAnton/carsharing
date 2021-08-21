import React from 'react'

import './styles.scss'
import useHistory from '../../hooks/useHistory'
import ButtonPrimary from '../buttons/buttonPrimary'

export default function MainArticle() {
  const history = useHistory()

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

      <div className='main-article__button'>
        <ButtonPrimary onClick={() => history('/order')}>
            Забронировать
        </ButtonPrimary>
      </div>
    </article>
  )
}
