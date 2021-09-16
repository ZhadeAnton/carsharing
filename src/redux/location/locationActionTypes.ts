import { IMark, IPickUp, ITown } from '../../interfaces/mapInterfaces';

export const ADD_MARKER = 'ADD_MARKER'
export interface IAddMarker {
  type: typeof ADD_MARKER,
  payload: IMark
}

export const SET_TOWN = 'SET_TOWN'
export interface ISetTown {
  type: typeof SET_TOWN,
  payload: string
}

export const SET_PICK_UP = 'SET_PICK_UP'
export interface ISetPickUp {
  type: typeof SET_PICK_UP,
  payload: string
}

export const SET_CURRENT_LOCATION = 'SET_CURRENT_LOCATION'
export interface ISetCurrentLocation {
  type: typeof SET_CURRENT_LOCATION,
  payload: IMark
}

export const SET_MARKERS_BY_CURRENT_LOCATION = 'SET_MARKERS_BY_CURRENT_LOCATION'
export interface ISetMarkersByCurrentLocation {
  type: typeof SET_MARKERS_BY_CURRENT_LOCATION,
  payload: Array<IMark>
}

export const GET_ALL_TOWNS = 'GET_ALL_TOWNS'
export interface IGetTowns {
  type: typeof GET_ALL_TOWNS
}

export const GET_ALL_TOWNS_SUCCESS = 'GET_ALL_TOWNS_SUCCESS'
export interface IGetTownsSuccess {
  type: typeof GET_ALL_TOWNS_SUCCESS,
  payload: Array<ITown>
}

export const GET_PICK_UPS = 'GET_PICK_UPS'
export interface IGetPickUps {
  type: typeof GET_PICK_UPS
}

export const GET_PICK_UPS_SUCCESS = 'GET_PICK_UPS_SUCCESS'
export interface IGetPickUpsSuccess {
  type: typeof GET_PICK_UPS_SUCCESS,
  payload: Array<IPickUp>
}

export type ILocationTypes =
| IAddMarker
| ISetTown
| ISetPickUp
| IGetTowns
| IGetTownsSuccess
| IGetPickUps
| IGetPickUpsSuccess
| ISetCurrentLocation
| ISetMarkersByCurrentLocation
