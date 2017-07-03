export const makePath = (a, b, c = '') => `${a}/${b}${c.length > 0 ? (`/${c}`) : ''}`;

export const stripExtension = (path) => {
	const lastIndex = path.lastIndexOf('.');
	return lastIndex >= 0 ? path.substr(0, lastIndex) : path;
};