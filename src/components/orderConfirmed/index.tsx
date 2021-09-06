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
  totalCarPriceSelector
} from '../../redux/car/carSelectors'
import { getTownField } from '../../redux/location/locationSelectors'
import { ICheckbox } from '../../interfaces/inputInterfaces'
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

  const selectedCar = state.car.selectedCar
  const dateFrom = state.car.dateFrom
  const orderId = state.order.confirmedOrder!.id
  const carCheckBoxGroup = state.car.carColorOrtions

  let isCarFullTank = false
  const totalPriceOfSelectedCar = totalCarPriceSelector(state)

  const townField = getTownField(state)
  const carModelField = getCarModelFiled(state)
  const carColorField = getCarColorField(state)
  const carRateField = getCarRateField(state)
  const carLeaseField = getCarLeaseField(state)

  const fourthStepFields = [
    townField, carModelField, carColorField, carRateField, carLeaseField
  ]

  carCheckBoxGroup.forEach((item: ICheckbox) => {
    if (item.isChecked) fourthStepFields.push({ title: item.value, value: 'Да' })
    if (item.value === 'Полный бак' && item.isChecked) isCarFullTank = !isCarFullTank
  })

  const handleRemovemOrder = () => {
    dispatch(removeOrder(orderId))
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

          <CarName carName={selectedCar?.name} />

          {
            selectedCar?.number &&
          <CarPlatesNumber carPlatesNumber={selectedCar?.number} />
          }

          <div className='step-four__info'>
            { isCarFullTank &&
            <CarInfoField
              title='Топливо'
              value='100%'
            />
            }

            <CarInfoField
              title='Доступна с'
              value={parseDate(dateFrom)}
            />
          </div>
        </div>

        <div className='step-four__image-wrapper'>
          <CarImage carImage={selectedCar?.thumbnail.path} />
        </div>
      </section>

      <div className='step__right'>
        <OrderInfo
          orderFields={fourthStepFields}
          buttonTitle='Отменить'
          price={totalPriceOfSelectedCar}
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
