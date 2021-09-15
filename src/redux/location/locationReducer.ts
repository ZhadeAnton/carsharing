import { IMark, IPickUp, ITown } from '../../interfaces/mapInterfaces'
import { ILocationTypes } from './locationActionTypes'
import * as types from './locationActionTypes'
import {
  IOrderTypes,
  GET_ORDER_BY_ID_SUCCESS,
  REMOVE_ORDER
} from '../order/orderActionTypes'

export interface ILocationState {
  towns: Array<ITown>,
  pickUps: Array<IPickUp>,
  selectedTown: string,
  selectedPickUp: string,
  markers: Array<IMark>
}

const INIT_STATE: ILocationState = {
  towns: [],
  pickUps: [],
  selectedTown: '',
  selectedPickUp: '',
  markers: [{lat: 54.3187, lng: 48.3978}]
}

type ITypes = ILocationTypes | IOrderTypes

const locationReducer = (state = INIT_STATE, action: ITypes): ILocationState => {
  switch (action.type) {
    case types.GET_ALL_TOWNS_SUCCESS:
      return {
        ...state,
        towns: action.payload
      }

    case types.GET_PICK_UPS_SUCCESS:
      return {
        ...state,
        pickUps: action.payload
      }

    case types.ADD_MARKER:
      return {
        ...state,
        markers: [...state.markers, action.payload]
      }

    case types.SET_TOWN:
      return {
        ...state,
        selectedTown: action.payload
      }

    case types.SET_PICK_UP:
      return {
        ...state,
        selectedPickUp: action.payload
      }

    case GET_ORDER_BY_ID_SUCCESS:
      return {
        ...state,
        selectedTown: action.payload.cityId.name,
        selectedPickUp: action.payload.pointId.name
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
