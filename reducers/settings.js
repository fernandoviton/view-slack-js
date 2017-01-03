export default (state = {hiddenUi: true, loadArchiveErrorMsg: undefined}, action) => {
  switch (action.type) {
    case 'TOGGLE_SETTINGS_UI':
      return { hiddenUi: !state.hiddenUi, loadArchiveErrorMsg: undefined }
    case 'SET_ARCHIVE_LOAD_ERROR_IN_SETTINGS':
      return {...state, loadArchiveErrorMsg: action.msg}
     default:
      return state
  }
}
