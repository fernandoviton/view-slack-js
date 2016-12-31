export default (state = {isLoading: false, items: []}, action) => {
  switch (action.type) {
    case 'START_LOAD_USERS':
      return { isLoading: true, items: [] }
     case 'FINISHED_LOAD_USERS':
      const userMap = action.usersInfo.reduce((map, userInfo) => {
        map.set(userInfo.id, createUser(userInfo))
        return map
        }, new Map())
      return { 
        isLoading: false,
        items: userMap
        }
     default:
      return state
  }
}

const createUser = (userInfo) => {
  return { name: userInfo.name }
}