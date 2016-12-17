import { startLoadChannels, finishedLoadChannels } from '../actions/index.js'
import channels from '../reducers/channels'

test('default channel state', () => {
	expect(channels(undefined, {type: undefined})).toEqual({isLoading: false, items: []})
})

test('start loading channels sets loading state to true', () => {
	expect(channels(undefined, startLoadChannels()).isLoading).toEqual(true)
})

test('start loading channels empties items', () => {
	expect(channels({items: ['a']}, startLoadChannels()).items).toEqual([])
})

test('finished loading channels sets loading state to false', () => {
	expect(channels(undefined, finishedLoadChannels([{name: 'new'}])).isLoading).toEqual(false)
})

test('finished loading channels sets items', () => {
	expect(channels({items: 'something'}, finishedLoadChannels([{name: 'new'}])).items)
		.toEqual([{id: 'new', name: 'new'}])
})