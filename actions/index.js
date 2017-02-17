// path = path being inputted by user
export const setArchiveDisplayPath = (path) => ({
	type: 'SET_DISPLAY_ARCHIVE_PATH',
	path
})

// TODO CLEANUP: Merge finishedLoadArchive with this and rename startLoadArchive to 
// something like loadArchiveInProgress (or even make an option on loadArchive)
export const loadArchive = (filePath) => ({
	type: 'LOAD_ARCHIVE',
	filePath
})

// Starts loading the archive specificed in the archive.displayPath
export const startLoadArchive = () => ({
	type: 'START_LOAD_ARCHIVE'
})

// path = local path to the archive.  This can be different than on start (for instance in cases where it failed)
export const finishedLoadArchive = (path) => ({
	type: 'FINISHED_LOAD_ARCHIVE',
	path
})

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

export const startLoadUsers = () => ({
	type: 'START_LOAD_USERS',
})

// usersInfo[i].name = display name
// usersInfo[i].id = user id used in messages
export const finishedLoadUsers = (usersInfo) => ({
	type: 'FINISHED_LOAD_USERS',
	usersInfo
})

export const toggleSettingsUi = () => ({
	type: 'TOGGLE_SETTINGS_UI'
})

export const setLoadErrorInSettings = (msg) => ({
	type: 'SET_ARCHIVE_LOAD_ERROR_IN_SETTINGS',
	msg
})