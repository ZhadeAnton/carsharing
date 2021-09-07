import { IConfirmedOrder, IOrder } from '../../interfaces/orderIntarfaces'

export const SET_ORDER = 'SET_ORDER'
export interface ISetOrder {
  type: typeof SET_ORDER,
  payload: IOrder
}

export const SET_ORDER_SUCCESS = 'SET_ORDER_SUCCESS'
export interface ISetOrderSuccess {
  type: typeof SET_ORDER_SUCCESS,
  payload: IConfirmedOrder
}

export const GET_ORDER_BY_ID = 'GET_ORDER_BY_ID'
export interface IGetOrderById {
  type: typeof GET_ORDER_BY_ID,
  payload: IOrder['orderStatusId']['id']
}

export const REMOVE_ORDER = 'REMOVE_ORDER'
export interface IRemoveOrder {
  type: typeof REMOVE_ORDER,
  payload: IOrder['orderStatusId']['id']
}

export const REMOVE_ORDER_SUCCESS = 'REMOVE_ORDER_SUCCESS'
export interface IRemoveOrderSuccess {
  type: typeof REMOVE_ORDER_SUCCESS
}

export const SET_CURRENT_TAB_POSITION = 'SET_CURRENT_TAB_POSITION'
export interface ISetCurrentTabPosition {
  type: typeof SET_CURRENT_TAB_POSITION,
  payload: string
}

export const ORDER_FAILURE = 'ORDER_FAILURE'
export interface IOrderFailure {
  type: typeof ORDER_FAILURE
}

export type IOrderTypes =
| ISetOrder
| ISetOrderSuccess
| IGetOrderById
| IRemoveOrder
| IOrderFailure
| IRemoveOrderSuccess
| ISetCurrentTabPosition
