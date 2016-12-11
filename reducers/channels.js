export const addChannel = (state, newChannel) => {
	return [...state, {id: newChannel.id, name: newChannel.name}]
}

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_CHANNEL':
			return addChannel(state, action.channel)
    default:
      return state
  }
}