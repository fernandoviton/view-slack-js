import { defaultSlackArchivePath } from '../util/paths'
import { makePath } from '../util/makePaths'
import { getDailyArchiveNames } from '../util/loadArchives'
import { startLoadConversation, finishedLoadConversation } from '../actions/index'

export default (store, channelName) => {
	const path = makePath(defaultSlackArchivePath, channelName)
	store.dispatch(startLoadConversation(channelName))
	const dailyArchives = getDailyArchiveNames(path)
	store.dispatch(finishedLoadConversation(dailyArchives))
}