import channels from './channels'
import currentConversation from './currentConversation'
import messageGroups from './messageGroups'
import loadDefaultSlack from './loadDefaultSlack'

export default (state = {}, action) => {
  
  console.log('handling action:', action)

  state = loadDefaultSlack(state, action)
  state.channels = channels(state.channels, action)
  state.currentConversation = currentConversation(state.currentConversation, action)
 
  return state
}