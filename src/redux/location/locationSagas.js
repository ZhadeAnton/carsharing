import { takeLatest, call, put, all } from 'redux-saga/effects'

import * as types from './locationActionTypes'
import * as actions from './locationActionCreators'
import * as API from '../../API/locationAPI'

function* fetchAllTowns() {
  try {
    const response = yield call(API.getTowns)
    const towns = response.data.data
    yield put(actions.getTownsSuccess(towns))
  } catch (error) {
    console.error(error)
  }
}

function* fetchPickUps() {
  try {
    const response = yield call(API.getPickUps)
    const pickUps = response.data.data
    yield put(actions.getPickUpsSuccess(pickUps))
  } catch (error) {
    console.error(error)
  }
}

function* onGetAllTowns() {
  yield takeLatest(types.GET_ALL_TOWNS, fetchAllTowns)
}

function* onGetPickUps() {
  yield takeLatest(types.GET_ALL_TOWNS, fetchPickUps)
}

export default function* locationSagas() {
  yield all([
    call(onGetAllTowns),
    call(onGetPickUps)
  ])
}
