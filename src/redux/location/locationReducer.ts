import { IMark } from '../../interfaces/mapInterfaces'
import { ILocationTypes } from './locationActionTypes'
import * as types from './locationActionTypes'
import {
  IOrderTypes,
  GET_ORDER_BY_ID_SUCCESS,
  REMOVE_ORDER
} from '../order/orderActionTypes'

export interface ILocationState {
  town: string | null,
  pickUp: string | null,
  coordinatesByPickedTown: IMark | null,
  markers: Array<IMark>
}

const INIT_STATE: ILocationState = {
  town: '',
  pickUp: '',
  coordinatesByPickedTown: null,
  markers: [{lat: 54.3187, lng: 48.3978}]
}

type ITypes = ILocationTypes | IOrderTypes

const locationReducer = (state = INIT_STATE, action: ITypes): ILocationState => {
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

    case GET_ORDER_BY_ID_SUCCESS:
      return {
        ...state,
        town: action.payload.cityId.name,
        pickUp: action.payload.pointId.name
      }

    case REMOVE_ORDER:
      return {
        ...INIT_STATE
      }

    default:
      return state
  }
}

export default locationReducer
