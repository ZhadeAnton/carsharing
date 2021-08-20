/* eslint-disable react/display-name */
import React, { useState, useRef } from 'react'
import { Carousel } from 'antd';

import { ISlide } from '../../interfaces/sliderArticleInterfaces';
import Slide from '../slider/slide';
import Arrow from '../slider/sliderArrow';
import SliderDots from '../slider/sliderDots';

interface Props {
  slides: Array<ISlide>
}

export default function Slider(props: Props) {
  const sliderRef = useRef<any>()
  const [activeSlide, setActiveSlide] = useState<number>(0)

  const handleClickByDot = (index: number) => {
    setActiveSlide(index)
    sliderRef.current.goTo(index)
  }

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 400,
    accessibility: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <Arrow direction="left" />,
    nextArrow: <Arrow direction="right" />,
    beforeChange: (_: any, next: number) => setActiveSlide(next),
    appendDots: (dots: any) => (
      <SliderDots
        dots={dots}
        active={activeSlide}
        onSetActiveSlide={handleClickByDot}
      />
    )
  }

  return (
    <Carousel ref={sliderRef} {...settings}>
      {
        props.slides.map((slide, i: number) => (
          <Slide key={i} { ...slide }/>
        ))
      }

    </Carousel>
  )
}
