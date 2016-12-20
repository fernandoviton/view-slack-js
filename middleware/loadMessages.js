import { defaultSlackArchivePath } from '../util/paths'
import { makePath } from '../util/makePaths'
import { getMessagesFromDailyArchive } from '../util/loadArchives'
import { startLoadMessages, finishedLoadMessages, setActiveMessageGroup } from '../actions/index'

export default (store, messageGroupName) => {
	store.dispatch(setActiveMessageGroup(messageGroupName))
	store.dispatch(startLoadMessages())
	if (messageGroupName === '')
	{
		store.dispatch(finishedLoadMessages(['']))
	}
	else
	{
		const channelPath = makePath(defaultSlackArchivePath, store.getState().channels.activeChannelName)
		const currentDailyArchivePath = makePath(channelPath, messageGroupName)
		const messages = getMessagesFromDailyArchive(currentDailyArchivePath)
		store.dispatch(finishedLoadMessages(messages))
	}
}