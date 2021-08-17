import React, { useState } from 'react'

import './styles.scss'
import useWindowSize from '../../hooks/useWindowSize'
import SliderContent from './sliderContent'
import Slide from './slide'

interface Props {
  slides: any
}

export default function Slider(props: Props) {
  const windowMeasures = useWindowSize()

  const [state] = useState({
    translate: 0 as any,
    transition: 0.45 as any
  })

  return (
    <div className='slider' style={{overflow: 'hidden'}}>
      <SliderContent
        translate={state.translate}
        transition={state.transition}
        width={(windowMeasures.width ? windowMeasures.width : 0) * props.slides.length}
      >
        {props.slides.map((slide: any, i: number) => (
          <Slide key={slide + i} content={slide} />
        ))}
      </SliderContent>
    </div>
  )
}
