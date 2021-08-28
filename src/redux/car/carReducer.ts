import { ICar } from '../../interfaces/carsInterfaces'
import { ICarTypes } from './carActonTypes'
import { ICheckbox, IDate, IRadioButton } from '../../interfaces/inputInterfaces'
import * as types from './carActonTypes'
import { carsMock } from '../../utils/carsListMock'

export interface ICarState {
  carsList: Array<ICar>,
  selectedCar: ICar | null,
  carsSortOptions: Array<IRadioButton>,
  carColorOptions: Array<IRadioButton>,
  carRateOptions: Array<IRadioButton>,
  carCheckBoxGroup: Array<ICheckbox>,
  carsSortBy: IRadioButton,
  carColor: IRadioButton,
  carRate: IRadioButton,
  dateFrom: IDate,
  dateTo: IDate
}

const INIT_STATE: ICarState = {
  carsList: carsMock,
  selectedCar: null,
  carsSortOptions: [
    {title: 'Все модели', value: 'Все модели'},
    {title: 'Эконом', value: 'Эконом'},
    {title: 'Премиум', value: 'Премиум'},
  ],
  carColorOptions: [
    {title: 'Любой', value: 'Любой'},
    {title: 'Красный', value: 'Красный'},
    {title: 'Голубой', value: 'Голубой'},
  ],
  carRateOptions: [
    {title: 'Поминутно, 7₽/мин', value: 'Поминутно'},
    {title: 'На сутки 1999 ₽/сутки', value: 'На сутки'}
  ],
  carCheckBoxGroup: [
    {title: 'Полный бак, 500р', value: 'Полный бак', id: 0, isChecked: true},
    {title: 'Детское кресло, 200р', value: 'Детское кресло', id: 1, isChecked: false},
    {title: 'Правый руль, 1600р', value: 'Правый руль', id: 2, isChecked: false}
  ],
  carsSortBy: {title: 'Все модели', value: 'Все модели'},
  carColor: {title: 'Любой', value: 'Любой'},
  carRate: {title: 'Поминутно, 7₽/мин', value: 'Поминутно'},
  dateFrom: null,
  dateTo: null
}

const carReducer = (state = INIT_STATE, action: ICarTypes): ICarState => {
  switch (action.type) {
    case types.SELECT_CAR:
      return {
        ...state,
        selectedCar: action.payload
      }

    case types.SELECT_CAR_QUALITY:
      return {
        ...state,
        carsSortBy: action.payload
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
        carCheckBoxGroup: action.payload
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
