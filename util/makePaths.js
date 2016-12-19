export const makePath = (a, b, c = '') => {
	return a + '/' + b + (c.length > 0 ? ('/' + c) : '')
}