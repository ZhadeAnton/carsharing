import { ICar } from '../../interfaces/carsInterfaces';
import { ICheckbox, IDate, IRadioButton } from '../../interfaces/inputInterfaces';

export const GET_CARS_BY_PAGE = 'GET_CARS_BY_PAGE'
export interface IGetCarsByPage {
  type: typeof GET_CARS_BY_PAGE,
  payload: number
}

export const GET_ALL_CARS_SUCCESS = 'GET_ALL_CARS_SUCCESS'
export interface IGetAllCarsSuccess {
  type: typeof GET_ALL_CARS_SUCCESS,
  payload: Array<ICar>
}

export const GET_ECONOMY_CARS = 'GET_ECONOMY_CARS'
export interface IGetEconomyCars {
  type: typeof GET_ECONOMY_CARS,
  payload: number
}

export const GET_PREMIUM_CARS = 'GET_PREMIUM_CARS'
export interface IGetPremiumCars {
  type: typeof GET_PREMIUM_CARS,
  payload: number
}

export const SET_COUNT_OF_CARS = 'SET_COUNT_OF_CARS'
export interface ISetCountOfCars {
  type: typeof SET_COUNT_OF_CARS,
  payload: number
}

export const SELECT_CAR = 'SELECT_CAR'
export interface ISelectCar {
  type: typeof SELECT_CAR,
  payload: ICar
}

export const SET_SORTING_OF_CARS = 'SET_SORTING_OF_CARS'
export interface ISetSortingOfCars {
  type: typeof SET_SORTING_OF_CARS,
  payload: IRadioButton
}

export const CAR_CHECKBOX_CHANGE = 'CAR_CHECKBOX_CHANGE'
export interface ICheckboxChange {
  type: typeof CAR_CHECKBOX_CHANGE,
  payload: ICheckbox
}

export const SET_CAR_COLOR = 'SET_CAR_COLOR'
export interface ISerCarColor {
  type: typeof SET_CAR_COLOR,
  payload: IRadioButton
}

export const SET_CAR_RATE = 'SET_CAR_RATE'
export interface ISetCarRate {
  type: typeof SET_CAR_RATE,
  payload: IRadioButton
}

export const SET_DATE_FROM = 'SET_DATE_FROM'
export interface ISetDateFrom {
  type: typeof SET_DATE_FROM,
  payload: IDate
}

export const SET_DATE_TO = 'SET_DATE_TO'
export interface ISetDateTo {
  type: typeof SET_DATE_TO,
  payload: IDate
}

export const REMOVE_DATE_FROM = 'REMOVE_DATE_FROM'
export interface IRemoveDateFrom {
  type: typeof REMOVE_DATE_FROM
}

export const REMOVE_DATE_TO = 'REMOVE_DATE_TO'
export interface IRemoveDateTo {
  type: typeof REMOVE_DATE_TO
}

export type ICarTypes =
| IGetCarsByPage
| IGetAllCarsSuccess
| ISetCountOfCars
| ISelectCar
| ISetSortingOfCars
| ICheckboxChange
| ISerCarColor
| ISetCarRate
| ISetDateFrom
| ISetDateTo
| IGetEconomyCars
| IGetPremiumCars
| IRemoveDateFrom
| IRemoveDateTo
