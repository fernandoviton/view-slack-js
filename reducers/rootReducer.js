import { combineReducers } from 'redux'
import conversation from './conversation'

const rootReducer = combineReducers({
  conversation,
})

export default rootReducer;