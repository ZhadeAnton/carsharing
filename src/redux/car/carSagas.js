import { takeLatest, call, put, all } from 'redux-saga/effects'

import * as types from './carActonTypes'
import * as actions from './carActionCreators'
import * as API from '../../API/carsAPI'

function* fetchCarsByPage({payload: page}) {
  try {
    const response = yield call(API.getCarsByPage, page)
    const listOfCars = yield response.data.data
    const countOfCars = yield response.data.count
    yield put(actions.setCountOfCars(countOfCars))
    yield put(actions.getCarsByPageSuccess(listOfCars))
  } catch (error) {
    console.error(error)
  }
}

function* onGetAllCars() {
  yield takeLatest(types.GET_CARS_BY_PAGE, fetchCarsByPage)
}

export default function* carSagas() {
  yield all([
    call(onGetAllCars)
  ])
}
