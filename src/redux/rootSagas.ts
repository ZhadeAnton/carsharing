import {all, call} from 'redux-saga/effects'

import carSagas from './car/carSagas'

export default function* rootSaga() {
  yield all([
    call(carSagas)
  ])
}
