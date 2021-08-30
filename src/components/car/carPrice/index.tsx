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
        { props.lowPrice.toLocaleString('ru') }
      </output>

      <span className='car-price__separator'>
        -
      </span>

      <output>
        { props.highPrice.toLocaleString('ru') } &#8381;
      </output>
    </div>
  )
}
