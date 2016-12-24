import { getDailyArchiveNames } from '../util/loadArchives'

export const startLoadChannels = () => ({
	type: 'START_LOAD_CHANNELS',
})

// channelsInfo[i].name = name of channel
// channelsInfo[i].id = unique id
export const finishedLoadChannels = (channelsInfo) => ({
	type: 'FINISHED_LOAD_CHANNELS',
	channelsInfo
})

export const setActiveChannel = (channelName) => ({
	type: 'SET_ACTIVE_CHANNEL',
	channelName
})

export const startLoadMessageGroups = () => ({
	type: 'START_LOAD_MESSAGE_GROUPS'
})

export const finishedLoadMessageGroups = (messageGroupNames) => ({
	type: 'FINISHED_LOAD_MESSAGE_GROUPS',
	messageGroupNames
})

export const setActiveMessageGroup = (messageGroupName) => ({
	type: 'SET_ACTIVE_MESSAGE_GROUP',
	messageGroupName
})

export const startLoadMessages = (messageGroupName) => ({
	type: 'START_LOAD_MESSAGES',
	messageGroupName
})

// messages[i].text = text of message
// messages[i].ts = unique id
export const finishedLoadMessages = (messageGroupName, messages) => ({
	type: 'FINISHED_LOAD_MESSAGES',
	messageGroupName,
	messages
})