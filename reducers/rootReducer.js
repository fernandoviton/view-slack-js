import channels from './channels'
import conversation from './conversation'
import messageGroups from './messageGroups'
import loadChannel from './loadChannel'
import loadDefaultSlack from './loadDefaultSlack'

export default (state = {}, action) => {
  
  console.log('handling action:', action)

  // reducers that work on whole state
  state = loadDefaultSlack(state, action)

  // reducers that work on subsets
  state.channels = channels(state.channels, action)
  state.conversation = conversation(state.conversation, action)
  state.messageGroups = messageGroups(state.messageGroups, action)
  state.messageGroups = loadChannel(state.messageGroups, action)
 
  return state
}