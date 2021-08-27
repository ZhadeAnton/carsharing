import { ICar } from '../../interfaces/carsInterfaces'
import { ICheckbox, IDate, IRadioButton } from '../../interfaces/inputInterfaces'
import * as types from './carActonTypes'

export const selectCar = (car: ICar): types.ISelectCar => ({
  type: types.SELECT_CAR,
  payload: car
})

export const selectCarQuality = (quality: IRadioButton): types.ISelectCarQuality => ({
  type: types.SELECT_CAR_QUALITY,
  payload: quality
})

export const changeCarCheckbox = (checkboxes: Array<ICheckbox>)
  : types.ICheckboxChange => ({
  type: types.CAR_CHECKBOX_CHANGE,
  payload: checkboxes
})

export const setCarColor = (color: IRadioButton): types.ISerCarColor => ({
  type: types.SET_CAR_COLOR,
  payload: color
})

export const setCarRate = (rate: IRadioButton): types.ISetCarRate => ({
  type: types.SET_CAR_RATE,
  payload: rate
})

export const setDateFrom = (date: IDate): types.ISetDateFrom => ({
  type: types.SET_DATE_FROM,
  payload: date
})

export const setDateTo = (date: IDate): types.ISetDateTo => ({
  type: types.SET_DATE_TO,
  payload: date
})

export const removeDateFrom = (): types.IRemoveDateFrom => ({
  type: types.REMOVE_DATE_FROM
})

export const removeDateTo = (): types.IRemoveDateTo => ({
  type: types.REMOVE_DATE_TO
})
