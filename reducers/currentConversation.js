// A conversation is all the info contained within a 
// channel - all messages, etc

import { createMessageGroup } from './messageGroups'
import { makePath } from '../util/makePaths'

const loadChannel = (rootArchivePath, channelName, getMessageGroupNames) => {
	const path = makePath(rootArchivePath, channelName)
	return {
		messageGroups: 
			getMessageGroupNames(path)
				.map((filename) => createMessageGroup(filename, filename)),
		currentChannel: channelName
	}
}

export default (state = {}, action) => {
  switch (action.type) {
		case 'LOAD_CHANNEL_FROM_ARCHIVE':
			return loadChannel(action.rootArchivePath, action.channelName, action.getMessageGroupNames)
    default:
      return state
  }
}