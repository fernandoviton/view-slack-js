import { remote } from 'electron';
const documentsPath = remote.app.getPath('documents');
export const defaultSlackArchivePath = documentsPath + '/slackexported/';