import rootReducer from '../../src/state/rootReducer';
import { setChannels } from '../../src/state/actions';

test('setChannels sets state', () => {
	expect(rootReducer({}, setChannels(['a', 'b'])))
	.toEqual({ channels: ['a', 'b'] });
});
