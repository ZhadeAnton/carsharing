import React from 'react'
import moment from 'moment'

import './styles.scss'
import { IOrderPageContainer } from '../../../containers/orderPage/orderPageInterfaces'
import { ICarState } from '../../../redux/car/carReducer'
import { useAppDispatch } from '../../../hooks/usePreTypedHook'
import { setOrder } from '../../../redux/order/orderActionCreators'
import useToggle from '../../../hooks/useToggle'
import CarPlatesNumber from '../../carsList/car/carPlates'
import OrderInfo from '../../forms/orderInfo'
import OrderModal from '../../orderModal'

interface Props {
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
          <h5 className='step-four__car-name'>
            { `${props.selectedCar?.carModel}, ${props.selectedCar?.carName}` }
          </h5>

          <CarPlatesNumber carPlatesNumber={props.selectedCar?.carPlateNumber} />

          <div className='step-four__info'>
            { props.isFullTank &&
            <div className='step-four__info--field'>
              <h6 className='step-four__info--title'>
                Топливо
              </h6>

              <output className='step-four__info--number'>
                100%
              </output>
            </div>
            }

            <div className='step-four__info--field'>
              <h6 className='step-four__info--title'>
                Доступна с
              </h6>

              <output className='step-four__info--number'>
                { moment(props.dateFrom).format('DD.MM.YYYY HH:mm') }
              </output>
            </div>
          </div>
        </div>

        <div className='step-four__left--image-wrapper'>
          <img
            src={props.selectedCar?.carImage}
            alt={props.selectedCar?.carName}
            className='step-four__left--image'
          />
        </div>
      </section>

      <div className='step__right'>
        <OrderInfo
          orderFields={props.stepFourOrderFields}
          buttonTitle='Заказать'
          isButtonDisable={false}
          onButtonClick={() => setIsModal(true)}
        />
      </div>

      { isModal &&
        <OrderModal
          onConfirmClick={handleConfirmOrder}
          onRefuseClick={() => setIsModal(false)}
        />
      }
    </section>
  )
}
