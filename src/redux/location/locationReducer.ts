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
  selectedTown: ITown | null,
  selectedPickUp: IPickUp | null,
  currentTownLatLng: {
    lat: number,
    lng: number
  },
  currentPickUpLatLng: {
    lat: number,
    lng: number
  },
  markers: Array<IMark>,
  mapZoom: number,
  mapCenter: {
    lat: number,
    lng: number
  }
}

const INIT_STATE: ILocationState = {
  towns: [],
  pickUps: [],
  selectedTown: null,
  selectedPickUp: null,
  currentTownLatLng: {
    lat: 0,
    lng: 0
  },
  currentPickUpLatLng: {
    lat: 0,
    lng: 0
  },
  markers: [],
  mapZoom: 12,
  mapCenter: {
    lat: 54.3187,
    lng: 48.3978
  }
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

    case types.SET_CURRENT_LOCATION:
      return {
        ...state,
        currentTownLatLng: action.payload,
        mapCenter: action.payload
      }

    case types.SET_MARKERS_BY_CURRENT_LOCATION:
      return {
        ...state,
        markers: action.payload
      }

    case types.SET_CURRENT_MARKER:
      return {
        ...state,
        currentPickUpLatLng: action.payload,
        mapCenter: action.payload,
        mapZoom: 16
      }

    case types.SET_TOWN:
      return {
        ...state,
        selectedTown: action.payload
      }

    case types.SET_PICK_UP:
      return {
        ...state,
        selectedPickUp: {
          ...state.selectedPickUp, address: action.payload.address
        } as IPickUp
      }

    case GET_ORDER_BY_ID_SUCCESS:
      return {
        ...state,
        selectedTown: action.payload.cityId,
        selectedPickUp: action.payload.pointId
      }

    case types.CLEAR_PICK_UP:
      return {
        ...state,
        currentPickUpLatLng: {lat: 0, lng: 0},
        selectedPickUp: null,
        mapCenter: {...state.currentTownLatLng},
        mapZoom: 12
      }

    case types.CLEAR_TOWN:
      return {
        ...state,
        selectedTown: null,
        selectedPickUp: null,
        mapZoom: 12
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
