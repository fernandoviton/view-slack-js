import channels from './channels'
import conversation from './conversation'

export default (state = {}, action) => {
  
  console.log('handling action:', action)

  state = {}
  state.channels = channels(state.channels, action)
  state.conversation = conversation(state.conversation, action)
 
  return state
}