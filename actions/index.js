export const loadDefaultSlack = (path) => ({
	type: 'LOAD_DEFAULT_SLACK_ARCHIVE',
	path
})

export const loadChannel = (rootPath, channelName) => ({
	type: 'LOAD_CHANNEL_FROM_ARCHIVE',
	channelPath: rootPath + channelName + '/'
})