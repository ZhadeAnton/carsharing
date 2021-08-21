import React from 'react'

import './styles.scss'
import OrderField from '../orderField'
import PriceRange from '../priceRange'
import ButtonPrimary from '../../buttons/buttonPrimary'

interface Props {
}

export default function OrderInfo(props: Props) {
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

        <OrderField fieldName='Модель' fieldInfo='Huinday, I 30'/>
        <OrderField fieldName='Полный бак' fieldInfo='Да'/>

        <div className='order-info__price-range'>
          <PriceRange totalPrice={16000} />
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
