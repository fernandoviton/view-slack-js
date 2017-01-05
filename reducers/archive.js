export default (state = defaultState, action) => {
  switch (action.type) {
    case 'START_LOAD_ARCHIVE':
      return { ...state, isLoading: true, localPath: undefined }
    case 'FINISHED_LOAD_ARCHIVE':
      return { ...state, localPath: action.path }
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