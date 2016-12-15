import makeId from '../util/makeId'

export const createConversation = (id, text) => {
  return {
    id,
    text,
  }
}

export default (state = [], action) => {
  return state
}