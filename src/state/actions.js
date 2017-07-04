export const setActiveChannel = channelName => ({
	domain: 'MESSAGES',
	type: 'SET_ACTIVE_CHANNEL',
	channelName,
});

export const setChannels = channels => ({
	domain: 'MESSAGES',
	type: 'SET_CHANNELS',
	channels,
});