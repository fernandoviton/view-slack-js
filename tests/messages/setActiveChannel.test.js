import rootReducer from '../../src/state/rootReducer';
import { setActiveChannel } from '../../src/state/actions';

test('setActiveChannel sets state', () => {
	expect(rootReducer({}, setActiveChannel('new channel')))
	.toEqual({ activeChannelName: 'new channel' });
});
