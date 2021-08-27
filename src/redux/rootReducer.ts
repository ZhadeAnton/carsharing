import { combineReducers } from 'redux'
import carReducer from './car/carReducer'
import locationReducer from './location/locationReducer'

const rootReducer = combineReducers({
  location: locationReducer,
  car: carReducer
})

export default rootReducer
