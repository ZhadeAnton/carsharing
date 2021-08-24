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
        Цена:&nbsp;
      </h5>

      {
        props.lowPrice && props.highPrice
        ?
          <div className='price-range__price'>
            <h6 className='price-range__price--title'>
              от&nbsp;
            </h6>

            <output>
              { props.lowPrice.toLocaleString('ru') }&nbsp;
            </output>

            <h6 className='price-range__price--title'>
              до&nbsp;
            </h6>

            <output>
              { props.highPrice.toLocaleString('ru') } &#8381;
            </output>
          </div>
        :
          <h6 className='price-range__price'>
            { props.totalPrice?.toLocaleString('ru') } &#8381;
          </h6>
      }
    </div>
  )
}
