import { combineReducers } from 'redux'
import locationReducer from './location/locationReducer'

const rootReducer = combineReducers({
  location: locationReducer
})

export default rootReducer
