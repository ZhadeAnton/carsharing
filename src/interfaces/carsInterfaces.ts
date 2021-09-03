export interface ICar {
  carName: string,
  carModel: string,
  lowPrice: number,
  highPrice: number,
  carImage: string
  carPlateNumber: string,
}

export interface ICarFromServer {
  categoryId: {
    description: string,
    id: string,
    name: string
  },
  colors: Array<string>
  createdAt: number,
  description: string,
  id: string,
  name: string,
  priceMax: number,
  priceMin: 0,
  tank: number,
  thumbnail: {
    mimetype: string,
    originalname: string,
    path: string,
    size: number
  }
}
