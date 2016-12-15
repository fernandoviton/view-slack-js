import { remote } from 'electron'

const documentsPath = remote.app.getPath('documents')
export const defaultSlackArchivePath = documentsPath + '/slackexported/'

export const makePath = (a, b) => {
	return a + '/' + b
}