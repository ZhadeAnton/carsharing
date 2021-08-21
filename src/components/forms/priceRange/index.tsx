import React from 'react'

import './styles.scss'

interface Props {
  lowPrice?: number,
  highPrice?: number,
  totalPrice?: number
}

export default function PriceRange(props: Props) {
  return (
    <div className='price-range'>
      <h5 className='price-range__title'>
        <strong>
          Цена:&nbsp;
        </strong>
      </h5>

      {
        props.lowPrice && props.highPrice
        ?
        <h6 className='price-range__price'>
          от { props.lowPrice.toLocaleString('ru') }
          до { props.highPrice.toLocaleString('ru') } &#8381;
        </h6>
        :
        <h6 className='price-range__price'>
          { props.totalPrice?.toLocaleString('ru') } &#8381;
        </h6>
      }
    </div>
  )
}
