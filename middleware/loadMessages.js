import { defaultSlackArchivePath } from '../util/globalPaths'
import { makePath } from '../util/paths'
import { getMessagesFromDailyArchive } from '../util/loadArchives'
import { setMessages } from '../actions/index'

export default (store, messageGroupNames) => {
	console.log('Load messages for:', messageGroupNames)
	for (const messageGroupName of messageGroupNames)
	{
		loadMessagesForGroup(store, messageGroupName)
	}
}

export const loadMessagesForGroup = (store, messageGroupName) => {
	if (messageGroupName === '')
	{
		store.dispatch(setMessages(messageGroupName, ['']))
	}
	else
	{
		const channelPath = makePath(defaultSlackArchivePath, store.getState().channels.activeChannelName)
		const currentDailyArchivePath = makePath(channelPath, messageGroupName)
		const messages = getMessagesFromDailyArchive(currentDailyArchivePath)
		store.dispatch(setMessages(messageGroupName, messages))
	}
}