// export interface IOrder {
//   orderStatusId: {
//     name: string
//   },
//   cityId: {
//     name: string
//   },
//   pointId: {
//     name: string,
//     cityId: {
//       name: string
//     }
//   },
//   carId: {
//     name: string
//   },
//   color: string,
//   dateFrom: number,
//   dateTo: number,
//   rateId: {
//     name: string
//   },
//   price: number,
//   isFullTank: boolean,
//   isNeedChildChair: boolean,
//   isRightWheel: boolean
// }

export interface IOrder {
}
export interface IOrderField {
  title: string,
  value: string | undefined
}
