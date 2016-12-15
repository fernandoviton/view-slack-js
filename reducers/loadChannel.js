import { createMessageGroup } from './messageGroups'
import { getDailyArchiveNames } from '../util/loadArchives'
import { makePath } from '../util/paths'

const loadDailyArchive = (path) => {
	const fileContent = fs.readFileSync(action.path)
	return JSON.parse(fileContent)
}

const loadChannel = (rootArchivePath, channelName) => {
	const path = makePath(rootArchivePath, channelName)
	return {
		messageGroups: 
			getDailyArchiveNames(path)
				.map((filename) => createMessageGroup(filename, filename)),
		currentChannel: channelName
	}
}

export default (state = {}, action) => {
  switch (action.type) {
		case 'LOAD_CHANNEL_FROM_ARCHIVE':
			return loadChannel(action.rootArchivePath, action.channelName)
    default:
      return state
  }
}