import { getDailyArchiveNames } from '../util/loadArchives'

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

export const startLoadChannels = () => ({
	type: 'START_LOAD_CHANNEL_LIST',
})

// channelsInfo[i].name = name of channel
export const finishedLoadChannels = (channelsInfo) => ({
	type: 'FINISHED_LOAD_CHANNEL_LIST',
	channelsInfo
})