import { ICarFromServer } from '../../interfaces/carsInterfaces'
import { ICheckbox, IDate, IRadioButton } from '../../interfaces/inputInterfaces'
import * as types from './carActonTypes'

export const getCarsByPage = (page: number): types.IGetCarsByPage => ({
  type: types.GET_CARS_BY_PAGE,
  payload: page
})

export const getCarsByPageSuccess = (listOfCars: Array<ICarFromServer>)
  : types.IGetAllCarsSuccess => ({
  type: types.GET_ALL_CARS_SUCCESS,
  payload: listOfCars
})

export const setCountOfCars = (carsCount: number): types.ISetCountOfCars => ({
  type: types.SET_COUNT_OF_CARS,
  payload: carsCount
})

export const selectCar = (car: ICarFromServer): types.ISelectCar => ({
  type: types.SELECT_CAR,
  payload: car
})

export const selectCarQuality = (quality: IRadioButton): types.ISelectCarQuality => ({
  type: types.SELECT_CAR_QUALITY,
  payload: quality
})

export const changeCarCheckbox = (checkbox: ICheckbox) : types.ICheckboxChange => ({
  type: types.CAR_CHECKBOX_CHANGE,
  payload: checkbox
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
