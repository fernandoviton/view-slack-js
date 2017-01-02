export default (state = {hiddenUi: true}, action) => {
  switch (action.type) {
    case 'TOGGLE_SETTINGS_UI':
      return { hiddenUi: !state.hiddenUi }
     default:
      return state
  }
}
