import messages from './messages'

export default (
	state = 
	{
		isLoading: false, 
		activeMessageGroupName: undefined,
		items: [],
	}, 
	action) => {
  switch (action.type) {
		case 'START_LOAD_MESSAGE_GROUPS':
			return { 
				isLoading: true,
				activeMessageGroupName: undefined,
				items: [],
			}
		case 'FINISHED_LOAD_MESSAGE_GROUPS':
			return {
				isLoading: false,
				activeMessageGroupName: undefined,
				items: action.messageGroupNames.map((name) => createMessageGroup(name)),
			}
		case 'SET_ACTIVE_MESSAGE_GROUP':
      return {...state, activeMessageGroupName: action.messageGroupName }
		case 'START_LOAD_MESSAGES':
		case 'FINISHED_LOAD_MESSAGES':
			return {...state, items: state.items.map((item) => item.name == action.messageGroupName 
				? createMessageGroup(item.name, messages(item.messages, action))
				: item)}
    default:
      return state
  }
}

const createMessageGroup = (name, messages = {isLoading: false, items: []}) => {
  return {name, messages}}
