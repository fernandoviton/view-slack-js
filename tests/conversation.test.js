import { startLoadConversation, finishedLoadConversation } from '../actions/index.js'
import conversation from '../reducers/conversation'

test('default conversation state', () => {
	expect(conversation(undefined, {type: undefined}))
		.toEqual({isLoading: false, channelName: undefined, messageGroups: []})
})

test('start loading conversation sets loading state to true', () => {
	expect(conversation(undefined, startLoadConversation('anything')).isLoading).toEqual(true)
})

test('start loading conversation sets channel name', () => {
	expect(conversation(undefined, startLoadConversation('theChannel')).channelName).toEqual('theChannel')
})

test('start loading conversation empties messageGroups', () => {
	expect(conversation({messageGroups: ['anything']}, startLoadConversation('anything')).messageGroups).toEqual([])
})

test('finished loading conversation sets loading state to false', () => {
	expect(conversation(undefined, finishedLoadConversation(['anything'])).isLoading).toEqual(false)
})

test('finished loading conversation doesnt change channel name', () => {
	expect(conversation({channelName: 'original'}, finishedLoadConversation(['anything'])).channelName).toEqual('original')
})

test('finished loading conversation sets messageGroups', () => {
	expect(conversation(undefined, finishedLoadConversation(['a', 'b'])).messageGroups)
		.toEqual([{id: 'a', name: 'a'}, {id: 'b', name: 'b'}])
})
