import React, { useState, useRef, useEffect } from 'react'

import './styles.scss'
import useWindowSize from '../../hooks/useWindowSize'
import SliderContent from './sliderContent'
import Slide from './slider'
import Arrow from './sliderArrow'
import SliderDots from './sliderDots'

interface Props {
  slides: any
}

export default function Slider(props: Props) {
  const resizeRef = useRef<any>()
  const windowMeasures = useWindowSize()
  const windowWidth = windowMeasures.width ? windowMeasures.width : 0

  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0 as any,
    transition: 0.45 as any
  })

  useEffect(() => {
    resizeRef.current = handleResize
  })

  useEffect(() => {
    const resize = () => {
      resizeRef.current()
    }

    const onResize = window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', onResize!)
    }
  }, [])

  const { translate, transition, activeIndex } = state

  const handleResize = () => {
    setState({ ...state, translate: windowMeasures.width, transition: 0 })
  }

  const nextSlide = () => {
    if (activeIndex === props.slides.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0
      })
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * windowWidth
    })
  }

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (props.slides.length - 1) * windowWidth,
        activeIndex: props.slides.length - 1
      })
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * windowWidth
    })
  }

  const setSlide = (index: number) => {
    setState({
      ...state,
      activeIndex: index,
      translate: (index) * windowWidth
    })
  }

  return (
    <div className='slider' style={{overflow: 'hidden'}}>
      <SliderContent
        translate={translate}
        transition={transition}
        width={windowWidth * props.slides.length}
      >
        { props.slides.map((slide: any, i: number) => (
          <Slide key={slide + i} content={slide} />
        )) }
      </SliderContent>

      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />

      <SliderDots
        slides={props.slides}
        activeIndex={activeIndex}
        setSlide={setSlide}
      />
    </div>
  )
}
