export default (state = {hiddenUi: true, loadArchiveErrorMsg: undefined}, action) => {
  switch (action.type) {
    case 'TOGGLE_SETTINGS_UI':
      return {...state, hiddenUi: !state.hiddenUi }
    case 'SET_ARCHIVE_LOAD_ERROR_IN_SETTINGS':
      return {...state, loadArchiveErrorMsg: action.msg}
     default:
      return state
  }
}
