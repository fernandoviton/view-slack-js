export default (state = {isLoading: false, items: []}, action) => {
  switch (action.type) {
    case 'START_LOAD_CHANNEL_LIST':
      return { isLoading: true, items: [] }
     case 'FINISHED_LOAD_CHANNEL_LIST':
      return { 
        isLoading: false,
        items: action.channelsInfo
          .map((channelInfo) => createChannel(channelInfo))
        }
     default:
      return state
  }
}

const createChannel = (channelInfo) => {
  return { id: channelInfo.name, name: channelInfo.name }
}