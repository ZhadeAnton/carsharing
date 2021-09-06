import axios from 'axios'

import { IOrder } from '../interfaces/orderIntarfaces'

export const sendConfirmedOrder = (order: IOrder) => {
  return axios({
    method: 'POST',
    url: `${process.env.REACT_APP_DEFAULT_URL}/order`,
    data: order,
    headers: {
      'X-Api-Factory-Application-Id': process.env.REACT_APP_APPLICATION_ID,
      'Content-Type': 'application/json'
    }
  })
}
