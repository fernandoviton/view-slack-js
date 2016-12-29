import { defaultSlackArchivePath } from '../util/globalPaths'
import { makePath } from '../util/paths'
import { getDailyArchiveNames } from '../util/loadArchives'
import loadMessages from './loadMessages'
import { startLoadMessageGroups, finishedLoadMessageGroups, startLoadMessages, setActiveChannel } from '../actions/index'

const getLastOrEmpty = (arrayOfStrings) => {
	return arrayOfStrings.length === 0 ? '' : arrayOfStrings[arrayOfStrings.length - 1]
}

export default (store, channelName) => {
	store.dispatch(setActiveChannel(channelName))
	store.dispatch(startLoadMessageGroups())
	store.dispatch(startLoadMessages())
	const channelPath = makePath(defaultSlackArchivePath, channelName)
	const dailyArchivesNames = getDailyArchiveNames(channelPath)
	store.dispatch(finishedLoadMessageGroups(dailyArchivesNames))
	loadMessages(store, [getLastOrEmpty(dailyArchivesNames)])
}