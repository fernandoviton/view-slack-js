export const setActiveChannel = channelName => ({
	domain: 'MESSAGES',
	type: 'SET_ACTIVE_CHANNEL',
	channelName,
});