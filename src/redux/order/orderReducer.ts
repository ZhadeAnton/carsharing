import * as types from './orderActionTypes'

interface IOrderState {
  isOrder: boolean
}

const INIT_STATE: IOrderState = {
  isOrder: false
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
