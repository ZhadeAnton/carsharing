import React from 'react'

import './styles.scss'
import { parseDate } from '../../../utils/dateUtils'
import useFourthStepContainer from './useFourthStepContainer'
import CarPlatesNumber from '../../car/carPlates'
import OrderInfo from '../../forms/orderInfo'
import OrderModal from '../../orderModal'
import CarInfoField from '../../car/carInfoField'
import CarName from '../../car/carName'
import CarImage from '../../car/carImage'

export default function FourthStep() {
  const stepContainer = useFourthStepContainer()

  return (
    <section className='step-four step'>
      <section className='step-four__left step__left'>
        <div className='step-four__left--info'>
          <CarName
            carModel={stepContainer.selectedCar?.categoryId.name}
            carName={stepContainer.selectedCar?.name}
          />

          <CarPlatesNumber
            carPlatesNumber={stepContainer.selectedCar?.categoryId.name}
          />

          <div className='step-four__info'>
            { stepContainer.isCarFullTank &&
              <CarInfoField
                title='Топливо'
                value='100%'
              />
            }

            <CarInfoField
              title='Доступна с'
              value={parseDate(stepContainer.dateFrom)}
            />
          </div>
        </div>

        <div className='step-four__image-wrapper'>
          <CarImage carImage={stepContainer.selectedCar?.thumbnail.originalname} />
        </div>
      </section>

      <div className='step__right'>
        <OrderInfo
          buttonTitle='Заказать'
          orderFields={stepContainer.fourthStepFields}
          price={stepContainer.totalPriceOfSelectedCar}
          isButtonDisable={false}
          onButtonClick={stepContainer.handleOpenModal}
        />
      </div>

      { stepContainer.isModal &&
        <OrderModal
          title='Подтвердить заказ'
          onConfirmClick={stepContainer.handleConfirmOrder}
          onRefuseClick={stepContainer.handleCloseModal}
        />
      }
    </section>
  )
}
