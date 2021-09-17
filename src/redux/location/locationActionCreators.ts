import * as types from './locationActionTypes'
import { IMark, IPickUp, ITown } from '../../interfaces/mapInterfaces'

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

export const setMarkersByCurrentLocation = (markers: Array<IMark>)
  : types.ISetMarkersByCurrentLocation => ({
  type: types.SET_MARKERS_BY_CURRENT_LOCATION,
  payload: markers
})

export const setCurrentMarker = (mark: IMark): types.ISetCurrentMarker => ({
  type: types.SET_CURRENT_MARKER,
  payload: mark
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

export const clearPickUp = (): types.IClearPickUp => ({
  type: types.CLEAR_PICK_UP
})

export const clearTown = (): types.IClearTown => ({
  type: types.CLEAR_TOWN
})
