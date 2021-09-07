export interface ICar {
  categoryId?: {
    description: string,
    id: string,
    name: string
  },
  colors?: Array<string>
  createdAt?: number,
  description?: string,
  id?: string,
  name: string,
  number: string,
  priceMax?: number,
  priceMin?: 0,
  isFullTank: boolean,
  isNeedChildChair: boolean,
  isRightWheel: boolean,
  thumbnail: {
    mimetype: string,
    originalname: string,
    path: string,
    size: number
  }
}
