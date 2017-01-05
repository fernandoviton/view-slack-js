import { startLoadArchive, finishedLoadArchive, setLoadErrorInSettings, setArchiveDisplayPath } from '../actions/index'
import loadUsers, { clearUsers }  from './loadUsers'
import loadChannels, { clearChannels } from './loadChannels'
import { clearMessageGroups } from './loadMessages'
import { doesArchiveExist } from '../util/loadArchives'

export default (store, path) => {
	const originalPath = store.getState().archive.localPath

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