export default (state = {isLoading: false, items: []}, action) => {
  switch (action.type) {
     case 'SET_USERS':
      const userMap = action.usersInfo.reduce((map, userInfo) => {
        map.set(userInfo.id, createUser(userInfo))
        return map
        }, new Map())
      return {
        items: userMap
        }
     default:
      return state
  }
}

const createUser = (userInfo) => {
  return { name: userInfo.name }
}