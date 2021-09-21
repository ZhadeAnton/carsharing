import axios from 'axios'

import { IOrder } from '../interfaces/orderIntarfaces'

const url = process.env.REACT_APP_DEFAULT_URL
const appId = process.env.REACT_APP_APPLICATION_ID

export const sendConfirmedOrder = (order: IOrder) => {
  return axios({
    method: 'POST',
    url: `${url}/order`,
    data: order,
    headers: {
      'X-Api-Factory-Application-Id': appId,
      'Content-Type': 'application/json'
    }
  })
}

export const getOrderById = (orderId: IOrder['orderStatusId']['id']) => {
  return axios({
    method: 'GET',
    url: `${url}/order/${orderId}`,
    headers: {
      'X-Api-Factory-Application-Id': appId,
      'Content-Type': 'application/json'
    }
  })
}

export const deleteConfirmedOrder = (orderId: IOrder['orderStatusId']['id']) => {
  return axios({
    method: 'DELETE',
    url: `${url}/order/${orderId}`,
    headers: {
      'X-Api-Factory-Application-Id': appId,
      'Content-Type': 'application/json'
    }
  })
}
