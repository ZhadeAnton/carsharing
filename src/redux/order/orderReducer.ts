import * as types from './orderActionTypes'
import { IConfirmedOrder } from '../../interfaces/orderIntarfaces'
import { IOrderTypes } from './orderActionTypes'

export interface IOrderState {
  currentTabPosition: string
  confirmedOrder: IConfirmedOrder | null,
  isOrderConfirmed: boolean
}

const INIT_STATE: IOrderState = {
  currentTabPosition: '1',
  confirmedOrder: null,
  isOrderConfirmed: false
}

const orderReducer = (state = INIT_STATE, action: IOrderTypes): IOrderState => {
  switch (action.type) {
    case types.SET_ORDER_SUCCESS:
      return {
        ...state,
        confirmedOrder: action.payload,
        isOrderConfirmed: true
      }

    case types.REMOVE_ORDER:
      return {
        ...state,
        confirmedOrder: null,
        isOrderConfirmed: false
      }

    case types.SET_CURRENT_TAB_POSITION:
      return {
        ...state,
        currentTabPosition: action.payload
      }

    default:
      return state
  }
}

export default orderReducer
