import axios from 'axios'

import { IOrder } from '../interfaces/orderIntarfaces'

export const sendConfirmedOrder = (order: IOrder) => {
  return axios({
    method: 'PUT',
    url: `${process.env.REACT_APP_DEFAULT_URL}/order`,
    data: order,
    headers: {
      'X-Api-Factory-Application-Id': process.env.REACT_APP_APPLICATION_ID,
    }
  })
}

export const getConfirmedOrder = () => {
  return axios({
    method: 'GET',
    url: `${process.env.REACT_APP_DEFAULT_URL}/rateType`,
    headers: {
      'X-Api-Factory-Application-Id': process.env.REACT_APP_APPLICATION_ID,
    }
  })
}
