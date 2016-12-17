import channels from './channels'
import currentConversation from './currentConversation'
import messageGroups from './messageGroups'

export default (state = {}, action) => {
  
  console.log('handling action:', action)

  state = {}
  state.channels = channels(state.channels, action)
  state.currentConversation = currentConversation(state.currentConversation, action)
 
  return state
}