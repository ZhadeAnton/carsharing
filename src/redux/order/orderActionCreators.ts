import * as types from './orderActionTypes'

export const setOrder = (): types.ISetOrder => ({
  type: types.SET_ORDER
})

export const removeOrder = (): types.IRemoveOrder => ({
  type: types.REMOVE_ORDER
})

export const setCurrentTab = (tabKey: string): types.ISetCurrentTabPosition => ({
  type: types.SET_CURRENT_TAB_POSITION,
  payload: tabKey
})
