import createMessage from './createMessage';
import createChannel from './createChannel';

export const sampleState = ({
	activeMessages: [
		createMessage('id1', 'This is the first message', 'user1', 'Fred'),
		createMessage('id2', 'A brown cow flew over the lazy dog', 'user2', 'Bob'),
		createMessage('id3', 'What are you talking about :)', 'user1', 'Fred'),
	],
	channels: [
		createChannel('important stuff'),
		createChannel('regular stuff'),
	],
	activeChannelName: 'regular stuff',
});