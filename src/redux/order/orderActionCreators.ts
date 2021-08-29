import * as types from './orderActionTypes'

export const setOrder = (): types.ISetOrder => ({
  type: types.SET_ORDER
})

export const removeOrder = (): types.IRemoveOrder => ({
  type: types.REMOVE_ORDER
})
