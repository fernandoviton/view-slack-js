import { defaultSlackArchivePath } from '../util/paths'
import { makePath } from '../util/makePaths'
import { getDailyArchiveNames, getMessagesFromDailyArchive } from '../util/loadArchives'
import { startLoadChannel, finishedLoadChannel } from '../actions/index'

export default (store, channelName) => {
	const channelPath = makePath(defaultSlackArchivePath, channelName)
	store.dispatch(startLoadChannel(channelName))
	const dailyArchivesNames = getDailyArchiveNames(channelPath)
	let messages = []
	let currentMessageGroup = undefined
	if (dailyArchivesNames.length > 0)
	{
		currentMessageGroup = dailyArchivesNames[dailyArchivesNames.length - 1]
		const lastDailyArchivePath = makePath(channelPath, currentMessageGroup)
		messages = getMessagesFromDailyArchive(lastDailyArchivePath)
	}
	store.dispatch(finishedLoadChannel(dailyArchivesNames, currentMessageGroup, messages))
}