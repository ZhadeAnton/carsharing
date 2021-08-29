import React from 'react'

import './styles.scss'
import ButtonPrimary from '../buttons/buttonPrimary'

export default function OrderModal() {
  return (
    <div className='order-modal'>
      <div className='order-modal__block'>
        <h5 className='order-modal__block--title'>
          Подтвердить заказ
        </h5>

        <div className='order-modal__block--buttons-block'>
          <ButtonPrimary>
            Подтвердить
          </ButtonPrimary>

          <ButtonPrimary isRed>
            Вернуться
          </ButtonPrimary>
        </div>
      </div>
    </div>
  )
}
