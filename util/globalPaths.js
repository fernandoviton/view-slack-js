import { remote } from 'electron';
import { makePath } from './paths';

console.log('version', remote.app.getVersion())

const documentsPath = remote.app.getPath('documents');
export const defaultSlackArchivePath = makePath(documentsPath, 'slackexported/');

export const dataPath = remote.app.getPath('userData');
export const settingsFilePath = makePath(dataPath, 'settings.json');
