// Loads the archive: users and the channels list
export const loadArchive = (filePath) => ({
	type: 'LOAD_ARCHIVE',
	filePath
})

// Loads the messageGroups of the active channel
export const loadMessageGroups = () => ({
	type: 'LOAD_MESSAGE_GROUPS'
})

// load messages of the given group name
export const loadMessages = (messageGroupName) => ({
	type: 'LOAD_MESSAGES',
	messageGroupName
})

export const setActiveChannel = (channelName) => ({
	type: 'SET_ACTIVE_CHANNEL',
	channels
})

// channelsInfo[i].name
export const setChannels = (channelsInfo) => ({
	type: 'SET_CHANNELS',
	channelsInfo
})

// usersInfo[i].name
export const setUsers = (usersInfo) => ({
	type: 'SET_USERS',
	usersInfo
})

// messageGroupInfo[i].name
export const setMessageGroups = (messageGroupsInfo) => ({
	type: 'SET_MESSAGE_GROUPS',
	messageGroupsInfo
})

// messages[i].text = text of message
// messages[i].ts = unique id
export const setMessages = (messageGroupName, messages) => ({
	type: 'SET_MESSAGES',
	messageGroupName,
	messages
})

export const setLoadErrorInSettings = (msg) => ({
	type: 'SET_ARCHIVE_LOAD_ERROR_IN_SETTINGS',
	msg
})

// path = path being inputted by user
export const setArchiveDisplayPath = (path) => ({
	type: 'SET_DISPLAY_ARCHIVE_PATH',
	path
})

export const toggleSettingsUi = () => ({
	type: 'TOGGLE_SETTINGS_UI'
})