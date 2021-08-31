import React from 'react'

import './styles.scss'
import { IOrderPageContainer } from '../../../containers/orderPage/orderPageInterfaces'
import { ICarState } from '../../../redux/car/carReducer'
import { useAppDispatch } from '../../../hooks/usePreTypedHook'
import { setOrder } from '../../../redux/order/orderActionCreators'
import { parseDate } from '../../../utils/dateUtils'
import useToggle from '../../../hooks/useToggle'
import CarPlatesNumber from '../../car/carPlates'
import OrderInfo from '../../forms/orderInfo'
import OrderModal from '../../orderModal'
import CarInfoField from '../../car/carInfoField'
import CarName from '../../car/carName'
import CarImage from '../../car/carImage'

interface Props {
  carCurrentPrice: IOrderPageContainer['carCurrentPrice'],
  selectedCar: ICarState['selectedCar'],
  dateFrom: ICarState['dateFrom'],
  stepFourOrderFields: IOrderPageContainer['stepFourOrderFields'],
  isFullTank: IOrderPageContainer['isFullTank']
}

export default function StepFour(props: Props) {
  const dispatch = useAppDispatch()
  const [isModal, setIsModal] = useToggle()

  const handleConfirmOrder = () => {
    dispatch(setOrder())
    setIsModal(false)
  }

  return (
    <section className='step-four step'>
      <section className='step-four__left step__left'>
        <div className='step-four__left--info'>
          <CarName
            carModel={props.selectedCar?.carModel}
            carName={props.selectedCar?.carName}
          />

          <CarPlatesNumber carPlatesNumber={props.selectedCar?.carPlateNumber} />

          <div className='step-four__info'>
            { props.isFullTank &&
              <CarInfoField
                title='Топливо'
                value='100%'
              />
            }

            <CarInfoField
              title='Доступна с'
              value={parseDate(props.dateFrom)}
            />
          </div>
        </div>

        <CarImage carImage={props.selectedCar?.carImage} />
      </section>

      <div className='step__right'>
        <OrderInfo
          orderFields={props.stepFourOrderFields}
          buttonTitle='Заказать'
          price={props.carCurrentPrice}
          isButtonDisable={false}
          onButtonClick={() => setIsModal(true)}
        />
      </div>

      { isModal &&
        <OrderModal
          title='Подтвердить заказ'
          onConfirmClick={handleConfirmOrder}
          onRefuseClick={() => setIsModal(false)}
        />
      }
    </section>
  )
}
