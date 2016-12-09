import makeId from '../util/makeId'

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