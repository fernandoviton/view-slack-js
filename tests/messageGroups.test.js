import { startLoadMessageGroups, finishedLoadMessageGroups, startLoadMessages, finishedLoadMessages } from '../actions/index.js'
import messageGroups from '../reducers/messageGroups'

test('default messageGroups state', () => {
	expect(messageGroups(undefined, {type: undefined}))
		.toEqual({
			isLoading: false, 
			items: []
		})
})

test('start load messageGroups sets loading state to true', () => {
	expect(messageGroups(undefined, startLoadMessageGroups()).isLoading).toEqual(true)
})

test('start load messageGroups sets active messageGroups name to undefined', () => {
	expect(messageGroups({}, startLoadMessageGroups()).messageGroups).toEqual(undefined)
})

test('start load messageGroups empties items', () => {
	expect(messageGroups({items: ['anything']}, startLoadMessageGroups()).items).toEqual([])
})

test('finished load messageGroups sets loading state to false', () => {
	expect(messageGroups(undefined, finishedLoadMessageGroups(['anything'])).isLoading).toEqual(false)
})

test('finished load messageGroups sets active messageGroups name to undefined', () => {
	expect(messageGroups({}, finishedLoadMessageGroups(['anything'])).messageGroups)
		.toEqual(undefined)
})

test('finished load messageGroups sets items with name and empty messages', () => {
	expect(messageGroups(undefined, finishedLoadMessageGroups(['a', 'b'])).items)
		.toEqual([{name: 'a', messages: createEmptyMessages()}, {name:'b', messages: createEmptyMessages()}])
})

test('start load messages when no items is no-op', () => {
	expect(messageGroups({items:[]}, startLoadMessages('a')))
		.toEqual({items:[]})
})

test('start load messages when item is not present is no-op', () => {
	expect(messageGroups({items:[{name: 'b'}]}, startLoadMessages('a')))
		.toEqual({items:[{name: 'b'}]})
})

test('start load messages of "a" will sets isLoading of "a"', () => {
	expect(messageGroups({items:[{name: 'a'}, {name: 'b'}]}, startLoadMessages('a')).items)
		.toEqual([{name: 'a', messages: {isLoading: true, items: []}}, {name: 'b'}])
})

test('finished load messages when no items is no-op', () => {
	expect(messageGroups({items:[]}, finishedLoadMessages('a', ['anything'])))
		.toEqual({items:[]})
})

test('finished load messages when item is not present is no-op', () => {
	expect(messageGroups({items:[{name: 'b'}]}, finishedLoadMessages('a', ['anything'])))
		.toEqual({items:[{name: 'b'}]})
})

test('finished load messages of "a" will sets fields of "a"', () => {
	const messageItems = [{ts: 'a', text: 'aText'}, {ts: 'b', text: 'bText'}]
	const messageItemsExpected = {isLoading: false, items: [{id: 'a', text: 'aText'}, {id: 'b', text: 'bText'}]}
	expect(messageGroups({items:[{name: 'a'}, {name: 'b'}]}, finishedLoadMessages('a', messageItems)).items)
		.toEqual([{name: 'a', messages: messageItemsExpected}, {name: 'b'}])
})

const createEmptyMessages = () => {
	return {
		isLoading: false,
		items: []
	}
}