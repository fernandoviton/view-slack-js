import updateMessages from './util/updateMessages';

const matchesSearch = (message, searchText) =>
	(searchText === '' ? false : message.text.toLowerCase().indexOf(searchText) !== -1);

export const setActiveSearch = (state, searchText, searchHitCount, currentCompletedSearchText) =>
({ ...state,
	activeSearch: {
		searchText,
		searchHitCount, // optional
		currentCompletedSearchText // optional
	},
});

export const doSearch = state => {
	if (state.activeSearch.currentCompletedSearchText === state.activeSearch.searchText)
		return state;
	const searchText = state.activeSearch.searchText;
	var searchHitCount = 0;
	var newState = updateMessages(state,
		(messageGroupName, message) => {
			var isActiveSearchResult = matchesSearch(message, searchText);
			if (isActiveSearchResult)
				searchHitCount++;
			return {
				...message,
				display: { isActiveSearchResult },
		}});
	return setActiveSearch(newState, searchText, searchHitCount, searchText);
};