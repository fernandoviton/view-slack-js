import messages from './messages'

export default (
	state =
	{
		items: [],
	},
	action) => {
  switch (action.type) {
		case 'SET_MESSAGE_GROUPS':
			return {
				items: action.messageGroupsInfo.map((info) => createMessageGroup(info.name)),
			}
		case 'SET_MESSAGES':
			return {...state, items: state.items.map((item) => item.name == action.messageGroupName
				? createMessageGroup(item.name, messages(item.messages, action))
				: item)}
		default:
			return state
	}
}

const createMessageGroup = (name, messages = {items: []}) => {
	console.log('Hello ', name)
	return {name, messages}
}
