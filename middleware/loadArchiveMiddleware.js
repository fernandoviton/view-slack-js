import { startLoadArchive, finishedLoadArchive, setLoadErrorInSettings, setArchiveDisplayPath } from '../actions/index'
import loadUsers, { clearUsers }  from './loadUsers'
import loadChannels, { clearChannels } from './loadChannels'
import { clearMessageGroups } from './loadMessages'
import { doesArchiveExist } from '../util/loadArchives'

export default store => next => action => {
	if (action.type === 'LOAD_ARCHIVE') {
		console.log("Middleware Handling LOAD_ARCHIVE")
		
		const originalPath = store.getState().archive.localPath
		const path = action.filePath

		store.dispatch(setArchiveDisplayPath(path))
		store.dispatch(startLoadArchive())

		clearMessageGroups(store)

		if (doesArchiveExist(path))
		{
			loadUsers(store, path)
			loadChannels(store, path)
			store.dispatch(setLoadErrorInSettings(undefined))		
			store.dispatch(finishedLoadArchive(path))
		}
		else
		{
			clearUsers(store)
			clearChannels(store)
			store.dispatch(setLoadErrorInSettings('Unable to find archive at: ' + path))
			store.dispatch(finishedLoadArchive(undefined))
		}
	}
	return next(action)
}