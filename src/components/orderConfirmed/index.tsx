import React, { useEffect } from 'react'

import './styles.scss'
import useToggle from '../../hooks/useToggle'
import useHistoryPush from '../../hooks/useHistory'
import { parseDate } from '../../utils/dateUtils'
import { useAppDispatch, useAppSelector } from '../../hooks/usePreTypedHook'
import { getOrderById, removeOrder } from '../../redux/order/orderActionCreators'
import CarImage from '../car/carImage'
import CarInfoField from '../car/carInfoField'
import CarName from '../car/carName'
import CarPlatesNumber from '../car/carPlates'
import OrderInfo from '../forms/orderInfo'
import OrderModal from '../orderModal'
import Aside from '../aside'
import Header from '../header'

export default function OrderConfirmed() {
  const redirect = useHistoryPush()
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)
  const [isModal, setIsModal] = useToggle()
  const confirmedOrder = state.order.confirmedOrder

  useEffect(() => {
    dispatch(getOrderById(confirmedOrder!.id))
  }, [])

  const handleRemovemOrder = () => {
    dispatch(removeOrder(confirmedOrder!.id))
    setIsModal(false)
    redirect('/order')
  }

  const handleCloseModal = () => {
    setIsModal(false)
  }

  const handleOpenModal = () => {
    setIsModal(true)
  }

  return (
    <main className='order-page'>
      <div className='order-page__aside'>
        <Aside />
      </div>

      <section className='order-page__main'>
        <div className='order-page__header container'>
          <Header />
        </div>

        <div className='order-page__header-row'>
          <div className='order-page__header-row--wrapper'>
            <h6 className='order-page__header-row--title container'>
              Заказ номер { confirmedOrder?.id }
            </h6>
          </div>

          <section className='step-four step order-confirmed'>
            <section className='step-four__left step__left'>
              <div className='step-four__left--info order-confirmed__info'>
                <h4 className='order-confirmed__info--title'>
                  Ваш заказ подтверждён
                </h4>

                <CarName carName={confirmedOrder?.carId.name} />

                {
                  confirmedOrder?.carId.number &&
                  <CarPlatesNumber carPlatesNumber={confirmedOrder!.carId.number} />
                }

                <div className='step-four__info'>
                  { confirmedOrder?.isFullTank &&
                    <CarInfoField
                      title='Топливо'
                      value='100%'
                    />
                  }

                  { confirmedOrder?.isNeedChildChair &&
                    <CarInfoField
                      title='Детское кресло'
                      value='Включено'
                    />
                  }

                  { confirmedOrder?.isRightWheel &&
                    <CarInfoField
                      title='Правый руль'
                      value='Включено'
                    />
                  }

                  <CarInfoField
                    title='Доступна с'
                    value={parseDate(confirmedOrder?.dateFrom as any)}
                  />
                </div>
              </div>

              <div className='step-four__image-wrapper'>
                <CarImage carImage={confirmedOrder?.carId.thumbnail?.path} />
              </div>
            </section>

            <div className='step__right'>
              <OrderInfo
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
      </section>
    </main>
  )
}
