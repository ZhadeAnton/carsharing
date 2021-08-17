import React, { useState, useRef, useEffect } from 'react'

import './styles.scss'
import { ISlide } from '../../interfaces/sliderArticleInterfaces'
import SliderContent from './sliderContent'
import Slide from './slide'
import Arrow from './sliderArrow'
import SliderDots from './sliderDots'

interface Props {
  slides: Array<ISlide>
}

export default function Slider(props: Props) {
  const resizeRef = useRef<any>()
  const sliderRef = useRef<any>()

  const [sliderWidth, setSliderWidth] = useState<number>()
  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0 as any,
    transition: 0.45 as any
  })

  useEffect(() => {
    resizeRef.current = handleResize

    if (sliderRef.current) {
      setSliderWidth(sliderRef.current.offsetWidth)
    }
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
    setState({ ...state, translate: sliderWidth! * activeIndex, transition: 0 })
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
      translate: (activeIndex + 1) * sliderWidth!
    })
  }

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (props.slides.length - 1) * sliderWidth!,
        activeIndex: props.slides.length - 1
      })
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * sliderWidth!
    })
  }

  const setSlide = (index: number) => {
    setState({
      ...state,
      activeIndex: index,
      translate: (index) * sliderWidth!
    })
  }

  return (
    <div
      className='slider'
      style={{overflow: 'hidden'}}
      ref={sliderRef}
    >
      <SliderContent
        translate={translate}
        transition={transition}
        width={sliderWidth! * props.slides.length}
      >
        { props.slides.map((slide, i: number) => (
          <Slide key={i} { ...slide } />
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
