import moment from 'moment'

import { ICar } from '../interfaces/carsInterfaces'
import { IDate } from '../interfaces/inputInterfaces'

interface IProps {
  cityId: {
    name: string,
    id: string
  },
  pointId: {
    address: string,
    name: string,
    cityId: {
      name: string,
      id: string
    } | undefined,
    id: string
  },
  selectedCar: ICar | null,
  carColor: string | undefined,
  carRate: string,
  dateFrom: IDate,
  dateTo: IDate,
  totalPrice: number | undefined,
  isFullTank: boolean,
  isNeedChildChair: boolean,
  isRightWheel: boolean,
}

export const createOrderBody = (props: IProps) => {
  return {
    'orderStatusId': {
      'name': 'Новые',
      'id': '5ebc0f26099b810b946c93d5'
    },
    'cityId': {
      'name': `${props.cityId.name}`,
      'id': `${props.cityId.id}`
    },
    'pointId': {
      'address': `${props.pointId.address}`,
      'name': `${props.pointId.name}`,
      'cityId': {
        'name': `${props.cityId.name}`,
        'id': `${props.cityId.id}`
      },
      'id': '5ea9b9dd099b810b946c71d2'
    },
    'carId': {
      'name': `${props.selectedCar?.name}`,
      'description': `${props.selectedCar?.description}`,
      'priceMax': `${props.selectedCar?.priceMax}`,
      'thumbnail': {
        'size': `${props.selectedCar?.thumbnail.size}`,
        'originalname': `${props.selectedCar?.thumbnail.originalname}`,
        'mimetype': `${props.selectedCar?.thumbnail.mimetype}`,
        'path': `${props.selectedCar?.thumbnail.path}`,
      },
      'priceMin': `${props.selectedCar?.priceMin}`,
      'number': `${props.selectedCar?.number}`,
      'tank': `${props.selectedCar?.isFullTank}`,
      'colors': `${props.selectedCar?.colors}`,
      'id': `${props.selectedCar?.id}`
    },
    'color': `${props.carColor}`,
    'dateFrom': moment(props.dateFrom).valueOf(),
    'dateTo': moment(props.dateTo).valueOf(),
    'rateId': {
      'name': `${props.carRate}`
    },
    'price': props.totalPrice,
    'isFullTank': props.isFullTank,
    'isNeedChildChair': props.isNeedChildChair,
    'isRightWheel': props.isRightWheel,
    'id': '5ebc0f26099b810b946c93d5'
  }
}
