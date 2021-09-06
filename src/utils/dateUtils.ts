import moment from 'moment';

import { IDate } from '../interfaces/inputInterfaces';

export const parseDate = (date: IDate): string => {
  return moment(date).format('DD.MM.YYYY HH:mm')
}

export const getTimeDifference = (dateFrom: IDate, dateTo: IDate) => {
  const mills = dateTo?.diff(dateFrom, 'milliseconds')
  const duration = moment.duration(mills, 'millisecond')
  return duration.asDays()
}

export const getTimeString = (dateFrom: IDate, dateTo: IDate): string => {
  const duration = moment.duration(dateTo?.diff(dateFrom))
  const days = duration.asDays()
  duration.subtract(moment.duration(days, 'days'))
  const hours = duration.hours() - 1

  if (dateFrom && dateTo) {
    return (`${getDays(days)}д, ${getHours(hours)}ч`)
  } else {
    return ('Нет')
  }
}

const getDays = (days: number) => {
  return `${days.toFixed()}`
}

const getHours = (hours: number) => {
  return `${24 + Math.round(hours)}`
}
