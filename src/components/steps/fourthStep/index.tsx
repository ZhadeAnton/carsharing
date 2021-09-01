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
  const fourthStepContainer = useFourthStepContainer()

  return (
    <section className='step-four step'>
      <section className='step-four__left step__left'>
        <div className='step-four__left--info'>
          <CarName
            carModel={fourthStepContainer.selectedCar?.carModel}
            carName={fourthStepContainer.selectedCar?.carName}
          />

          <CarPlatesNumber
            carPlatesNumber={fourthStepContainer.selectedCar?.carPlateNumber}
          />

          <div className='step-four__info'>
            { fourthStepContainer.isCarFullTank &&
              <CarInfoField
                title='Топливо'
                value='100%'
              />
            }

            <CarInfoField
              title='Доступна с'
              value={parseDate(fourthStepContainer.dateFrom)}
            />
          </div>
        </div>

        <div className='step-four__image-wrapper'>
          <CarImage carImage={fourthStepContainer.selectedCar?.carImage} />
        </div>
      </section>

      <div className='step__right'>
        <OrderInfo
          buttonTitle='Заказать'
          orderFields={fourthStepContainer.fourthStepFields}
          price={fourthStepContainer.totalPriceOfSelectedCar}
          isButtonDisable={false}
          onButtonClick={fourthStepContainer.handleOpenModal}
        />
      </div>

      { fourthStepContainer.isModal &&
        <OrderModal
          title='Подтвердить заказ'
          onConfirmClick={fourthStepContainer.handleConfirmOrder}
          onRefuseClick={fourthStepContainer.handleCloseModal}
        />
      }
    </section>
  )
}
