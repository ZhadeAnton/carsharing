import { IMark } from '../../interfaces/mapInterfaces';

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

export const SET_COORDINATES = 'SET_COORDINATES'
export interface ISetCoordinates {
  type: typeof SET_COORDINATES,
  payload: IMark
}

export type ILocationTypes =
| IAddMarker
| ISetTown
| ISetPickUp
| ISetCoordinates
