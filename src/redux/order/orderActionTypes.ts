export const SET_ORDER = 'SET_ORDER'
export interface ISetOrder {
  type: typeof SET_ORDER
}

export const REMOVE_ORDER = 'REMOVE_ORDER'
export interface IRemoveOrder {
  type: typeof REMOVE_ORDER
}

export type IOrderTypes =
| ISetOrder
| IRemoveOrder
