import { takeLatest, call, put, all } from 'redux-saga/effects'

import * as types from './carActonTypes'
import * as actions from './carActionCreators'
import * as API from '../../API/carsAPI'

function* fetchAllCars({payload: page}) {
  try {
    const response = yield call(API.getAllCars, page)
    const listOfCars = yield response.data.data
    const countOfRecivedItems = yield response.data.count
    yield put(actions.setCountOfCars(countOfRecivedItems))
    yield put(actions.getCarsSuccess(listOfCars))
  } catch (error) {
    console.error(error)
  }
}

function* fetchEconomyCars({payload: page}) {
  try {
    const response = yield call(API.getEconomyCars, page)
    const listOfEconomyCars = yield response.data.data
    const countOfRecivedItems = yield response.data.count
    yield put(actions.setCountOfCars(countOfRecivedItems))
    yield put(actions.getCarsSuccess(listOfEconomyCars))
  } catch (error) {
    console.error(error)
  }
}

function* fetchPremiumCars({payload: page}) {
  try {
    const response = yield call(API.getPremiumCars, page)
    const listOfPremiumCars = yield response.data.data
    const countOfRecivedItems = yield response.data.count
    yield put(actions.setCountOfCars(countOfRecivedItems))
    yield put(actions.getCarsSuccess(listOfPremiumCars))
  } catch (error) {
    console.error(error)
  }
}

function* onGetAllCars() {
  yield takeLatest(types.GET_CARS_BY_PAGE, fetchAllCars)
}

function* onGetEconomyCars() {
  yield takeLatest(types.GET_ECONOMY_CARS, fetchEconomyCars)
}

function* onGetPremiumCars() {
  yield takeLatest(types.GET_PREMIUM_CARS, fetchPremiumCars)
}

export default function* carSagas() {
  yield all([
    call(onGetAllCars),
    call(onGetEconomyCars),
    call(onGetPremiumCars)
  ])
}
