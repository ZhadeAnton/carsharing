import { IMark } from '../../interfaces/mapInterfaces'
import { locationTypes } from './locationActionTypes'
import * as types from './locationActionTypes'

interface ILocationState {
  markers: Array<IMark>
}

const INIT_STATE: ILocationState = {
  markers: [{lat: 54.3187, lng: 48.3978}]
}

const locatinReducer = (state = INIT_STATE, action: locationTypes): ILocationState => {
  switch (action.type) {
    case types.ADD_MARKER:
      return {
        ...state,
        markers: [...state.markers, action.payload]
      }

    default:
      return state
  }
}

export default locatinReducer
