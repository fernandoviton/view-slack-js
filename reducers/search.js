import updateMessages from './util/updateMessages';

const matchesSearch = (message, search) =>
	(search.searchText === '' ? false : message.text.toLowerCase().indexOf(search.searchText) !== -1);

export const setActiveSearch = (state, text) =>
({ ...state,
	activeSearch: {
		searchText: text,
	},
});

export const doSearch = state => updateMessages(state,
	(messageGroupName, message) => ({
		...message,
		display: { isActiveSearchResult: matchesSearch(message, state.activeSearch) },
	}));