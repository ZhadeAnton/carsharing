import React from 'react'

import './styles.scss'
import { ISliderArticle } from '../../../interfaces/sliderArticleInterfaces'
import ButtonSecondary from '../../buttons/buttonSecondary'

export default function SliderArticle(props: ISliderArticle) {
  return (
    <article className='slider-article'>
      <h2 className='slider-article__title'>
        { props.title }
      </h2>

      <p className='slider-article__text'>
        { props.text }
      </p>

      <ButtonSecondary>
        { props.buttonTitle }
      </ButtonSecondary>
    </article>
  )
}
