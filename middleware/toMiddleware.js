// This module is a helper that generates a middleware from a side effect.
// See sideeffect/index.js for more details

export default sideEffect => store => next => action => {
	const oldState = store.getState();
	const nextAction = next(action);
	const newState = store.getState();
	sideEffect(oldState, newState, store.dispatch, action);
	return nextAction;
};