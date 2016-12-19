import { getChannelsAsJson } from '../util/loadArchives'
import { startLoadChannels, finishedLoadChannels } from '../actions/index.js'

// TODO: change this and loadChannel to be async
export default (store, path) => {
	store.dispatch(startLoadChannels())
	const channelsInfo = getChannelsAsJson(path);
	store.dispatch(finishedLoadChannels(channelsInfo))
}