import { startLoadArchive, finishedLoadArchive } from '../actions/index'

export default (store, path) => {
	if (store.getState().archive.localPath == path)
		return
	store.dispatch(startLoadArchive(path))
	store.dispatch(finishedLoadArchive(path))
}