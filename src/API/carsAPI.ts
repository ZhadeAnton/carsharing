/* eslint-disable max-len */
import axios from 'axios';

const carsLimit = 15
const url = process.env.REACT_APP_DEFAULT_URL
const appId = process.env.REACT_APP_APPLICATION_ID

export const getAllCars = (page = 0) => {
  return axios({
    method: 'GET',
    url: `${url}/car?page=${page}&limit=${carsLimit}`,
    headers: {
      'X-Api-Factory-Application-Id': appId,
    }
  })
}

export const getEconomyCars = (page = 0) => {
  return axios({
    method: 'GET',
    url: `${url}/car?priceMin[$lt]=20000&limit=${carsLimit}&page=${page}&sort[priceMin]=1`,
    headers: {
      'X-Api-Factory-Application-Id': appId,
    }
  })
}

export const getPremiumCars = (page = 0) => {
  return axios({
    method: 'GET',
    url: `${url}/car?priceMin[$gt]=20000&limit=${carsLimit}&page=${page}&sort[priceMin]=1`,
    headers: {
      'X-Api-Factory-Application-Id': appId
    }
  })
}

export const fetchRateTypes = () => {
  return axios({
    method: 'GET',
    url: `${url}/rate`,
    headers: {
      'X-Api-Factory-Application-Id': appId
    }
  })
}
