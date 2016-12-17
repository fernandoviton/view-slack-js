// A conversation is all the info contained within a 
// channel - all messages, etc

export default (state = {isLoading: false, channelName: undefined, messageGroups: []}, action) => {
  switch (action.type) {
		case 'START_LOAD_CONVERSATION':
			return { 
				isLoading: true,
				channelName: action.channelName,
				messageGroups: []
			}
		case 'FINISHED_LOAD_CONVERSATION':
			return {
				isLoading: false,
				channelName: state.channelName,
				messageGroups: action.messageGroupNames.map((name) => createMessageGroup(name))
			}
    default:
      return state
  }
}

const createMessageGroup = (name) => {
  return {id: name, name: name}}
	