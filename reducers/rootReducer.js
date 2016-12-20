import channels from './channels'
import messages from './messages'
import messageGroups from './messageGroups'

export default (state = {}, action) => {
  
  console.log('handling action:', action)

  state.channels = channels(state.channels, action)
  state.messageGroups = messageGroups(state.messageGroups, action)
  state.messages = messages(state.messages, action)
 
  return state
}