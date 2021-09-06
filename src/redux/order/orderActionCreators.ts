import { IConfirmedOrder, IOrder } from '../../interfaces/orderIntarfaces'
import * as types from './orderActionTypes'

export const setOrder = (order: IOrder): types.ISetOrder => ({
  type: types.SET_ORDER,
  payload: order
})

export const setOrderSuccess = (order: IConfirmedOrder): types.ISetOrderSuccess => ({
  type: types.SET_ORDER_SUCCESS,
  payload: order
})

export const removeOrder = (orderId: IOrder['orderStatusId']['id'])
  : types.IRemoveOrder => ({
  type: types.REMOVE_ORDER,
  payload: orderId
})

export const removeOrderSuccess = (): types.IRemoveOrderSuccess => ({
  type: types.REMOVE_ORDER_SUCCESS
})

export const setCurrentTab = (tabKey: string): types.ISetCurrentTabPosition => ({
  type: types.SET_CURRENT_TAB_POSITION,
  payload: tabKey
})
