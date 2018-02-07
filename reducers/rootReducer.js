import archive from './archive';
import channels from './channels';
import settings from './settings';
import users from './users';
import messageGroups from './messageGroups';
import { setActiveSearch, doSearch } from './search';

export default (state =
	{
		activeSearch: {
			searchText: '',
		},
	},
	action) => {
	// console.log('handling action:', action);

	switch (action.type) {
		case 'SET_ACTIVE_SEARCH':
			return setActiveSearch(state, action.text);
		case 'DO_SEARCH':
			return doSearch(state);
		case 'SET_ACTIVE_CHANNEL':
			return {
				...setActiveSearch(state, ''),
				channels: channels(state.channels, action)
			};
		default:
			return { ...state,
				settings: settings(state.settings, action),
				archive: archive(state.archive, action),
				users: users(state.users, action),
				channels: channels(state.channels, action),
				messageGroups: messageGroups(state.messageGroups, action),
			};
	}
};