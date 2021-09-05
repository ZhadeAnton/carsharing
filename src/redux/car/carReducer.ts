import { ICar } from '../../interfaces/carsInterfaces'
import { ICarTypes } from './carActonTypes'
import { ICheckbox, IDate, IRadioButton } from '../../interfaces/inputInterfaces'
import * as types from './carActonTypes'
import {
  carsSortOptions,
  carRateOptions,
  carCheckBoxGroup
} from '../../utils/carsUtils'
import { changeCarCheckboxGroup } from './carUtils'

export interface ICarState {
  carsListfromServer: Array<ICar>,
  carsCount: number | null,
  selectedCar: ICar | null,
  carsSortOptions: Array<IRadioButton>,
  carRateOptions: Array<IRadioButton>,
  carCheckBoxGroup: Array<ICheckbox>,
  carsSortBy: IRadioButton,
  carColor: IRadioButton,
  carRate: IRadioButton,
  dateFrom: IDate,
  dateTo: IDate,
  isLoading: boolean
}

const INIT_STATE: ICarState = {
  carsListfromServer: [],
  carsCount: null,
  selectedCar: null,
  carsSortOptions,
  carRateOptions,
  carCheckBoxGroup,
  carsSortBy: {title: 'Все модели', value: 'Все модели'},
  carColor: {title: 'Любой', value: 'Любой'},
  carRate: {title: 'Поминутно, 7₽/мин', value: 'Поминутно'},
  dateFrom: null,
  dateTo: null,
  isLoading: false
}

const carReducer = (state = INIT_STATE, action: ICarTypes): ICarState => {
  switch (action.type) {
    case types.SELECT_CAR:
      return {
        ...state,
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

    case types.SET_SORTING_OF_CARS:
      return {
        ...state,
        carsSortBy: action.payload,
      }

    case types.GET_CARS_BY_PAGE:
    case types.SET_SORTING_OF_CARS:
    case types.GET_PREMIUM_CARS:
    case types.GET_ECONOMY_CARS:
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
        carCheckBoxGroup: changeCarCheckboxGroup(state.carCheckBoxGroup, action.payload)
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

    default:
      return state
  }
}

export default carReducer
