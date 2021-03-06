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

export const getOrderById = (orderId: IOrder['orderStatusId']['id'])
  : types.IGetOrderById => ({
  type: types.GET_ORDER_BY_ID,
  payload: orderId
})

export const getOrderByIdSuccess = (order: IConfirmedOrder)
  : types.IGetOrderByIdSuccess => ({
  type: types.GET_ORDER_BY_ID_SUCCESS,
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

export const orderFailure = () => ({
  type: types.ORDER_FAILURE
})
