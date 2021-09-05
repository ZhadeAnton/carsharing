import React, { useEffect } from 'react'

import './styles.scss'
import { parseDate } from '../../../utils/dateUtils'
import { useAppSelector } from '../../../hooks/usePreTypedHook'
import useToggle from '../../../hooks/useToggle'
import { getTownField } from '../../../redux/location/locationSelectors'
import {
  getCarColorField,
  getCarLeaseField,
  getCarModelFiled,
  getCarRateField,
  totalCarPriceSelector
} from '../../../redux/car/carSelectors'
// import { setOrder } from '../../../redux/order/orderActionCreators'
import { ICheckbox } from '../../../interfaces/inputInterfaces'
import CarPlatesNumber from '../../car/carPlates'
import OrderInfo from '../../forms/orderInfo'
import OrderModal from '../../orderModal'
import CarInfoField from '../../car/carInfoField'
import CarName from '../../car/carName'
import CarImage from '../../car/carImage'
import { getConfirmedOrder } from '../../../API/orderAPI'

export default function FourthStep() {
  // const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)
  const [isModal, setIsModal] = useToggle()

  const selectedCar = state.car.selectedCar
  // const carColor = state.car.carColor
  const dateFrom = state.car.dateFrom
  // const dateTo = state.car.dateTo
  const carCheckBoxGroup = state.car.carCheckBoxGroup

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

  const handleConfirmOrder = () => {
    // dispatch(setOrder({
    //   carId: selectedCar?.id,
    //   color: carColor.value,
    //   dateFrom: dateFrom,
    //   dateTo: dateTo,

    // }))
    setIsModal(false)
  }

  const handleCloseModal = () => {
    setIsModal(false)
  }

  const handleOpenModal = () => {
    setIsModal(true)
  }

  useEffect(() => {
    getConfirmedOrder().then((res) => console.log(res))
  })

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
