export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_CHANNEL':
      return [...state, {id: action.id, name: action.name}]
    default:
      return state
  }
}