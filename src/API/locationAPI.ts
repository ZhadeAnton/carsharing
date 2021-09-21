import axios from 'axios'

const url = process.env.REACT_APP_DEFAULT_URL
const appId = process.env.REACT_APP_APPLICATION_ID

export const getTowns = () => {
  return axios({
    method: 'GET',
    url: `${url}/city`,
    headers: {
      'X-Api-Factory-Application-Id': appId,
      'Content-Type': 'application/json'
    }
  })
}

export const getPickUps = () => {
  return axios({
    method: 'GET',
    url: `${url}/point`,
    headers: {
      'X-Api-Factory-Application-Id': appId,
      'Content-Type': 'application/json'
    }
  })
}
