import React from 'react'

import './styles.scss'
import { parseDate } from '../../utils/dateUtils'
import { useAppDispatch, useAppSelector } from '../../hooks/usePreTypedHook'
import useToggle from '../../hooks/useToggle'
import {
  getCarColorField,
  getCarLeaseField,
  getCarModelFiled,
  getCarRateField,
} from '../../redux/car/carSelectors'
import { getTownField } from '../../redux/location/locationSelectors'
import { removeOrder } from '../../redux/order/orderActionCreators'
import CarImage from '../car/carImage'
import CarInfoField from '../car/carInfoField'
import CarName from '../car/carName'
import CarPlatesNumber from '../car/carPlates'
import OrderInfo from '../forms/orderInfo'
import OrderModal from '../orderModal'

export default function OrderConfirmed() {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)
  const [isModal, setIsModal] = useToggle()

  const confirmedOrder = state.order.confirmedOrder

  const townField = getTownField(state)
  const carModelField = getCarModelFiled(state)
  const carColorField = getCarColorField(state)
  const carRateField = getCarRateField(state)
  const carLeaseField = getCarLeaseField(state)

  const fourthStepFields = [
    townField, carModelField, carColorField, carRateField, carLeaseField
  ]

  const handleRemovemOrder = () => {
    localStorage.removeItem('carOrderId')
    dispatch(removeOrder(confirmedOrder!.id))
    setIsModal(false)
  }

  const handleCloseModal = () => {
    setIsModal(false)
  }

  const handleOpenModal = () => {
    setIsModal(true)
  }

  return (
    <section className='step-four step order-confirmed'>
      <section className='step-four__left step__left'>
        <div className='step-four__left--info order-confirmed__info'>
          <h4 className='order-confirmed__info--title'>
            Ваш заказ подтверждён
          </h4>

          <CarName carName={confirmedOrder!.carId.name} />

          {
            confirmedOrder!.carId.number &&
            <CarPlatesNumber carPlatesNumber={confirmedOrder!.carId.number} />
          }

          <div className='step-four__info'>
            { confirmedOrder!.isFullTank &&
              <CarInfoField
                title='Топливо'
                value='100%'
              />
            }

            <CarInfoField
              title='Доступна с'
              value={parseDate(confirmedOrder!.dateFrom as any)}
            />
          </div>
        </div>

        <div className='step-four__image-wrapper'>
          <CarImage carImage={confirmedOrder!.carId.thumbnail?.path} />
        </div>
      </section>

      <div className='step__right'>
        <OrderInfo
          orderFields={fourthStepFields}
          buttonTitle='Отменить'
          price={confirmedOrder?.price}
          isRedButton={true}
          isButtonDisable={false}
          onButtonClick={handleOpenModal}
        />
      </div>

      { isModal &&
        <OrderModal
          title='Отменить заказ'
          onConfirmClick={handleRemovemOrder}
          onRefuseClick={handleCloseModal}
        />
      }
    </section>
  )
}
