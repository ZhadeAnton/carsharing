import * as types from './locationActionTypes'
import { IMark } from '../../interfaces/mapInterfaces'

export const addMark = (mark: IMark): types.IAddMarker => ({
  type: types.ADD_MARKER,
  payload: mark
})
