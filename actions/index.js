import { getDailyArchiveNames } from '../util/loadArchives'

export const startLoadChannels = () => ({
	type: 'START_LOAD_CHANNEL_LIST',
})

// channelsInfo[i].name = name of channel
// channelsInfo[i].id = unique id
export const finishedLoadChannels = (channelsInfo) => ({
	type: 'FINISHED_LOAD_CHANNEL_LIST',
	channelsInfo
})

export const startLoadChannel = (channelName) => ({
	type: 'START_LOAD_CHANNEL',
	channelName
})

// messages[i].text = body of messages
// messages[i].id = unique id
export const finishedLoadChannel = (messageGroupNames, currentMessageGroup, messages) => ({
	type: 'FINISHED_LOAD_CHANNEL',
	messageGroupNames,
	currentMessageGroup,
	messages
})

export const startLoadMessages = () => ({
	type: 'START_LOAD_MESSAGES',
})

// messages[i].text = text of message
// messages[i].id = unique id
export const finishedLoadMessages = (messages) => ({
	type: 'FINISHED_LOAD_MESSAGES',
	messages
})