import React from 'react'

import './styles.scss'
import { ISlide } from '../../../interfaces/sliderArticleInterfaces'
import SliderArticle from '../sliderArticle'

export default function Slide(props: ISlide) {
  return (
    <div
      className='slide'
      style={{
        backgroundImage: `url(${props.background})`
      }}
    >
      <SliderArticle
        title={props.title}
        text={props.text}
        buttonTitle={props.buttonTitle}
        buttonColor={props.buttonColor}
      />
    </div>
  )
}
