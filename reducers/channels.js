export default (state = {isLoading: false, activeChannelName: undefined, items: []}, action) => {
  switch (action.type) {
    case 'START_LOAD_CHANNELS':
      return { isLoading: true, items: [] }
     case 'FINISHED_LOAD_CHANNELS':
      return { 
        isLoading: false,
        items: action.channelsInfo
          .map((channelInfo) => createChannel(channelInfo))
        }
      case 'SET_ACTIVE_CHANNEL':
       return {...state, activeChannelName: action.channelName }
     default:
      return state
  }
}

const createChannel = (channelInfo) => {
  return { id: channelInfo.name, name: channelInfo.name }
}