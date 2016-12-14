import fs from 'fs'
import { addChannel } from './channels'

export default (state = {}, action) => {
  switch (action.type) {
		case 'LOAD_DEFAULT_SLACK_ARCHIVE':
			const fileContent = fs.readFileSync(action.path + 'channels.json')
			const json = JSON.parse(fileContent)
			state.channels = []
			for (var i in json) 
			{
				state.channels = addChannel(state.channels, json[i])
			}
			state.achiveRootPath = action.path
			return state;		
    default:
      return state
  }
}