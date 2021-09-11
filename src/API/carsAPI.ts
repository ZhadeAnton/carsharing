/* eslint-disable max-len */
import axios from 'axios';

const carsLimit = 10

export const getAllCars = (page = 0) => {
  return axios({
    method: 'GET',
    url: `${process.env.REACT_APP_DEFAULT_URL}/car?page=${page}&limit=${carsLimit}`,
    headers: {
      'X-Api-Factory-Application-Id': process.env.REACT_APP_APPLICATION_ID,
    }
  })
}

export const getEconomyCars = (page = 0) => {
  return axios({
    method: 'GET',
    url: `${process.env.REACT_APP_DEFAULT_URL}/car?priceMin[$lt]=20000&limit=${carsLimit}&page=${page}&sort[priceMin]=1`,
    headers: {
      'X-Api-Factory-Application-Id': process.env.REACT_APP_APPLICATION_ID,
    }
  })
}

export const getPremiumCars = (page = 0) => {
  return axios({
    method: 'GET',
    url: `${process.env.REACT_APP_DEFAULT_URL}/car?priceMin[$gt]=20000&limit=${carsLimit}&page=${page}&sort[priceMin]=1`,
    headers: {
      'X-Api-Factory-Application-Id': process.env.REACT_APP_APPLICATION_ID
    }
  })
}

export const fetchRateTypes = () => {
  return axios({
    method: 'GET',
    url: `${process.env.REACT_APP_DEFAULT_URL}/rate`,
    headers: {
      'X-Api-Factory-Application-Id': process.env.REACT_APP_APPLICATION_ID
    }
  })
}
