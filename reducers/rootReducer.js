import archive from './archive'
import channels from './channels'
import settings from './settings'
import users from './users'
import messageGroups from './messageGroups'

export default (state = {}, action) => {
  
  console.log('handling action:', action)

  state.settings = settings(state.settings, action)
  state.archive = archive(state.archive, action)
  state.users = users(state.users, action)
  state.channels = channels(state.channels, action)
  state.messageGroups = messageGroups(state.messageGroups, action)
 
  return state
}