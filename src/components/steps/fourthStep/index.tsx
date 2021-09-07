import React from 'react'
import moment from 'moment'
import { Spin } from 'antd'

import './styles.scss'
import useToggle from '../../../hooks/useToggle'
import { parseDate } from '../../../utils/dateUtils'
import { useAppDispatch, useAppSelector } from '../../../hooks/usePreTypedHook'
import { getTownField } from '../../../redux/location/locationSelectors'
import { setOrder } from '../../../redux/order/orderActionCreators'
import * as carSelectors from '../../../redux/car/carSelectors'
import CarPlatesNumber from '../../car/carPlates'
import OrderInfo from '../../forms/orderInfo'
import OrderModal from '../../orderModal'
import CarInfoField from '../../car/carInfoField'
import CarName from '../../car/carName'
import CarImage from '../../car/carImage'
import CarInfoList from '../../car/carInfoList'

export default function FourthStep() {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)
  const [isModal, setIsModal] = useToggle()

  const selectedCar = state.car.selectedCar
  const carCheckboxOrtions = state.car.carCheckboxOrtions
  const carRate = state.car.carRate
  const carColor = state.car.carColor
  const dateFrom = state.car.dateFrom
  const dateTo = state.car.dateTo
  const isLoading = state.order.isLoading
  const isFullTank = false
  const isNeedChildChair = false
  const isRightWheel = false
  const totalPriceOfSelectedCar = carSelectors.totalCarPriceSelector(state)
  const townField = getTownField(state)
  const carModelField = carSelectors.getCarModelFiled(state)
  const carColorField = carSelectors.getCarColorField(state)
  const carRateField = carSelectors.getCarRateField(state)
  const carLeaseField = carSelectors.getCarLeaseField(state)
  const carCheckboxFields = carSelectors.getCarCheckboxFields(state)
  const fourthStepFields = [
    townField,
    carModelField,
    carColorField,
    carRateField,
    carLeaseField,
    ...carCheckboxFields
  ]

  const order = {
    'orderStatusId': {
      'name': 'Новые',
      'id': '5ebc0f26099b810b946c93d5'
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
      'name': `${selectedCar?.name}`,
      'description': `${selectedCar?.description}`,
      'priceMax': `${selectedCar?.priceMax}`,
      'thumbnail': {
        'size': `${selectedCar?.thumbnail.size}`,
        'originalname': `${selectedCar?.thumbnail.originalname}`,
        'mimetype': `${selectedCar?.thumbnail.mimetype}`,
        'path': `${selectedCar?.thumbnail.path}`,
      },
      'priceMin': `${selectedCar?.priceMin}`,
      'number': `${selectedCar?.number}`,
      'tank': `${selectedCar?.isFullTank}`,
      'colors': `${selectedCar?.colors}`,
      'id': `${selectedCar?.id}`
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
    'isRightWheel': isRightWheel,
    'id': '5ebc0f26099b810b946c93d5'
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
        <Spin tip="Loading..." spinning={isLoading}>
          <div className='step-four__left--info'>
            <CarName carName={selectedCar?.name} />

            {
              selectedCar?.number &&
              <CarPlatesNumber carPlatesNumber={selectedCar?.number} />
            }

            <div className='step-four__info'>
              <CarInfoList carCheckboxes={carCheckboxOrtions} />

              <CarInfoField
                title='Доступна с'
                value={parseDate(dateFrom)}
              />
            </div>
          </div>

          <div className='step-four__image-wrapper'>
            <CarImage carImage={selectedCar?.thumbnail.path} />
          </div>
        </Spin>
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
