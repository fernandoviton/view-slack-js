import fs from 'fs';
import { makePath } from './paths';

const getExtension = (filename) => {
	const afterDot = filename.substr(filename.lastIndexOf('.') + 1);
	if (afterDot === filename)		{ return ''; }
	return afterDot.toLowerCase();
};

export const getDailyArchiveNames = channelArchivePath => fs.readdirSync(channelArchivePath)
		.filter((filename, _, __) => getExtension(filename) === 'json');

export const getMessagesFromDailyArchive = dailyArchivePath => JSON.parse(fs.readFileSync(dailyArchivePath));

export const doesArchiveExist = path => fs.existsSync(makePath(path, 'users.json'));

export const getChannelsAsJson = rootArchivePath => JSON.parse(fs.readFileSync(makePath(rootArchivePath, 'channels.json')));

export const getUsersAsJson = rootArchivePath => JSON.parse(fs.readFileSync(makePath(rootArchivePath, 'users.json')));