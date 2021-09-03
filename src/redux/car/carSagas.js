import { takeLatest, call, put, all } from 'redux-saga/effects'

import * as types from './carActonTypes'
import * as actions from './carActionCreators'
import * as API from '../../API/carsAPI'

function* fetchAllCars() {
  try {
    const response = yield call(API.getAllCars)
    const listOfCars = yield response.data.data
    const countOfCars = yield response.data.count
    yield put(actions.setCountOfCars(countOfCars))
    yield put(actions.getAllCarsSuccess(listOfCars))
  } catch (error) {
    console.error(error)
  }
}

function* onGetAllCars() {
  yield takeLatest(types.GET_ALL_CARS, fetchAllCars)
}

export default function* carSagas() {
  yield all([
    call(onGetAllCars)
  ])
}
