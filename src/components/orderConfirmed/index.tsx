import React from 'react'

import './styles.scss'
import { parseDate } from '../../utils/dateUtils'
import CarImage from '../car/carImage'
import CarInfoField from '../car/carInfoField'
import CarName from '../car/carName'
import CarPlatesNumber from '../car/carPlates'
import OrderInfo from '../forms/orderInfo'
import OrderModal from '../orderModal'
import useFourthStepContainer from '../steps/fourthStep/useFourthStepContainer'

export default function OrderConfirmed() {
  const orderConfirmed = useFourthStepContainer()

  return (
    <section className='step-four step order-confirmed'>
      <section className='step-four__left step__left'>
        <div className='step-four__left--info order-confirmed__info'>
          <h4 className='order-confirmed__info--title'>
            Ваш заказ подтверждён
          </h4>

          <CarName
            carModel={orderConfirmed.selectedCar?.categoryId.name}
            carName={orderConfirmed.selectedCar?.name}
          />

          <CarPlatesNumber
            carPlatesNumber={orderConfirmed.selectedCar?.categoryId.name}
          />

          <div className='step-four__info'>
            { orderConfirmed.isCarFullTank &&
              <CarInfoField title='Топливо' value='100%' />
            }

            <CarInfoField
              title='Доступна с'
              value={parseDate(orderConfirmed.dateFrom)}
            />
          </div>
        </div>

        <div className='step-four__image-wrapper'>
          <CarImage carImage={orderConfirmed.selectedCar?.thumbnail.path} />
        </div>
      </section>

      <div className='step__right'>
        <OrderInfo
          orderFields={orderConfirmed.fourthStepFields}
          buttonTitle='Отменить'
          price={orderConfirmed.totalPriceOfSelectedCar}
          isRedButton={true}
          isButtonDisable={false}
          onButtonClick={orderConfirmed.handleOpenModal}
        />
      </div>

      { orderConfirmed.isModal &&
        <OrderModal
          title='Отменить заказ'
          onConfirmClick={orderConfirmed.handleRemovemOrder}
          onRefuseClick={orderConfirmed.handleCloseModal}
        />
      }
    </section>
  )
}
