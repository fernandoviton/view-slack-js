import channels from './channels'
import conversation from './conversation'
import messageGroups from './messageGroups'
import loadChannel from './loadChannel'
import loadDefaultSlack from './loadDefaultSlack'

export default (state = {}, action) => {
  
  console.log('handling action:', action)

  state = loadDefaultSlack(state, action)
  state.currentConversation = loadChannel(state.currentConversation, action)
  state.channels = channels(state.channels, action)
  state.conversation = conversation(state.conversation, action)
  state.messageGroups = messageGroups(state.messageGroups, action)
 
  return state
}