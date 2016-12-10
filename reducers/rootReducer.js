import { combineReducers } from 'redux'
import channels from './channels'
import conversation from './conversation'

const rootReducer = combineReducers({
  channels,
  conversation
})

export default rootReducer;