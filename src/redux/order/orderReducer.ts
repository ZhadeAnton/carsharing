import * as types from './orderActionTypes'

export interface IOrderState {
  isOrder: boolean,
  orderNumber: string
}

const INIT_STATE: IOrderState = {
  isOrder: false,
  orderNumber: 'RU58491823'
}

const orderReducer = (state = INIT_STATE, action: any): IOrderState => {
  switch (action.type) {
    case types.SET_ORDER:
      return {
        ...state,
        isOrder: true
      }

    case types.REMOVE_ORDER:
      return {
        ...state,
        isOrder: false
      }

    default:
      return state
  }
}

export default orderReducer
