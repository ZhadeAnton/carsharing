/* eslint-disable quotes */
import React from 'react'
import moment from 'moment'

import './styles.scss'
import { parseDate } from '../../../utils/dateUtils'
import { useAppDispatch, useAppSelector } from '../../../hooks/usePreTypedHook'
import useToggle from '../../../hooks/useToggle'
import { getTownField } from '../../../redux/location/locationSelectors'
import {
  getCarColorField,
  getCarLeaseField,
  getCarModelFiled,
  getCarRateField,
  totalCarPriceSelector
} from '../../../redux/car/carSelectors'
import { ICheckbox } from '../../../interfaces/inputInterfaces'
import CarPlatesNumber from '../../car/carPlates'
import OrderInfo from '../../forms/orderInfo'
import OrderModal from '../../orderModal'
import CarInfoField from '../../car/carInfoField'
import CarName from '../../car/carName'
import CarImage from '../../car/carImage'
import { setOrder } from '../../../redux/order/orderActionCreators'

export default function FourthStep() {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)
  const [isModal, setIsModal] = useToggle()

  const selectedCar = state.car.selectedCar
  const carRate = state.car.carRate
  const carColor = state.car.carColor
  const dateFrom = state.car.dateFrom
  const dateTo = state.car.dateTo
  const carCheckBoxGroup = state.car.carColorOrtions

  let isFullTank = false
  let isNeedChildChair = false
  let isRightWheel = false
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
    if (item.value === 'Полный бак' && item.isChecked) isFullTank = !isFullTank
    if (item.value === 'Правый руль' && item.isChecked) isRightWheel = !isRightWheel
    if (item.value === 'Детское кресло' && item.isChecked) {
      isNeedChildChair = !isNeedChildChair
    }
  })

  const order = {
    'orderStatusId': {
      'name': 'Новый заказ',
      'id': '5e26a191099b810b946c5d89'
    },
    'cityId': {
      'name': 'Ульяновск',
      'id': '5ea07ad3099b810b946c6254'
    },
    'pointId': {
      'address': 'Гончарова, 27',
      'name': 'Основная Парковка',
      'cityId': {
        'name': 'Ульяновск',
        'id': '5ea07ad3099b810b946c6254'
      },
      'id': '5ea9b9dd099b810b946c71d2'
    },
    'carId': {
      'name': `${selectedCar?.id}`
    },
    'color': `${carColor.value}`,
    'dateFrom': moment(dateFrom).valueOf(),
    'dateTo': moment(dateTo).valueOf(),
    'rateId': {
      'name': `${carRate.rateTypeId.name}`
    },
    'price': totalPriceOfSelectedCar,
    'isFullTank': isFullTank,
    'isNeedChildChair': isNeedChildChair,
    'isRightWheel': isRightWheel
  }

  const handleConfirmOrder = () => {
    dispatch(setOrder(order))
    setIsModal(false)
  }

  const handleCloseModal = () => {
    setIsModal(false)
  }

  const handleOpenModal = () => {
    setIsModal(true)
  }

  return (
    <section className='step-four step'>
      <section className='step-four__left step__left'>
        <div className='step-four__left--info'>
          <CarName carName={selectedCar?.name} />

          {
            selectedCar?.number &&
            <CarPlatesNumber carPlatesNumber={selectedCar?.number} />
          }

          <div className='step-four__info'>
            { isFullTank &&
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
          buttonTitle='Заказать'
          orderFields={fourthStepFields}
          price={totalPriceOfSelectedCar}
          isButtonDisable={false}
          onButtonClick={handleOpenModal}
        />
      </div>

      { isModal &&
        <OrderModal
          title='Подтвердить заказ'
          onConfirmClick={handleConfirmOrder}
          onRefuseClick={handleCloseModal}
        />
      }
    </section>
  )
}
