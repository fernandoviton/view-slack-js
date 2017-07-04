import { initialState } from './initialState';

export default (
	state = initialState,
	action) => {
	console.log('handling action:', action);

	switch (action.type) {
		default:
			return state;
	}
};