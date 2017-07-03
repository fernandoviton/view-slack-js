import updateMessages from '../reducers/util/updateMessages';
import { createMessageGroup } from '../reducers/messageGroups';

test('updateMessages with empty messages does nothing', () => {
	expect(updateMessages({ messageGroups: { items: [] } },
			(messageGroupName, message) => { }))
		.toEqual({ messageGroups: { items: [] } });
});

test('updateMessages with single message updates to new message', () => {
	expect(updateMessages({ messageGroups: { items: [createMessageGroup('mg1', { items: ['fakeMessage1'] })] } },
			(messageGroupName, message) => 'fakeMessage2'))
		.toEqual({ messageGroups: { items: [createMessageGroup('mg1', { items: ['fakeMessage2'] })] } });
});

test('updateMessages with multiple message groups updates to new message', () => {
	expect(updateMessages({ messageGroups: { items: [
		createMessageGroup('mg1', { items: ['fakeMessage1'] }),
		createMessageGroup('mg2', { items: ['fakeMessage2'] }),
		] } },
			(messageGroupName, message) => (messageGroupName === 'mg1' ? 'newFakeMessage1' : 'newFakeMessage2')))
		.toEqual({ messageGroups: { items: [
		createMessageGroup('mg1', { items: ['newFakeMessage1'] }),
		createMessageGroup('mg2', { items: ['newFakeMessage2'] }),
		] } });
});