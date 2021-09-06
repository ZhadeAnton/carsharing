import * as types from './orderActionTypes'
import { IOrderTypes } from './orderActionTypes'

export interface IOrderState {
  currentTabPosition: string
  isOrderConfirmed: boolean,
  orderStatusId: string
}

const INIT_STATE: IOrderState = {
  currentTabPosition: '1',
  isOrderConfirmed: false,
  orderStatusId: '5e26a191099b810b946c5d89'
}

const orderReducer = (state = INIT_STATE, action: IOrderTypes): IOrderState => {
  switch (action.type) {
    case types.SET_ORDER_SUCCESS:
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
