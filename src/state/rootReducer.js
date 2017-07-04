import { initialState } from './initialState';
import messageReducer from '../domains/messages/messagesReducer';

export default (
	state = initialState,
	action) => {
	console.log('handling action:', action);

	switch (action.domain) {
		case 'MESSAGES':
			return messageReducer(state, action);
		default:
			return state;
	}
};