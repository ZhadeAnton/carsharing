import React from 'react'

import './styles.scss'

interface Props {
  dots: any,
  active: number,
  onSetActiveSlide: (dot: any) => void
}

export default function SliderDots(props: Props) {
  return (
    <div className='slider-dots'>
      { props.dots.map((_: any, i: number) => (
        <span
          key={i}
          className={`slider-dots__dot${props.active === i ? '-active' : ''}`}
          onClick={() => props.onSetActiveSlide(i)}
          data-testid='slider-dot'
        />
      ))}
    </div>
  )
}
