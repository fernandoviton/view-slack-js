export default (state = defaultState, action) => {
  switch (action.type) {
    case 'START_LOAD_ARCHIVE':
      return { ...state, isLoading: true }
    case 'FINISHED_LOAD_ARCHIVE':
      return action.path === undefined
        ? defaultState
        : { isLoading: false, displayPath: '', displayPath: action.path, localPath: action.path }
    case 'SET_DISPLAY_ARCHIVE_PATH':
       return {...state, displayPath: action.path }
    default:
      return state
  }
}

const defaultState = {
  isLoading: false, 
  displayPath: '', 
  localPath: undefined
}