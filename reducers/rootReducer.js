import channels from './channels'
import messages from './messages'
import users from './users'
import messageGroups from './messageGroups'

export default (state = {}, action) => {
  
  console.log('handling action:', action)

  state.users = users(state.users, action)
  state.channels = channels(state.channels, action)
  state.messageGroups = messageGroups(state.messageGroups, action)
 
  return state
}