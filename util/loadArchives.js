import fs from 'fs'
import makePath from './paths'

export const getDailyArchiveNames = (channelArchivePath) => {
	return fs.readdirSync(channelArchivePath)
		.filter((filename, _, __) => getExtension(filename) === "json")
}


const getExtension = (filename) => {
	const afterDot = filename.substr(filename.lastIndexOf('.') + 1)
	if (afterDot === filename)
		return ''
	else
		return afterDot.toLowerCase()
}