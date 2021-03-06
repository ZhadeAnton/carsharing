import { ICar } from '../../interfaces/carsInterfaces'
import { ICheckbox, IDate, IRadioButton, IRate } from '../../interfaces/inputInterfaces'
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

export const getCarsSuccess = (listOfCars: Array<ICar>)
  : types.IGetAllCarsSuccess => ({
  type: types.GET_ALL_CARS_SUCCESS,
  payload: listOfCars
})

export const setCountOfCars = (carsCount: number): types.ISetCountOfCars => ({
  type: types.SET_COUNT_OF_CARS,
  payload: carsCount
})

export const selectCar = (car: ICar): types.ISelectCar => ({
  type: types.SELECT_CAR,
  payload: car
})

export const getRateTypes = (): types.IGetRateTypes => ({
  type: types.GET_RATE_TYPES
})

export const getRateTypesSuccess = (rateTypes: Array<IRate>)
  : types.IGetRateTypesSuccess => ({
  type: types.GET_RATE_TYPES_SUCCESS,
  payload: rateTypes
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

export const setCarRate = (rate: IRate): types.ISetCarRate => ({
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

export const setIsCarTabActive = (): types.IIsCarTabActive => ({
  type: types.IS_CARS_TAB_ACTIVE
})

export const setIsCarExtraActive = (): types.IIsCarExtraTabActive => ({
  type: types.IS_CARS_EXTRA_TAB_ACTIVE
})
