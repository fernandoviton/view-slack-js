export const loadDefaultSlack = (path) => ({
	type: 'LOAD_DEFAULT_SLACK_ARCHIVE',
	path
})

export const loadChannel = (rootArchivePath, channelName) => ({
	type: 'LOAD_CHANNEL_FROM_ARCHIVE',
	rootArchivePath,
	channelName
})

export const loadConversation = (rootPath, channelName, dailyFilename) => ({
	type: 'LOAD_CONVERSATION_FROM_DAILY_ARCHIVE',
	path: rootPath + channelName + '/' + dailyFilename
})