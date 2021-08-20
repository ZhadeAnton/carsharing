import React from 'react'

import './styles.scss'

interface Props {
  town: string,
  pickPiont: string,
  minPrice: number,
  maxPrice: number
}

export default function OrderInfo(props: Props) {
  return (
    <form className='order-info'>
      <h5>
        Ваш заказ:
      </h5>

      <div>
        <h6>
          Пункт выдачи
        </h6>

        <h6>
          { props.town }, { props.pickPiont }
        </h6>
      </div>
    </form>
  )
}
