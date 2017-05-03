import { defaultSlackArchivePath } from '../util/globalPaths'
import { makePath } from '../util/paths'
import { getDailyArchiveNames } from '../util/loadArchives'
import loadMessages from './loadMessages'
import { setMessageGroups, setActiveChannel } from '../actions/index'

const getLastOrEmpty = (arrayOfStrings) => {
	return arrayOfStrings.length === 0 ? '' : arrayOfStrings[arrayOfStrings.length - 1]
}

export default (store, channelName) => {
	store.dispatch(setActiveChannel(channelName))
	const channelPath = makePath(defaultSlackArchivePath, channelName)
	const dailyArchivesNames = getDailyArchiveNames(channelPath)
	console.log(dailyArchivesNames)
	store.dispatch(setMessageGroups(dailyArchivesNames.map(name => ({name}))))
	loadMessages(store, [getLastOrEmpty(dailyArchivesNames)])
}