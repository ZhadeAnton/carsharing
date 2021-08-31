import * as types from './orderActionTypes'
import { IOrderTypes } from './orderActionTypes'

export interface IOrderState {
  isOrderConfirmed: boolean,
  orderNumber: string
}

const INIT_STATE: IOrderState = {
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

    default:
      return state
  }
}

export default orderReducer
