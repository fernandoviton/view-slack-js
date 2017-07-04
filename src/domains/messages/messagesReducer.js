export default (state, action) => {
	switch (action.type) {
		case 'SET_ACTIVE_CHANNEL':
			return { ...state, activeChannelName: action.channelName };
		default:
			throw { error: 'unexpected action' };
	}
};