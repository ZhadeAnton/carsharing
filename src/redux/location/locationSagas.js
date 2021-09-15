import { takeLatest, call, put, all } from 'redux-saga/effects'

import * as types from './locationActionTypes'
import * as actions from './locationActionCreators'
import * as API from '../../API/locationAPI'

function* fetchAllTowns() {
  try {
    const response = yield call(API.getAllTowns)
    const towns = response.data.data
    yield put(actions.getAllTownsSuccess(towns))
  } catch (error) {
    console.error(error)
  }
}

function* onGetAllTowns() {
  yield takeLatest(types.GET_ALL_TOWNS, fetchAllTowns)
}

export default function* locationSagas() {
  yield all([
    call(onGetAllTowns)
  ])
}
