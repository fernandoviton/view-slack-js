const defaultState = {
  displayPath: '',
  localPath: undefined,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'LOAD_ARCHIVE':
      return { ...state, localPath: action.path };
    case 'SET_DISPLAY_ARCHIVE_PATH':
       return { ...state, displayPath: action.path };
    default:
      return state;
  }
};