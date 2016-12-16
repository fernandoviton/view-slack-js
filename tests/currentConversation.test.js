import  currentConversation from '../reducers/currentConversation'
import { loadChannel } from '../actions/index.js'

test('load channel uses root + channel name as path', () => {
	var getMessageGroupNames = jest.fn()
	getMessageGroupNames.mockReturnValueOnce(['a'])
	
	currentConversation({}, loadChannel('rootPath', 'channelName', getMessageGroupNames));

	expect(getMessageGroupNames.mock.calls)
		.toEqual([['rootPath/channelName']])
})

test('load channel returns message groups in state', () => {
	var getMessageGroupNames = jest.fn()
	getMessageGroupNames.mockReturnValueOnce(['a', 'b'])
	
	const newState = currentConversation({}, 
		loadChannel('not used', 'not used 2', getMessageGroupNames));
	
	expect(newState.messageGroups)
		.toEqual([{id: 'a', name: 'a'}, {id: 'b', name: 'b'}])
})

test('load channel returns currentChannel in state', () => {
	var getMessageGroupNames = jest.fn()
	getMessageGroupNames.mockReturnValueOnce(['anything'])
	
	const newState = currentConversation({}, 
		loadChannel('not used', 'theChannelName', getMessageGroupNames));

	expect(newState.currentChannel)
		.toBe('theChannelName')
})