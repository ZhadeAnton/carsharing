export interface IOrder {
  orderStatusId: {},
  cityId: {},
  pointId: {},
  carId: {},
  color: string,
  dateFrom: number,
  dateTo: number,
  rateId: {},
  price: number,
  isFullTank: boolean,
  isNeedChildChair: boolean,
  isRightWheel: boolean
}
export interface IOrderField {
  title: string,
  value: string | undefined
}
