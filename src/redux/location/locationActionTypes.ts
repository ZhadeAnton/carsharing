import { IMark } from '../../interfaces/mapInterfaces';

export const ADD_MARKER = 'ADD_MARKER'
export interface IAddMarker {
  type: typeof ADD_MARKER,
  payload: IMark
}

export type locationTypes =
| IAddMarker
