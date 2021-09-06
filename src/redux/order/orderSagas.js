import { takeLatest, call, put, all } from 'redux-saga/effects'

import * as types from './orderActionTypes'
import * as actions from './orderActionCreators'
import * as API from '../../API/orderAPI.ts'

function* sendOrder({payload}) {
  try {
    const response = yield call(API.sendConfirmedOrder, payload)
    const confirmedOrder = yield response.data.data
    yield put(actions.setOrderSuccess(confirmedOrder))
  } catch (error) {
    console.error(error)
  }
}

function* deleteConfirmedOrder({payload}) {
  try {
    yield call(API.deleteConfirmedOrder, payload)
    yield put(actions.removeOrderSuccess())
  } catch (error) {
    console.error(error)
  }
}

function* onSendOrder() {
  yield takeLatest(types.SET_ORDER, sendOrder)
}

function* onDeleteConfirmedOrder() {
  yield takeLatest(types.REMOVE_ORDER, deleteConfirmedOrder)
}

export default function* orderSagas() {
  yield all([
    call(onSendOrder),
    call(onDeleteConfirmedOrder)
  ])
}
