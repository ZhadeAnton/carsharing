import * as types from './locationActionTypes'
import { IMark } from '../../interfaces/mapInterfaces'

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

export const setCoodrinates = (coords: IMark): types.ISetCoordinates => ({
  type: types.SET_COORDINATES,
  payload: coords
})
