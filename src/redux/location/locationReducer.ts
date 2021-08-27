import { IMark } from '../../interfaces/mapInterfaces'
import { ILocationTypes } from './locationActionTypes'
import * as types from './locationActionTypes'

interface ILocationState {
  town: string,
  pickUp: string,
  coordinatesByPickedTown: IMark | null,
  markers: Array<IMark>
}

const INIT_STATE: ILocationState = {
  town: '',
  pickUp: '',
  coordinatesByPickedTown: null,
  markers: [{lat: 54.3187, lng: 48.3978}]
}

const locationReducer = (state = INIT_STATE, action: ILocationTypes): ILocationState => {
  switch (action.type) {
    case types.ADD_MARKER:
      return {
        ...state,
        markers: [...state.markers, action.payload]
      }

    case types.SET_TOWN:
      return {
        ...state,
        town: action.payload
      }

    case types.SET_PICK_UP:
      return {
        ...state,
        pickUp: action.payload
      }

    case types.SET_COORDINATES:
      return {
        ...state,
        coordinatesByPickedTown: action.payload
      }

    default:
      return state
  }
}

export default locationReducer
