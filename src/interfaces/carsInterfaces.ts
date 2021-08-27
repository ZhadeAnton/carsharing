import { IRadioButton } from './inputInterfaces';

export interface ICar {
  carName: string,
  lowPrice: number,
  highPrice: number,
  carImage: string

}
export interface IFnSelectCarQuality {
  (quality: IRadioButton): void
}

export interface IFnSelectCar {
  (car: ICar): void
}
