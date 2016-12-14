import fs from 'fs'
import { createMessageGroup } from './messageGroups'

const getExtension = (filename) => {
	const afterDot = filename.substr(filename.lastIndexOf('.') + 1)
	if (afterDot === filename)
		return ''
	else
		return afterDot.toLowerCase()
}

export default (state = {}, action) => {
  switch (action.type) {
		case 'LOAD_CHANNEL_FROM_ARCHIVE':
			state = fs.readdirSync(action.channelPath)
				.filter((filename, _, __) => getExtension(filename) === "json")
				.map((filename) => createMessageGroup(filename, filename))
			return state;		
    default:
      return state
  }
}