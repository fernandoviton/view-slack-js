import fs from 'fs'
import { makePath } from './paths'

export const getDailyArchiveNames = (channelArchivePath) => {
	return fs.readdirSync(channelArchivePath)
		.filter((filename, _, __) => getExtension(filename) === "json")
}

export const getMessagesFromDailyArchive = (dailyArchivePath) => {
	return JSON.parse(fs.readFileSync(dailyArchivePath))
}

export const doesArchiveExist = (path) => {
	return fs.existsSync(makePath(path, 'users.json'))
}

export const getChannelsAsJson = (rootArchivePath) => {
	return JSON.parse(fs.readFileSync(makePath(rootArchivePath, 'channels.json')))
}

export const getUsersAsJson = (rootArchivePath) => {
	return JSON.parse(fs.readFileSync(makePath(rootArchivePath, 'users.json')))
}

const getExtension = (filename) => {
	const afterDot = filename.substr(filename.lastIndexOf('.') + 1)
	if (afterDot === filename)
		return ''
	else
		return afterDot.toLowerCase()
}