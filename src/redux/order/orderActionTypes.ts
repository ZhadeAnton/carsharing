import { IOrderField } from '../../interfaces/orderIntarfaces';

export const ADD_ORDER_FIELD = 'ADD_ORDER_FIELD'
export interface IAddOrderField {
  type: typeof ADD_ORDER_FIELD,
  payload: IOrderField
}

export type IOrderTypes =
| IAddOrderField
