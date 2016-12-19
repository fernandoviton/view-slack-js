export default (
	state = 
	{
		isLoading: false, 
		items: []
	}, 
	action) => {
  switch (action.type) {
		case 'START_LOAD_MESSAGES':
			return { 
				isLoading: true,
				items: []
			}
		case 'FINISHED_LOAD_MESSAGES':
			return {
				isLoading: false,
				items: action.messages.map((message) => ({id: message.ts, text: message.text}))
			}
    default:
      return state
  }
}
	