import { createChannel } from './channels'
import { getChannelsAsJson } from '../util/loadArchives'

export default (state = {}, action) => {
  switch (action.type) {
		case 'LOAD_DEFAULT_SLACK_ARCHIVE':
			state.channels = getChannelsAsJson(action.path).map((item) => {
				return createChannel(item.id, item.name)
			})
			state.achiveRootPath = action.path
			return state;		
    default:
      return state
  }
}