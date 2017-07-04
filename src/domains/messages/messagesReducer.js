export default (state, action) => {
	switch (action.type) {
		case 'SET_ACTIVE_CHANNEL':
			return { ...state, activeChannelName: action.channelName };
		case 'SET_CHANNELS':
			return { ...state, channels: action.channels };
		default:
			throw { error: 'unexpected action' };
	}
};