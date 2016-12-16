import { getDailyArchiveNames } from '../util/loadArchives'

export const loadDefaultSlack = (path) => ({
	type: 'LOAD_DEFAULT_SLACK_ARCHIVE',
	path
})

export const loadChannel = (rootArchivePath, channelName, getMessageGroupNames = getDailyArchiveNames) => ({
	type: 'LOAD_CHANNEL_FROM_ARCHIVE',
	rootArchivePath,
	channelName,
	getMessageGroupNames
})

export const loadConversation = (rootPath, channelName, dailyFilename) => ({
	type: 'LOAD_CONVERSATION_FROM_DAILY_ARCHIVE',
	path: rootPath + channelName + '/' + dailyFilename
})