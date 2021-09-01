import React from 'react'

import './styles.scss'
import { IOrderPageContainer } from '../../containers/orderPage/orderPageInterfaces'
import { ICarState } from '../../redux/car/carReducer'
import { parseDate } from '../../utils/dateUtils'
import { useAppDispatch } from '../../hooks/usePreTypedHook'
import { removeOrder } from '../../redux/order/orderActionCreators'
import useToggle from '../../hooks/useToggle'
import CarImage from '../car/carImage'
import CarInfoField from '../car/carInfoField'
import CarName from '../car/carName'
import CarPlatesNumber from '../car/carPlates'
import OrderInfo from '../forms/orderInfo'
import OrderModal from '../orderModal'

interface Props {
  selectedCar: ICarState['selectedCar'],
  dateFrom: ICarState['dateFrom'],
  totalPriceOfSelectedCar: IOrderPageContainer['totalPriceOfSelectedCar'],
  stepFourOrderFields: IOrderPageContainer['stepFourOrderFields'],
  isFullTank: IOrderPageContainer['isFullTank']
}

export default function OrderConfirmed(props: Props) {
  const dispatch = useAppDispatch()
  const [isModal, setIsModal] = useToggle()

  const handleConfirmOrder = () => {
    dispatch(removeOrder())
    setIsModal(false)
  }

  return (
    <section className='step-four step order-confirmed'>
      <section className='step-four__left step__left'>
        <div className='step-four__left--info order-confirmed__info'>
          <h4 className='order-confirmed__info--title'>
            Ваш заказ подтверждён
          </h4>

          <CarName
            carModel={props.selectedCar?.carModel}
            carName={props.selectedCar?.carName}
          />

          <CarPlatesNumber carPlatesNumber={props.selectedCar?.carPlateNumber} />

          <div className='step-four__info'>
            { props.isFullTank &&
              <CarInfoField title='Топливо' value='100%' />
            }

            <CarInfoField
              title='Доступна с'
              value={parseDate(props.dateFrom)}
            />
          </div>
        </div>

        <div className='step-four__image-wrapper'>
          <CarImage carImage={props.selectedCar?.carImage} />
        </div>
      </section>

      <div className='step__right'>
        <OrderInfo
          orderFields={props.stepFourOrderFields}
          buttonTitle='Отменить'
          price={props.totalPriceOfSelectedCar}
          isRedButton={true}
          isButtonDisable={false}
          onButtonClick={() => setIsModal(true)}
        />
      </div>

      { isModal &&
        <OrderModal
          title='Отменить заказ'
          onConfirmClick={handleConfirmOrder}
          onRefuseClick={() => setIsModal(false)}
        />
      }
    </section>
  )
}
