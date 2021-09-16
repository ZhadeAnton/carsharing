import * as types from './locationActionTypes'
import { IMark, IPickUp, ITown } from '../../interfaces/mapInterfaces'

export const addMark = (mark: IMark): types.IAddMarker => ({
  type: types.ADD_MARKER,
  payload: mark
})

export const setTown = (town: string): types.ISetTown => ({
  type: types.SET_TOWN,
  payload: town
})

export const setPickUp = (pickUp: string): types.ISetPickUp => ({
  type: types.SET_PICK_UP,
  payload: pickUp
})

export const setCurrentLocation = (location: IMark): types.ISetCurrentLocation => ({
  type: types.SET_CURRENT_LOCATION,
  payload: location
})

export const getTowns = (): types.IGetTowns => ({
  type: types.GET_ALL_TOWNS
})

export const getTownsSuccess = (towns: Array<ITown>): types.IGetTownsSuccess => ({
  type: types.GET_ALL_TOWNS_SUCCESS,
  payload: towns
})

export const getPickUps = (): types.IGetPickUps => ({
  type: types.GET_PICK_UPS
})

export const getPickUpsSuccess = (pickUps: Array<IPickUp>): types.IGetPickUpsSuccess => ({
  type: types.GET_PICK_UPS_SUCCESS,
  payload: pickUps
})
