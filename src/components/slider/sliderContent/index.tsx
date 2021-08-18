import React from 'react'

import { ISlide } from '../../../interfaces/sliderArticleInterfaces'
import Slide from '../slide'

interface Props {
  translate: number,
  transition: number,
  width: number,
  slides: Array<ISlide>
}

export default function SliderContent(props: Props) {
  return (
    <div
      style={{
        transform: `translateX(-${props.translate}px)`,
        transition: `transform ease-out ${props.transition}s`,
        width: `${props.width}px`,
        display: 'flex',
        height: 100 + '%'
      }}
    >
      { props.slides.map((slide, i: number) => (
        <Slide key={i} { ...slide } />
      )) }
    </div>
  )
}
