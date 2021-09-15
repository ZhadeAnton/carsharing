import { IMark, ITown } from '../../interfaces/mapInterfaces';

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

export const GET_ALL_TOWNS = 'GET_ALL_TOWNS'
export interface IGetAllTowns {
  type: typeof GET_ALL_TOWNS
}

export const GET_ALL_TOWNS_SUCCESS = 'GET_ALL_TOWNS_SUCCESS'
export interface IGetAllTownsSuccess {
  type: typeof GET_ALL_TOWNS_SUCCESS,
  payload: Array<ITown>
}

export type ILocationTypes =
| IAddMarker
| ISetTown
| ISetPickUp
| IGetAllTowns
| IGetAllTownsSuccess
