import rootReducer from '../src/state/rootReducer';

test('rootReducer with unknown action returns input state', () => {
	expect(rootReducer('something', { type: 'unknown action' }))
	.toEqual('something');
});
