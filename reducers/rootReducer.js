import channels from './channels'
import conversation from './conversation'
import loadDefaultSlack from './loadDefaultSlack'

export default (state = {}, action) => {
  
  console.log('handling action:', action)

  // reducers that work on whole state
  state = loadDefaultSlack(state, action)

  // reducers that work on submsets
  state.channels = channels(state.channels, action)
  state.conversation = conversation(state.conversation, action)
 
  return state
}