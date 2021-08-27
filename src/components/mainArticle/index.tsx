import React from 'react'

import './styles.scss'
import useHistory from '../../hooks/useHistory'
import ButtonPrimary from '../buttons/buttonPrimary'

export default function MainArticle() {
  const history = useHistory()

  return (
    <article className='main-article'>
      <h1 className='main-article__title'>
        Каршеринг <br />
        <span>Need for drive</span>
      </h1>

      <p className='main-article__text'>
        Поминутная аренда авто твоего города
      </p>

      <div className='main-article__button'>
        <ButtonPrimary
          isDisable={false}
          onClick={() => history('/order')}
        >
          Забронировать
        </ButtonPrimary>
      </div>
    </article>
  )
}
