import { IRadioButton } from './inputInterfaces';

export interface ICar {
  carName: string,
  carModel: string,
  lowPrice: number,
  highPrice: number,
  carImage: string
  carPlateNumber: string
}
export interface IFnSelectCarQuality {
  (quality: IRadioButton): void
}

export interface IFnSelectCar {
  (car: ICar): void
}
