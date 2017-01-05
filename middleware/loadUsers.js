import { getUsersAsJson } from '../util/loadArchives'
import { startLoadUsers, finishedLoadUsers } from '../actions/index.js'

export default (store, path) => {
	store.dispatch(startLoadUsers())
	const usersInfo = getUsersAsJson(path);
	store.dispatch(finishedLoadUsers(usersInfo))
}

export const clearUsers = (store) =>
{
	store.dispatch(startLoadUsers())	
	store.dispatch(finishedLoadUsers([]))
}