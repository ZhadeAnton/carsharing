import React from 'react'

import './styles.scss'
import { IOrderField } from '../../../interfaces/orderIntarfaces'
import { getTownField } from '../../../redux/location/locationSelectors'
import { useAppSelector } from '../../../hooks/usePreTypedHook'
import {
  getCarCheckboxFields,
  getCarColorField,
  getCarLeaseField,
  getCarModelFiled,
  getCarOrderCheckboxField,
  getCarRateField,
} from '../../../redux/car/carSelectors'
import OrderField from '../orderField'
import PriceRange from '../priceRange'
import ButtonPrimary from '../../buttons/buttonPrimary'

interface Props {
  buttonTitle: string,
  lowPrice?: number,
  highPrice?: number,
  price?: number,
  isRedButton?: boolean,
  isButtonDisable: boolean,
  onButtonClick?: () => void
}

export default function OrderInfo(props: Props) {
  const state = useAppSelector((state) => state)
  const isCarsTabActive = state.car.isCarTabActive
  const isCarExtraTabActive = state.car.isCarExtraTabActive
  const isOrderConfirmed = state.order.isOrderConfirmed

  const townField = getTownField(state)
  const carModelField = getCarModelFiled(state)
  const carColorField = getCarColorField(state)
  const carRateField = getCarRateField(state)
  const carLeaseField = getCarLeaseField(state)
  const carCheckboxFields = getCarCheckboxFields(state)
  const carOrderCheckboxFields = getCarOrderCheckboxField(state)
  const orderFields: Array<IOrderField> = [townField]

  if (isCarsTabActive || isOrderConfirmed) {
    orderFields.push(carModelField)
  }

  if (isCarExtraTabActive || isOrderConfirmed) {
    orderFields.push(
        carColorField,
        carRateField,
        carLeaseField,
    )
  }

  isOrderConfirmed
  ? orderFields.push(...carOrderCheckboxFields)
  : orderFields.push(...carCheckboxFields)

  return (
    <form className='order-info'>
      <h5 className='order-info__title'>
        Ваш заказ:
      </h5>

      <div>
        {
          orderFields.map((field, i) => {
            if (field.value) {
              return (
                <OrderField
                  key={i}
                  fieldName={field.title}
                  fieldInfo={field.value}
                />
              )
            }
          })
        }

        {
          props.lowPrice && props.highPrice &&
          <div className='order-info__price-range'>
            <PriceRange
              lowPrice={props.lowPrice}
              highPrice={props.highPrice}
            />
          </div>
        }

        {
          props.price &&
          <div className='order-info__price-range'>
            <PriceRange
              totalPrice={props.price}
            />
          </div>
        }

        <div className='order-info__button'>
          <ButtonPrimary
            isDisable={props.isButtonDisable}
            onClick={props.onButtonClick}
            isRed={props.isRedButton}
          >
            { props.buttonTitle }
          </ButtonPrimary>
        </div>
      </div>
    </form>
  )
}
