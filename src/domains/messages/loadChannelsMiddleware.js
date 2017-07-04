export default store => next => (action) => {
	console.log('');
	return next(action);
};