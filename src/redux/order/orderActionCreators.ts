import { IOrder } from '../../interfaces/orderIntarfaces'
import * as types from './orderActionTypes'

export const setOrder = (order: IOrder): types.ISetOrder => ({
  type: types.SET_ORDER,
  payload: order
})

export const setOrderSuccess = (order: IOrder): types.ISetOrderSuccess => ({
  type: types.SET_ORDER_SUCCESS,
  payload: order
})

export const removeOrder = (): types.IRemoveOrder => ({
  type: types.REMOVE_ORDER
})

export const setCurrentTab = (tabKey: string): types.ISetCurrentTabPosition => ({
  type: types.SET_CURRENT_TAB_POSITION,
  payload: tabKey
})
