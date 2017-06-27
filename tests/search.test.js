import { setActiveSearch, doSearch } from '../actions/index';
import rootReducer from '../reducers/rootReducer';

const defaultState = {
	searchText: '',
};

test('default state includes activeSearch', () => {
	expect(rootReducer(undefined, { type: undefined }).activeSearch).toEqual(defaultState);
});

test('setActiveSearch changes activeSearch', () => {
	expect(rootReducer(defaultState, setActiveSearch('something')).activeSearch)
		.toEqual({
			searchText: 'something',
		});
});