import { startLoadMessages, finishedLoadMessages } from '../actions/index.js'
import messages from '../reducers/messages'

test('default messages state', () => {
	expect(messages(undefined, {type: undefined})).toEqual({isLoading: false, items: []})
})

test('start load messages sets isLoading to true', () => {
	expect(messages(undefined, startLoadMessages('anything')).isLoading).toEqual(true)
})

test('start load messages empties items', () => {
	expect(messages({items: ['something']}, startLoadMessages('anything')).items).toEqual([])
})

test('finished load messages sets isLoading to false', () => {
	expect(messages(undefined, finishedLoadMessages('group', ['anything'])).isLoading).toEqual(false)
})

test('finished load messages sets items', () => {
	const messageItems = [{ts: 'a', text: 'aText'}, {ts: 'b', text: 'bText'}]
	const messageItemsExpected = [{id: 'a', text: 'aText'}, {id: 'b', text: 'bText'}]
	expect(messages({items: ['something']}, finishedLoadMessages('group', messageItems)).items)
		.toEqual(messageItemsExpected)
})