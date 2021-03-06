import {all, call} from 'redux-saga/effects'

import carSagas from './car/carSagas'
import locationSagas from './location/locationSagas'
import orderSagas from './order/orderSagas'

export default function* rootSaga() {
  yield all([
    call(carSagas),
    call(orderSagas),
    call(locationSagas)
  ])
}
