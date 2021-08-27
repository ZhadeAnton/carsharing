import { ICar } from '../../interfaces/carsInterfaces';
import { IRadioButton } from '../../interfaces/inputInterfaces';

export const SELECT_CAR = 'SELECT_CAR'
export interface ISelectCar {
  type: typeof SELECT_CAR,
  payload: ICar
}

export const SELECT_CAR_QUALITY = 'SELECT_CAR_QUALITY'
export interface ISelectCarQuality {
  type: typeof SELECT_CAR_QUALITY,
  payload: IRadioButton
}

export type ICarTypes =
| ISelectCar
| ISelectCarQuality
