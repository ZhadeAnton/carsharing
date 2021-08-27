import { ICar } from '../../interfaces/carsInterfaces';
import { ICheckbox, IDate, IRadioButton } from '../../interfaces/inputInterfaces';

export const SELECT_CAR = 'SELECT_CAR'
export interface ISelectCar {
  type: typeof SELECT_CAR,
  payload: ICar
}

export const SELECT_CAR_QUALITY = 'SELECT_CAR_QUALITY'
export interface ISelectCarQuality {
  type: typeof SELECT_CAR_QUALITY,
  payload: IRadioButton
}

export const CAR_CHECKBOX_CHANGE = 'CAR_CHECKBOX_CHANGE'
export interface ICheckboxChange {
  type: typeof CAR_CHECKBOX_CHANGE,
  payload: Array<ICheckbox>
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
| ISelectCar
| ISelectCarQuality
| ICheckboxChange
| ISerCarColor
| ISetCarRate
| ISetDateFrom
| ISetDateTo
| IRemoveDateFrom
| IRemoveDateTo
