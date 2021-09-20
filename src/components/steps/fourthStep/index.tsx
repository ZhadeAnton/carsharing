import React from 'react'

import './styles.scss'
import useToggle from '../../../hooks/useToggle'
import { parseDate } from '../../../utils/dateUtils'
import { useAppDispatch, useAppSelector } from '../../../hooks/usePreTypedHook'
import { setOrder } from '../../../redux/order/orderActionCreators'
import { createOrderBody } from '../../../utils/orderUtils'
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
  const totalPriceOfSelectedCar = carSelectors.totalCarPriceSelector(state)

  const order = createOrderBody({
    selectedCar,
    carColor: carColor.value,
    carRate: carRate.rateTypeId.name,
    dateFrom,
    dateTo,
    totalPrice: totalPriceOfSelectedCar,
    isFullTank: carCheckboxOrtions[0].isChecked,
    isNeedChildChair: carCheckboxOrtions[1].isChecked,
    isRightWheel: carCheckboxOrtions[2].isChecked
  })

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
      </section>

      <div className='step__right'>
        <OrderInfo
          buttonTitle='Заказать'
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
