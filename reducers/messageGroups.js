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
    default:
      return state
  }
}

const createMessageGroup = (name) => {
  return {id: name, name: name}}
	