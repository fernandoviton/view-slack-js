import { setMessages } from '../actions/index';
import messages from '../reducers/messages';

test('default messages state', () => {
	expect(messages(undefined, { type: undefined })).toEqual({ items: [] });
});

test('setMessages sets items', () => {
	const expectedDisplay = {
		isActiveSearchResult: false,
	};
	const messageItems = [{ ts: 'a', text: 'aText' }, { ts: 'b', text: 'bText' }];
	const messageItemsExpected = [{ id: 'a', text: 'aText', display: expectedDisplay }, { id: 'b', text: 'bText', display: expectedDisplay }];
	expect(messages({ items: ['something'] }, setMessages('group', messageItems)).items)
		.toEqual(messageItemsExpected);
});