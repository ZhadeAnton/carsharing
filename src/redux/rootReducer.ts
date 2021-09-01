import { combineReducers } from 'redux'
import carReducer from './car/carReducer'
import locationReducer from './location/locationReducer'
import orderReducer from './order/orderReducer'

const rootReducer = combineReducers({
  location: locationReducer,
  car: carReducer,
  order: orderReducer
})

export default rootReducer
