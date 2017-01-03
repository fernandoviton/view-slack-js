import { startLoadArchive, finishedLoadArchive, setLoadErrorInSettings } from '../actions/index'
import loadUsers from './loadUsers'
import loadChannels from './loadChannels'
import { doesArchiveExist } from '../util/loadArchives'

export default (store, path) => {
	const originalPath = store.getState().archive.localPath
	if (originalPath == path)
		return

	store.dispatch(startLoadArchive(path))

	if (doesArchiveExist(path))
	{
		loadUsers(store, path)
		loadChannels(store, path)
		store.dispatch(setLoadErrorInSettings(undefined))		
		store.dispatch(finishedLoadArchive(path))
	}
	else
	{
		store.dispatch(setLoadErrorInSettings('Unable to find archive at: ' + path))
		store.dispatch(finishedLoadArchive(originalPath))
	}
}