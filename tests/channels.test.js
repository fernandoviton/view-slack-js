import { startLoadChannels, finishedLoadChannels, setActiveChannel } from '../actions/index.js'
import channels from '../reducers/channels'

test('default channel state', () => {
	expect(channels(undefined, {type: undefined})).toEqual(
		{
			isLoading: false, 
			activeChannelName: undefined, 
			items: []})
})

test('start loading channels sets loading state to true', () => {
	expect(channels(undefined, startLoadChannels()).isLoading).toEqual(true)
})

test('start loading channels sets activeChannelName to undefined', () => {
	expect(channels({activeChannelName: 'blah'}, startLoadChannels()).activeChannelName).toEqual(undefined)
})

test('start loading channels empties items', () => {
	expect(channels({items: ['a']}, startLoadChannels()).items).toEqual([])
})

test('finished loading channels sets loading state to false', () => {
	expect(channels(undefined, finishedLoadChannels([{name: 'new'}])).isLoading).toEqual(false)
})

test('finished loading channels sets activeChannelName to undefined', () => {
	expect(channels({activeChannelName: 'blah'}, finishedLoadChannels([{name: 'new'}])).activeChannelName)
		.toEqual(undefined)
})

test('finished loading channels sets items', () => {
	expect(channels({items: 'something'}, finishedLoadChannels([{name: 'new'}])).items)
		.toEqual([{id: 'new', name: 'new'}])
})

test('set active channel sets', () => {
	expect(channels(undefined, setActiveChannel('blah')).activeChannelName).toEqual('blah')
})