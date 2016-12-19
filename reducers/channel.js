export default (
	state = 
	{
		isLoading: false, 
		channelName: undefined,
		messageGroups: [],
		currentMessageGroup: undefined,
		messages: []
	}, 
	action) => {
  switch (action.type) {
		case 'START_LOAD_CHANNEL':
			return { 
				isLoading: true,
				channelName: action.channelName,
				messageGroups: [],
				currentMessageGroup: '',
				messages: []
			}
		case 'FINISHED_LOAD_CHANNEL':
			return {
				isLoading: false,
				channelName: state.channelName,
				messageGroups: action.messageGroupNames.map((name) => createMessageGroup(name)),
				currentMessageGroup: action.currentMessageGroup,
				messages: action.messages
			}
    default:
      return state
  }
}

const createMessageGroup = (name) => {
  return {id: name, name: name}}
	