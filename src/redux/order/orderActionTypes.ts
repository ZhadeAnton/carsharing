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

export type IOrderTypes =
| ISetOrder
| ISetOrderSuccess
| IRemoveOrder
| IRemoveOrderSuccess
| ISetCurrentTabPosition
