import { Moment } from 'moment'

export interface IRadioButton {
  title: string,
  value: string
}

export interface ICheckbox {
  title: string,
  value: string,
  id: number,
  isChecked: boolean
}

export type IDate = Moment | null | undefined
