import React from 'react'

import './styles.scss'
import leftArrow from '../../../assets/SVG/leftArrow.svg'
import rightArrow from '../../../assets/SVG/rightArrow.svg'

interface Props {
  direction: string,
  onClick?: () => void
}

const Arrow = (props: Props) => {
  return (
    <div
      className={`slider-arrow slider-arrow__${props.direction}`}
      onClick={props.onClick}
      data-testid='slider-arrow'
    >
      <div className='slider-arrow__overlay' />

      {props.direction === 'right' ? <img src={rightArrow} /> : <img src={leftArrow} />}
    </div>
  )
}

export default Arrow
