import archive from './archive';
import channels from './channels';
import settings from './settings';
import users from './users';
import messageGroups from './messageGroups';

export default (state = {}, action) => {
  console.log('handling action:', action);

  return { ...state,
    settings: settings(state.settings, action),
    archive: archive(state.archive, action),
    users: users(state.users, action),
    channels: channels(state.channels, action),
    messageGroups: messageGroups(state.messageGroups, action),
  };
};