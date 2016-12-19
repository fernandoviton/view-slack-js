import channels from './channels'
import channel from './channel'

export default (state = {}, action) => {
  
  console.log('handling action:', action)

  state.channels = channels(state.channels, action)
  state.channel = channel(state.channel, action)
 
  return state
}