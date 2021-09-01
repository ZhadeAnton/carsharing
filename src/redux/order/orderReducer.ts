import * as types from './orderActionTypes'
import { IOrderTypes } from './orderActionTypes'

export interface IOrderState {
  currentTabPosition: string
  isOrderConfirmed: boolean,
  orderNumber: string
}

const INIT_STATE: IOrderState = {
  currentTabPosition: '1',
  isOrderConfirmed: false,
  orderNumber: 'RU58491823'
}

const orderReducer = (state = INIT_STATE, action: IOrderTypes): IOrderState => {
  switch (action.type) {
    case types.SET_ORDER:
      return {
        ...state,
        isOrderConfirmed: true
      }

    case types.REMOVE_ORDER:
      return {
        ...state,
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
