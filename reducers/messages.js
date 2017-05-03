export default (
	state =
	{
		items: []
	},
	action) => {
  switch (action.type) {
		case 'SET_MESSAGES':
			return {
				items: action.messages.map((message) => ({id: message.ts, text: message.text, user: message.user}))
			}
    default:
      return state
  }
}
