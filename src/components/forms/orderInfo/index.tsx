import React from 'react'

import './styles.scss'
import { IOrderField } from '../../../interfaces/orderIntarfaces'
import OrderField from '../orderField'
import PriceRange from '../priceRange'
import ButtonPrimary from '../../buttons/buttonPrimary'

interface Props {
  buttonTitle: string,
  orderFields: Array<IOrderField>,
  price?: number,
  isButtonDisable: boolean,
  onButtonClick?: () => void
}

export default function OrderInfo(props: Props) {
  return (
    <form className='order-info'>
      <h5 className='order-info__title'>
      Ваш заказ:
      </h5>

      <div>
        {
          props.orderFields?.map((field, i) => (
            <OrderField
              key={i}
              fieldName={field.title}
              fieldInfo={field.value}
            />
          ))
        }

        {
          props.price &&
          <div className='order-info__price-range'>
            <PriceRange
              // lowPrice={props.lowPrice}
              // highPrice={props.highPrice}
            />
          </div>
        }

        <div className='order-info__button'>
          <ButtonPrimary
            isDisable={props.isButtonDisable}
            onClick={props.onButtonClick}
          >
            { props.buttonTitle }
          </ButtonPrimary>
        </div>

      </div>
    </form>
  )
}
