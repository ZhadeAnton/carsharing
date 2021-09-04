import axios from 'axios';

export const getCarsByPage = (page = 1) => {
  return axios({
    method: 'GET',
    url: `https://api-factory.simbirsoft1.com/api/db/car?page=${page}&limit=6`,
    headers: {
      'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
    }
  })
}
