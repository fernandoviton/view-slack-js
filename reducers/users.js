export default (state = {isLoading: false, items: []}, action) => {
  switch (action.type) {
    case 'START_LOAD_USERS':
      return { isLoading: true, items: [] }
     case 'FINISHED_LOAD_USERS':
      return { 
        isLoading: false,
        items: action.usersInfo
          .map((userInfo) => createUser(userInfo))
        }
     default:
      return state
  }
}

const createUser = (userInfo) => {
  return { id: userInfo.id, name: userInfo.name }
}