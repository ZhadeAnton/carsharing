import { IOrderField } from '../../interfaces/orderIntarfaces'
import * as types from './orderActionTypes'

export const addOrderField = (orderField: IOrderField): types.IAddOrderField => ({
  type: types.ADD_ORDER_FIELD,
  payload: orderField
})
