import { combineReducers } from 'redux'
import locatinReducer from './location/locationReducer'

const rootReducer = combineReducers({
  location: locatinReducer
})

export default rootReducer
