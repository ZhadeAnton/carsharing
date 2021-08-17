import React from 'react'

import './styles.scss'
import SliderDot from '../sliderDot'

interface Props {
  slides: Array<any>,
  activeIndex : number,
  setSlide: (index: number) => void
}

export default function SliderDots(props: Props) {
  return (
    <div className='slider-dots'>
      { props.slides.map((slide, i) => (
        <SliderDot
          key={i}
          index={i}
          active={props.activeIndex === i}
          setSlide={props.setSlide}
        />
      ))}
    </div>
  )
}
