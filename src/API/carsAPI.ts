import axios from 'axios';

export const getAllCars = () => {
  return axios({
    method: 'GET',
    url: 'https://api-factory.simbirsoft1.com/api/db/car',
    headers: {
      'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
    }
  })
}
