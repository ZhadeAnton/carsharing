export interface IOrder {
  orderStatusId: {
    name: string,
    id: string
  },
  cityId: {
    name: string,
    id: string
  },
  pointId: {
    address: string,
    name: string,
    cityId: {
      name: string,
      id: string
    },
    id: string
  },
  carId: {
    name: string
  },
  color: string,
  dateFrom: number,
  dateTo: number,
  rateId: {
    name: string
  },
  price: number | undefined,
  isFullTank: boolean,
  isNeedChildChair: boolean,
  isRightWheel: boolean
}


export interface IOrderField {
  title: string,
  value: string | undefined
}
