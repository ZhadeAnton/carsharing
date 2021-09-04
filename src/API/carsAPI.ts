/* eslint-disable max-len */
import axios from 'axios';

const carsLimit = 6

export const getAllCars = (page = 1) => {
  return axios({
    method: 'GET',
    url: `${process.env.REACT_APP_DEFAULT_URL}/car?page=${page}&limit=${carsLimit}`,
    headers: {
      'X-Api-Factory-Application-Id': process.env.REACT_APP_APPLICATION_ID,
    }
  })
}

export const getEconomyCars = (page = 1) => {
  return axios({
    method: 'GET',
    url: `${process.env.REACT_APP_DEFAULT_URL}/car?priceMax[$lt]=30000&limit=${carsLimit}&page=${page}`,
    headers: {
      'X-Api-Factory-Application-Id': process.env.REACT_APP_APPLICATION_ID,
    }
  })
}

export const getPremiumCars = (page = 1) => {
  return axios({
    method: 'GET',
    url: `${process.env.REACT_APP_DEFAULT_URL}/car?priceMin[$gt]=30000&limit=${carsLimit}&page=${page}`,
    headers: {
      'X-Api-Factory-Application-Id': process.env.REACT_APP_APPLICATION_ID,
    }
  })
}
