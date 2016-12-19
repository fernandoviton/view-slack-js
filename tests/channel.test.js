import { startLoadChannel, finishedLoadChannel } from '../actions/index.js'
import channel from '../reducers/channel'

test('default channel state', () => {
	expect(channel(undefined, {type: undefined}))
		.toEqual({
			isLoading: false, 
			channelName: undefined, 
			messageGroups: [], 
			currentMessageGroup: undefined, 
			messages: []})
})

test('start loading channel sets loading state to true', () => {
	expect(channel(undefined, startLoadChannel('anything')).isLoading).toEqual(true)
})

test('start loading channel sets channel name', () => {
	expect(channel(undefined, startLoadChannel('theChannel')).channelName).toEqual('theChannel')
})

test('start loading channel empties messageGroups', () => {
	expect(channel({messageGroups: ['anything']}, startLoadChannel('anything')).messageGroups).toEqual([])
})

test('start loading channel empties currentMessageGroup', () => {
	expect(channel({currentMessageGroup: ['anything']}, startLoadChannel('anything')).currentMessageGroup).toEqual('')
})

test('start loading channel empties messages', () => {
	expect(channel({messages: ['anything']}, startLoadChannel('anything')).messages).toEqual([])
})

test('finished loading channel sets loading state to false', () => {
	expect(channel(undefined, finishedLoadChannel(['anything'], 'anything2', ['anything3'])).isLoading)
		.toEqual(false)
})

test('finished loading channel doesnt change channel name', () => {
	expect(channel({channelName: 'original'}, finishedLoadChannel(['anything'], 'anything2', ['anything3'])).channelName)
		.toEqual('original')
})

test('finished loading channel sets messageGroups', () => {
	expect(channel(undefined, finishedLoadChannel(['a', 'b'], 'anything2', ['anything3'])).messageGroups)
		.toEqual([{id: 'a', name: 'a'}, {id: 'b', name: 'b'}])
})

test('finished loading channel sets currentMessageGroup', () => {
	expect(channel({currentMessageGroup: ['anything']}, finishedLoadChannel(['anything'], 'a', ['anything3']))
		.currentMessageGroup).toEqual('a')
})

test('finished loading channel sets messages', () => {
	expect(channel({messages: ['anything']}, finishedLoadChannel(['anything'], 'anything2', ['a']))
		.messages).toEqual(['a'])
})