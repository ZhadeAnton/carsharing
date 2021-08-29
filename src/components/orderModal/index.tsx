import React from 'react'

import './styles.scss'
import ButtonPrimary from '../buttons/buttonPrimary'

interface Props {
  onConfirmClick: () => void,
  onRefuseClick: () => void
}

export default function OrderModal(props: Props) {
  return (
    <div className='order-modal'>
      <div className='order-modal__block'>
        <h5 className='order-modal__block--title'>
          Подтвердить заказ
        </h5>

        <div className='order-modal__block--buttons-block'>
          <ButtonPrimary onClick={props.onConfirmClick}>
            Подтвердить
          </ButtonPrimary>

          <ButtonPrimary isRed onClick={props.onRefuseClick}>
            Вернуться
          </ButtonPrimary>
        </div>
      </div>
    </div>
  )
}
