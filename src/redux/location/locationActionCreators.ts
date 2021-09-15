import * as types from './locationActionTypes'
import { IMark, ITown } from '../../interfaces/mapInterfaces'

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

export const getAllTowns = (): types.IGetAllTowns => ({
  type: types.GET_ALL_TOWNS
})

export const getAllTownsSuccess = (towns: Array<ITown>): types.IGetAllTownsSuccess => ({
  type: types.GET_ALL_TOWNS_SUCCESS,
  payload: towns
})
