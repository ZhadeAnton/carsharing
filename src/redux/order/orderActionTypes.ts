export const SET_ORDER = 'SET_ORDER'
export interface ISetOrder {
  type: typeof SET_ORDER
}

export const REMOVE_ORDER = 'REMOVE_ORDER'
export interface IRemoveOrder {
  type: typeof REMOVE_ORDER
}

export const SET_CURRENT_TAB_POSITION = 'SET_CURRENT_TAB_POSITION'
export interface ISetCurrentTabPosition {
  type: typeof SET_CURRENT_TAB_POSITION,
  payload: string
}

export type IOrderTypes =
| ISetOrder
| IRemoveOrder
| ISetCurrentTabPosition
