import { ICar } from '../../interfaces/carsInterfaces'
import { IRadioButton } from '../../interfaces/inputInterfaces'
import * as types from './carActonTypes'

export const selectCar = (car: ICar): types.ISelectCar => ({
  type: types.SELECT_CAR,
  payload: car
})

export const selectCarQuality = (quality: IRadioButton)
  : types.ISelectCarQuality => ({
  type: types.SELECT_CAR_QUALITY,
  payload: quality
})
