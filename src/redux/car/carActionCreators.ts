import { ICarFromServer } from '../../interfaces/carsInterfaces'
import { ICheckbox, IDate, IRadioButton } from '../../interfaces/inputInterfaces'
import * as types from './carActonTypes'

export const getAllCars = (page: number): types.IGetCarsByPage => ({
  type: types.GET_CARS_BY_PAGE,
  payload: page
})

export const getEconomyCars = (page: number): types.IGetEconomyCars => ({
  type: types.GET_ECONOMY_CARS,
  payload: page
})

export const getPremiumCars = (page: number): types.IGetPremiumCars => ({
  type: types.GET_PREMIUM_CARS,
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

export const setSortingOfCars = (sortBy: IRadioButton): types.ISetSortingOfCars => ({
  type: types.SET_SORTING_OF_CARS,
  payload: sortBy
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
