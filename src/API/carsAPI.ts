import axios from 'axios';

const URL = 'https://api-factory.simbirsoft1.com/api/db'
const carsLimit = 6

export const getAllCars = (page = 1) => {
  return axios({
    method: 'GET',
    url: `${URL}/car?page=${page}&limit=${carsLimit}?`,
    headers: {
      'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
    }
  })
}

export const getEconomyCars = (page = 1) => {
  return axios({
    method: 'GET',
    url: `${URL}/car?priceMax[$lt]=30000&limit=${carsLimit}&page=${page}`,
    headers: {
      'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
    }
  })
}

export const getPremiumCars = (page = 1) => {
  return axios({
    method: 'GET',
    url: `${URL}/car?priceMin[$gt]=30000&limit=${carsLimit}&page=${page}`,
    headers: {
      'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
    }
  })
}
