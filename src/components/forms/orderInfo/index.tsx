import React from 'react'

import './styles.scss'
import OrderField from '../orderField'
import PriceRange from '../priceRange'
import ButtonPrimary from '../../buttons/buttonPrimary'

interface Props {
  orderFields: Array<{title: string, value: string | undefined}>,
  lowPrice: number | undefined,
  highPrice: number | undefined
}

export default function OrderInfo(props: Props) {
  return (
    <form className='order-info'>
      <h5 className='order-info__title'>
        Ваш заказ:
      </h5>

      <div>
        {
          props.orderFields.map((field, i) => (
            <OrderField
              key={i}
              fieldName={field.title}
              fieldInfo={field.value}
            />
          ))
        }

        {
          props.lowPrice && props.highPrice &&
          <div className='order-info__price-range'>
            <PriceRange
              lowPrice={props.lowPrice}
              highPrice={props.highPrice}
            />
          </div>
        }

        <div className='order-info__button'>
          <ButtonPrimary>
            Выбрать модель
          </ButtonPrimary>
        </div>
      </div>
    </form>
  )
}
