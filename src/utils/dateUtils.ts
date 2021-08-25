import moment from 'moment';

import { IDate } from '../interfaces/inputInterfaces';

export const getDifferenceTime = (dateFrom: IDate, dateTo: IDate): string => {
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
