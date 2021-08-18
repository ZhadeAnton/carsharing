import React from 'react'

import './styles.scss'
import leftArrow from '../../../assets/SVG/leftArrow.svg'
import rightArrow from '../../../assets/SVG/rightArrow.svg'

interface Props {
  direction: string,
  handleClick: () => void
}

const Arrow = (props: Props) => {
  const preffix = props.direction === 'right' ? 'right' : 'left'

  return (
    <div
      className={`slider-arrow slider-arrow__${preffix}`}
      onClick={props.handleClick}
    >
      <div className='slider-arrow__overlay' />

      {props.direction === 'right' ? <img src={rightArrow} /> : <img src={leftArrow} />}
    </div>
  )
}

export default Arrow
