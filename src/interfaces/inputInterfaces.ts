import { Moment } from 'moment'

export interface IRadioButton {
  title?: string,
  value?: string,
  createdAt?: number,
  id?: string,
  price?: number,
  rateTypeId?: {
    id?: string,
    name?: string,
    unit?: string
  }
}

export interface ICheckbox {
  title: string,
  value: string,
  info?: string,
  cost: number,
  id: number,
  isChecked: boolean
}

export type IDate = Moment | null | undefined

export interface IRate {
  createdAt?: number,
  id?: string,
  price: number,
  rateTypeId: {
    id?: string,
    name: string,
    unit?: string
  }
}
