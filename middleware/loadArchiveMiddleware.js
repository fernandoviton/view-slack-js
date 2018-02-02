import { setLoadErrorInSettings, setMessageGroups, setUsers, setChannels, setArchiveDisplayPath } from '../actions/index';
import { doesArchiveExist, getUsersAsJson, getChannelsAsJson } from '../util/loadArchives';

export default store => next => (action) => {
	const nextAction = next(action);

	// TODO: probably should split and add an action this can dispatch when done with async
	if (action.type === 'LOAD_ARCHIVE') {
		//console.log('Middleware Handling LOAD_ARCHIVE');

		const path = action.path;

		// first clear current view and set the new path
		store.dispatch(setArchiveDisplayPath(path));
		store.dispatch(setUsers([]));
		store.dispatch(setChannels([]));
		store.dispatch(setMessageGroups([]));
		store.dispatch(setLoadErrorInSettings(undefined));

		if (doesArchiveExist(path))		{
			const usersInfo = getUsersAsJson(path);
			const channelsInfo = getChannelsAsJson(path);

			// set new data
			store.dispatch(setUsers(usersInfo));
			store.dispatch(setChannels(channelsInfo));
		}		else		{
			store.dispatch(setLoadErrorInSettings(`Unable to find archive at: ${path}`));
		}
	}

	return nextAction;
};