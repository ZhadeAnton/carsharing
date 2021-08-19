import React from 'react'

import './styles.scss'

interface Props {
  active: boolean,
  index: number,
  setSlide: (index: number) => void
}

export default function SliderDot(props: Props) {
  return (
    <span
      className='slider-dot'
      style={{
        background: props.active ? '#0EC261' : '#FFFFFF'
      }}
      onClick={() => props.setSlide(props.index)}
      data-testid='slider-dot'
    />
  )
}
