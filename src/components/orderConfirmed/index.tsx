import React, { useEffect } from 'react'

import './styles.scss'
import useToggle from '../../hooks/useToggle'
import useHistoryPush from '../../hooks/useHistory'
import { parseDate } from '../../utils/dateUtils'
import { useAppDispatch, useAppSelector } from '../../hooks/usePreTypedHook'
import { getTownField } from '../../redux/location/locationSelectors'
import { getOrderById, removeOrder } from '../../redux/order/orderActionCreators'
import * as carSelectors from '../../redux/car/carSelectors'
import CarImage from '../car/carImage'
import CarInfoField from '../car/carInfoField'
import CarName from '../car/carName'
import CarPlatesNumber from '../car/carPlates'
import OrderInfo from '../forms/orderInfo'
import OrderModal from '../orderModal'

export default function OrderConfirmed() {
  const redirect = useHistoryPush()
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)
  const [isModal, setIsModal] = useToggle()

  const carOrderId = localStorage.getItem('carOrderId')
  const confirmedOrder = state.order.confirmedOrder
  const isOrderConfirmed = state.order.isOrderConfirmed

  const townField = getTownField(state)
  const carModelField = carSelectors.getCarModelFiled(state)
  const carColorField = carSelectors.getCarColorField(state)
  const carRateField = carSelectors.getCarRateField(state)
  const carLeaseField = carSelectors.getCarLeaseField(state)
  const fourthStepFields = [
    townField, carModelField, carColorField, carRateField, carLeaseField
  ]

  useEffect(() => {
    if (carOrderId) dispatch(getOrderById(carOrderId))
  }, [carOrderId])

  useEffect(() => {
    if (!isOrderConfirmed) redirect('/order')
  }, [isOrderConfirmed])

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

  if (!confirmedOrder) return <main className='order-page' />

  return (
    <main className='order-page'>
      <div className='order-page__header-row'>
        <section className='step-four step order-confirmed'>
          <section className='step-four__left step__left'>
            <div className='order-page__header-row--wrapper'>
              <h6 className='order-page__header-row--title container'>
                Заказ номер { confirmedOrder.id }
              </h6>
            </div>

            <div className='step-four__left--info order-confirmed__info'>
              <h4 className='order-confirmed__info--title'>
                Ваш заказ подтверждён
              </h4>

              <CarName carName={confirmedOrder.carId.name} />

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

                { confirmedOrder!.isNeedChildChair &&
                  <CarInfoField
                    title='Детское кресло'
                    value='Включено'
                  />
                }

                { confirmedOrder!.isRightWheel &&
                  <CarInfoField
                    title='Правый руль'
                    value='Включено'
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
      </div>
    </main>
  )
}
