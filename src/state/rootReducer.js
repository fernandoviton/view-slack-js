import InitialState from './initialState';

export default (
	state = InitialState,
	action) => {
	console.log('handling action:', action);

	switch (action.type) {
		default:
			return state;
	}
};