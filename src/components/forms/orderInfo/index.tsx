import React from 'react'

import './styles.scss'
import OrderField from '../orderField'
import PriceRange from '../priceRange'
import ButtonPrimary from '../../buttons/buttonPrimary'

export default function OrderInfo() {
  return (
    <form className='order-info'>
      <h5 className='order-info__title'>
        Ваш заказ:
      </h5>

      <div>
        <OrderField
          fieldName='Пункт выдачи'
          fieldInfo='Ульяновск, Наримова 42'
        />

        <div className='order-info__price-range'>
          <PriceRange
            lowPrice={8000}
            highPrice={12000}
          />
        </div>

        <div className='order-info__button'>
          <ButtonPrimary>
            Выбрать модель
          </ButtonPrimary>
        </div>
      </div>
    </form>
  )
}
