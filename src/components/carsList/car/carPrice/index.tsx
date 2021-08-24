import React from 'react'

import './styles.scss'

interface Props {
  lowPrice: number,
  highPrice: number
}

export default function CarPrice(props: Props) {
  return (
    <div className='car-price'>
      <output>
        { props.lowPrice }
      </output>

      <span>
        -
      </span>

      <output>
        { props.highPrice } &#8381;
      </output>
    </div>
  )
}
