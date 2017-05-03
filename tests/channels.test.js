import { setChannels, setActiveChannel } from '../actions/index.js'
import channels from '../reducers/channels'

test('default channel state', () => {
	expect(channels(undefined, {type: undefined})).toEqual(
		{
			isLoading: false,
			activeChannelName: undefined,
			items: []})
})

test('set channels sets activeChannelName to undefined', () => {
	expect(channels({activeChannelName: 'blah'}, setChannels([{name: 'new'}])).activeChannelName)
		.toEqual(undefined)
})

test('set channels replaces channels with input', () => {
	expect(channels({items: 'something'}, setChannels([{name: 'new'}])).items)
		.toEqual([{id: 'new', name: 'new'}])
})

test('set active channel sets', () => {
	expect(channels(undefined, setActiveChannel('blah')).activeChannelName).toEqual('blah')
})