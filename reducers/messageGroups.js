import messages from './messages'

export default (
	state = 
	{
		isLoading: false, 
		items: [],
	}, 
	action) => {
  switch (action.type) {
		case 'START_LOAD_MESSAGE_GROUPS':
			return { 
				isLoading: true,
				items: [],
			}
		case 'FINISHED_LOAD_MESSAGE_GROUPS':
			return {
				isLoading: false,
				items: action.messageGroupNames.map((name) => createMessageGroup(name)),
			}
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
