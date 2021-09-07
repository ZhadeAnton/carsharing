import moment from 'moment'

import { ICar } from '../../interfaces/carsInterfaces'
import { ICarTypes } from './carActonTypes'
import { ICheckbox, IDate, IRadioButton, IRate } from '../../interfaces/inputInterfaces'
import * as types from './carActonTypes'
import {
  carsSortOptions,
  carCheckboxOrtions
} from '../../utils/carsUtils'
import { changeCarCheckboxGroup } from './carUtils'
import {
  IOrderTypes,
  GET_ORDER_BY_ID_SUCCESS,
  REMOVE_ORDER
} from '../order/orderActionTypes'

export interface ICarState {
  carsListfromServer: Array<ICar>,
  carsCount: number | null,
  selectedCar: ICar | null,
  carsSortOptions: Array<IRadioButton>,
  carRateOptions: Array<IRate> | null,
  carCheckboxOrtions: Array<ICheckbox>,
  carsSortBy: IRadioButton,
  carColor: IRadioButton,
  carRate: IRate,
  dateFrom: IDate,
  dateTo: IDate,
  isLoading: boolean
}

const INIT_STATE: ICarState = {
  carsListfromServer: [],
  carsCount: null,
  selectedCar: null,
  carsSortOptions,
  carRateOptions: null,
  carCheckboxOrtions,
  carsSortBy: {title: 'Все модели', value: 'Все модели'},
  carColor: {title: 'Любой', value: 'Любой'},
  carRate: {price: 7, rateTypeId: {name: 'Суточный'}},
  dateFrom: null,
  dateTo: null,
  isLoading: false
}

type ITypes = ICarTypes | IOrderTypes

const carReducer = (state = INIT_STATE, action: ITypes): ICarState => {
  switch (action.type) {
    case types.SELECT_CAR:
      return {
        ...state,
        carColor: {title: 'Любой', value: 'Любой'},
        selectedCar: action.payload
      }

    case types.GET_ALL_CARS_SUCCESS:
      return {
        ...state,
        carsListfromServer: action.payload,
        isLoading: false
      }

    case types.SET_COUNT_OF_CARS:
      return {
        ...state,
        carsCount: action.payload
      }

    case types.GET_RATE_TYPES_SUCCESS:
      return {
        ...state,
        carRateOptions: action.payload,
        isLoading: false
      }

    case types.SET_SORTING_OF_CARS:
      return {
        ...state,
        carsSortBy: action.payload,
      }

    case GET_ORDER_BY_ID_SUCCESS:
      return {
        ...state,
        dateFrom: moment(action.payload.dateFrom),
        dateTo: moment(action.payload.dateTo),
        carColor: {title: action.payload.color, value: action.payload.color},
        selectedCar: {
          isRightWheel: action.payload.isRightWheel,
          isNeedChildChair: action.payload.isNeedChildChair,
          isFullTank: action.payload.isFullTank,
          number: action.payload.carId.number,
          name: action.payload.carId.name,
          thumbnail: action.payload.thumbnail
        }
      }

    case types.GET_CARS_BY_PAGE:
    case types.SET_SORTING_OF_CARS:
    case types.GET_PREMIUM_CARS:
    case types.GET_ECONOMY_CARS:
    case types.GET_RATE_TYPES:
      return {
        ...state,
        isLoading: true
      }

    case types.SET_CAR_COLOR:
      return {
        ...state,
        carColor: action.payload
      }

    case types.SET_CAR_RATE:
      return {
        ...state,
        carRate: action.payload
      }

    case types.CAR_CHECKBOX_CHANGE:
      return {
        ...state,
        carCheckboxOrtions: changeCarCheckboxGroup(
            state.carCheckboxOrtions, action.payload)
      }

    case types.SET_DATE_FROM:
      return {
        ...state,
        dateFrom: action.payload
      }

    case types.SET_DATE_TO:
      return {
        ...state,
        dateTo: action.payload
      }

    case types.REMOVE_DATE_FROM:
      return {
        ...state,
        dateFrom: null
      }

    case types.REMOVE_DATE_TO:
      return {
        ...state,
        dateTo: null
      }

    case REMOVE_ORDER:
      return {
        ...INIT_STATE
      }

    default:
      return state
  }
}

export default carReducer
