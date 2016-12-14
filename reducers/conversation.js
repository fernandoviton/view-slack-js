import makeId from '../util/makeId'

export const addConversationInView = (state, newChannel) => {
	return [...state, {id: newChannel.id, name: newChannel.name}]
}

const makeConversation = (text) => {
  return {
    text: text,
    id: makeId()
  }
}

export default (state = [], action) => {
 switch (action.type) {
    case 'ADD_CONVERSATION_ITEM':
      return [...state, makeConversation('new conversation')]
    default:
      return state
  }
}